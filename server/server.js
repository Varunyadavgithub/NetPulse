import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import dotenv from 'dotenv';

// Import configurations and middleware
import connectDB from './config/database.js';
import errorHandler from './middleware/errorHandler.js';
import { apiLimiter, pingLimiter, deviceLimiter } from './middleware/rateLimiter.js';

// Import routes
import deviceRoutes from './routes/devices.js';
import pingRoutes from './routes/ping.js';

// Import scheduler
import scheduler from './jobs/scheduler.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

// Security middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

// CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-frontend-domain.com'] 
    : ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Compression middleware
app.use(compression());

// Logging middleware
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('combined'));
}

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Rate limiting
app.use('/api/', apiLimiter);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    scheduler: scheduler.getStatus()
  });
});

// API routes
app.use('/api/devices', deviceLimiter, deviceRoutes);
app.use('/api/ping', pingLimiter, pingRoutes);

// API documentation endpoint
app.get('/api', (req, res) => {
  res.json({
    name: 'NetPulse API',
    version: '1.0.0',
    description: 'Network monitoring and device management API',
    endpoints: {
      devices: {
        'GET /api/devices': 'Get all devices with optional filters',
        'GET /api/devices/:id': 'Get device by ID',
        'POST /api/devices': 'Create new device',
        'PUT /api/devices/:id': 'Update device',
        'DELETE /api/devices/:id': 'Delete device',
        'GET /api/devices/meta/locations': 'Get unique locations',
        'GET /api/devices/meta/types': 'Get device types'
      },
      ping: {
        'POST /api/ping/device/:id': 'Ping single device',
        'POST /api/ping/all': 'Ping all devices',
        'GET /api/ping/history/:deviceId': 'Get device ping history',
        'GET /api/ping/stats': 'Get network statistics'
      }
    }
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'The requested resource was not found',
    path: req.originalUrl
  });
});

// Error handling middleware
app.use(errorHandler);

// Start server
const server = app.listen(PORT, () => {
  console.log(`🚀 NetPulse API Server running on port ${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗 API Documentation: http://localhost:${PORT}/api`);
  console.log(`❤️  Health Check: http://localhost:${PORT}/health`);
  
  // Start the scheduler
  scheduler.start();
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  scheduler.stop();
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received. Shutting down gracefully...');
  scheduler.stop();
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

export default app;