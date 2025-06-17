import ping from 'ping';
import Device from '../models/Device.js';
import PingLog from '../models/PingLog.js';

class PingService {
  constructor() {
    this.activePings = new Map();
    this.maxConcurrentPings = parseInt(process.env.MAX_CONCURRENT_PINGS) || 10;
    this.pingTimeout = parseInt(process.env.PING_TIMEOUT) || 5000;
  }

  async pingDevice(deviceId) {
    try {
      const device = await Device.findById(deviceId);
      if (!device) {
        throw new Error('Device not found');
      }

      // Prevent duplicate pings for the same device
      if (this.activePings.has(deviceId)) {
        return { status: 'checking', message: 'Ping already in progress' };
      }

      // Update device status to checking
      await Device.findByIdAndUpdate(deviceId, { 
        status: 'checking',
        updatedAt: new Date()
      });

      this.activePings.set(deviceId, true);

      try {
        const result = await this.performPing(device.ip);
        const status = result.alive ? 'online' : 'offline';
        const responseTime = result.alive ? parseFloat(result.time) : null;

        // Update device with ping result
        const updatedDevice = await Device.findByIdAndUpdate(
          deviceId,
          {
            status,
            lastPing: new Date(),
            responseTime,
            uptime: result.alive ? Math.min((device.uptime || 0) + 0.1, 100) : Math.max((device.uptime || 0) - 1, 0),
            updatedAt: new Date()
          },
          { new: true }
        );

        // Log the ping result
        await this.logPingResult(deviceId, device.ip, result);

        return {
          status,
          responseTime,
          device: updatedDevice,
          timestamp: new Date()
        };
      } finally {
        this.activePings.delete(deviceId);
      }
    } catch (error) {
      this.activePings.delete(deviceId);
      
      // Update device status to unknown on error
      await Device.findByIdAndUpdate(deviceId, { 
        status: 'unknown',
        updatedAt: new Date()
      });

      throw error;
    }
  }

  async pingAllDevices() {
    try {
      const devices = await Device.find({ isActive: true });
      const results = [];

      // Process devices in batches to avoid overwhelming the network
      const batchSize = this.maxConcurrentPings;
      for (let i = 0; i < devices.length; i += batchSize) {
        const batch = devices.slice(i, i + batchSize);
        const batchPromises = batch.map(device => 
          this.pingDevice(device._id.toString()).catch(error => ({
            deviceId: device._id.toString(),
            error: error.message
          }))
        );

        const batchResults = await Promise.all(batchPromises);
        results.push(...batchResults);

        // Small delay between batches to prevent network congestion
        if (i + batchSize < devices.length) {
          await new Promise(resolve => setTimeout(resolve, 100));
        }
      }

      return results;
    } catch (error) {
      console.error('Error pinging all devices:', error);
      throw error;
    }
  }

  async performPing(host) {
    const config = {
      timeout: this.pingTimeout / 1000, // Convert to seconds
      min_reply: 1,
      extra: ['-c', '1'] // Send only 1 packet
    };

    try {
      const result = await ping.promise.probe(host, config);
      return {
        alive: result.alive,
        time: result.time !== 'unknown' ? result.time : null,
        packetLoss: result.packetLoss || 0
      };
    } catch (error) {
      return {
        alive: false,
        time: null,
        packetLoss: 100,
        error: error.message
      };
    }
  }

  async logPingResult(deviceId, deviceIp, result) {
    try {
      const logEntry = new PingLog({
        deviceId,
        deviceIp,
        status: result.alive ? 'online' : 'offline',
        responseTime: result.time,
        packetLoss: result.packetLoss || 0,
        error: result.error || null,
        timestamp: new Date()
      });

      await logEntry.save();
    } catch (error) {
      console.error('Error logging ping result:', error);
    }
  }

  async getDeviceHistory(deviceId, limit = 100) {
    try {
      const logs = await PingLog.find({ deviceId })
        .sort({ timestamp: -1 })
        .limit(limit)
        .lean();

      return logs;
    } catch (error) {
      console.error('Error fetching device history:', error);
      throw error;
    }
  }

  async getNetworkStats() {
    try {
      const devices = await Device.find({ isActive: true });
      const totalDevices = devices.length;
      const onlineDevices = devices.filter(d => d.status === 'online').length;
      const offlineDevices = devices.filter(d => d.status === 'offline').length;
      
      const onlineResponseTimes = devices
        .filter(d => d.status === 'online' && d.responseTime !== null)
        .map(d => d.responseTime);
      
      const averageResponseTime = onlineResponseTimes.length > 0
        ? onlineResponseTimes.reduce((sum, time) => sum + time, 0) / onlineResponseTimes.length
        : 0;

      return {
        totalDevices,
        onlineDevices,
        offlineDevices,
        averageResponseTime: Math.round(averageResponseTime * 100) / 100,
        uptime: totalDevices > 0 ? (onlineDevices / totalDevices) * 100 : 0
      };
    } catch (error) {
      console.error('Error calculating network stats:', error);
      throw error;
    }
  }
}

export default new PingService();