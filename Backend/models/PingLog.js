import mongoose from 'mongoose';

const pingLogSchema = new mongoose.Schema({
  deviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Device',
    required: true
  },
  deviceIp: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['online', 'offline', 'timeout', 'error'],
    required: true
  },
  responseTime: {
    type: Number,
    default: null,
    min: 0
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  error: {
    type: String,
    default: null
  },
  packetLoss: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  }
});

// Index for faster queries
pingLogSchema.index({ deviceId: 1, timestamp: -1 });
pingLogSchema.index({ timestamp: -1 });
pingLogSchema.index({ status: 1 });

// TTL index to automatically delete old logs after 30 days
pingLogSchema.index({ timestamp: 1 }, { expireAfterSeconds: 30 * 24 * 60 * 60 });

export default mongoose.model('PingLog', pingLogSchema);