import express from 'express';
import pingService from '../services/pingService.js';

const router = express.Router();

// Ping single device
router.post('/device/:id', async (req, res) => {
  try {
    const result = await pingService.pingDevice(req.params.id);
    res.json(result);
  } catch (error) {
    console.error('Error pinging device:', error);
    res.status(500).json({ 
      error: 'Failed to ping device',
      message: error.message 
    });
  }
});

// Ping all devices
router.post('/all', async (req, res) => {
  try {
    const results = await pingService.pingAllDevices();
    res.json({
      message: 'Ping all devices completed',
      results,
      timestamp: new Date()
    });
  } catch (error) {
    console.error('Error pinging all devices:', error);
    res.status(500).json({ 
      error: 'Failed to ping all devices',
      message: error.message 
    });
  }
});

// Get device ping history
router.get('/history/:deviceId', async (req, res) => {
  try {
    const { limit = 100 } = req.query;
    const history = await pingService.getDeviceHistory(
      req.params.deviceId, 
      parseInt(limit)
    );
    res.json(history);
  } catch (error) {
    console.error('Error fetching ping history:', error);
    res.status(500).json({ 
      error: 'Failed to fetch ping history',
      message: error.message 
    });
  }
});

// Get network statistics
router.get('/stats', async (req, res) => {
  try {
    const stats = await pingService.getNetworkStats();
    res.json(stats);
  } catch (error) {
    console.error('Error fetching network stats:', error);
    res.status(500).json({ 
      error: 'Failed to fetch network stats',
      message: error.message 
    });
  }
});

export default router;