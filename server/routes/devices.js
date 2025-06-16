import express from 'express';
import Device from '../models/Device.js';
import pingService from '../services/pingService.js';

const router = express.Router();

// Get all devices
router.get('/', async (req, res) => {
  try {
    const { location, type, status, search } = req.query;
    let query = { isActive: true };

    // Apply filters
    if (location) query.location = location;
    if (type && type !== 'all') query.type = type;
    if (status && status !== 'all') query.status = status;
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { ip: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    const devices = await Device.find(query).sort({ name: 1 });
    res.json(devices);
  } catch (error) {
    console.error('Error fetching devices:', error);
    res.status(500).json({ error: 'Failed to fetch devices' });
  }
});

// Get device by ID
router.get('/:id', async (req, res) => {
  try {
    const device = await Device.findById(req.params.id);
    if (!device || !device.isActive) {
      return res.status(404).json({ error: 'Device not found' });
    }
    res.json(device);
  } catch (error) {
    console.error('Error fetching device:', error);
    res.status(500).json({ error: 'Failed to fetch device' });
  }
});

// Create new device
router.post('/', async (req, res) => {
  try {
    const { name, ip, location, type, description } = req.body;

    // Validate required fields
    if (!name || !ip || !location || !type) {
      return res.status(400).json({ 
        error: 'Missing required fields: name, ip, location, type' 
      });
    }

    // Check if IP already exists
    const existingDevice = await Device.findOne({ ip, isActive: true });
    if (existingDevice) {
      return res.status(409).json({ 
        error: 'Device with this IP address already exists' 
      });
    }

    const device = new Device({
      name: name.trim(),
      ip: ip.trim(),
      location: location.trim(),
      type,
      description: description?.trim() || ''
    });

    await device.save();
    res.status(201).json(device);
  } catch (error) {
    console.error('Error creating device:', error);
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        error: 'Validation error', 
        details: error.message 
      });
    }
    res.status(500).json({ error: 'Failed to create device' });
  }
});

// Update device
router.put('/:id', async (req, res) => {
  try {
    const { name, ip, location, type, description } = req.body;
    const deviceId = req.params.id;

    // Check if device exists
    const existingDevice = await Device.findById(deviceId);
    if (!existingDevice || !existingDevice.isActive) {
      return res.status(404).json({ error: 'Device not found' });
    }

    // Check if new IP conflicts with another device
    if (ip && ip !== existingDevice.ip) {
      const conflictDevice = await Device.findOne({ 
        ip: ip.trim(), 
        isActive: true, 
        _id: { $ne: deviceId } 
      });
      if (conflictDevice) {
        return res.status(409).json({ 
          error: 'Another device with this IP address already exists' 
        });
      }
    }

    const updateData = {
      updatedAt: new Date()
    };

    if (name) updateData.name = name.trim();
    if (ip) updateData.ip = ip.trim();
    if (location) updateData.location = location.trim();
    if (type) updateData.type = type;
    if (description !== undefined) updateData.description = description.trim();

    const device = await Device.findByIdAndUpdate(
      deviceId,
      updateData,
      { new: true, runValidators: true }
    );

    res.json(device);
  } catch (error) {
    console.error('Error updating device:', error);
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        error: 'Validation error', 
        details: error.message 
      });
    }
    res.status(500).json({ error: 'Failed to update device' });
  }
});

// Delete device (soft delete)
router.delete('/:id', async (req, res) => {
  try {
    const device = await Device.findById(req.params.id);
    if (!device || !device.isActive) {
      return res.status(404).json({ error: 'Device not found' });
    }

    await Device.findByIdAndUpdate(req.params.id, { 
      isActive: false,
      updatedAt: new Date()
    });

    res.json({ message: 'Device deleted successfully' });
  } catch (error) {
    console.error('Error deleting device:', error);
    res.status(500).json({ error: 'Failed to delete device' });
  }
});

// Get unique locations
router.get('/meta/locations', async (req, res) => {
  try {
    const locations = await Device.distinct('location', { isActive: true });
    res.json(locations.sort());
  } catch (error) {
    console.error('Error fetching locations:', error);
    res.status(500).json({ error: 'Failed to fetch locations' });
  }
});

// Get device types
router.get('/meta/types', async (req, res) => {
  try {
    const types = ['server', 'printer', 'router', 'switch', 'camera', 'workstation', 'other'];
    res.json(types);
  } catch (error) {
    console.error('Error fetching device types:', error);
    res.status(500).json({ error: 'Failed to fetch device types' });
  }
});

export default router;