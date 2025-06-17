import mongoose from 'mongoose';

const deviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  ip: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
        return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(v);
      },
      message: 'Invalid IP address format'
    }
  },
  location: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  type: {
    type: String,
    required: true,
    enum: ['server', 'printer', 'router', 'switch', 'camera', 'workstation', 'other'],
    default: 'other'
  },
  description: {
    type: String,
    trim: true,
    maxlength: 500
  },
  status: {
    type: String,
    enum: ['online', 'offline', 'checking', 'unknown'],
    default: 'unknown'
  },
  lastPing: {
    type: Date,
    default: null
  },
  responseTime: {
    type: Number,
    default: null,
    min: 0
  },
  uptime: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
deviceSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

// Index for faster queries
deviceSchema.index({ ip: 1 });
deviceSchema.index({ status: 1 });
deviceSchema.index({ location: 1 });
deviceSchema.index({ type: 1 });

export default mongoose.model('Device', deviceSchema);