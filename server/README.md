# NetPulse Backend API

A comprehensive Node.js backend for network device monitoring with real ping functionality, device management, and automated scheduling.

## Features

- 🔄 **Real Network Pinging**: Uses actual ping commands to test device connectivity
- 📊 **Device Management**: Full CRUD operations for network devices
- 📈 **Statistics & Analytics**: Network health metrics and device uptime tracking
- 🕒 **Automated Scheduling**: Background jobs for continuous monitoring
- 📝 **Ping History Logging**: Complete audit trail of all ping operations
- 🔒 **Security**: Rate limiting, input validation, and secure headers
- 🚀 **Production Ready**: Error handling, logging, and graceful shutdown

## Quick Start

### Prerequisites

- Node.js 16+ 
- MongoDB 4.4+
- Network access to ping target devices

### Installation

1. **Install dependencies:**
   ```bash
   cd server
   npm install
   ```

2. **Environment Setup:**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Start MongoDB:**
   ```bash
   # Using Docker
   docker run -d -p 27017:27017 --name mongodb mongo:latest
   
   # Or use your existing MongoDB instance
   ```

4. **Run the server:**
   ```bash
   # Development mode with auto-reload
   npm run dev
   
   # Production mode
   npm start
   ```

## API Endpoints

### Device Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/devices` | Get all devices with optional filters |
| GET | `/api/devices/:id` | Get specific device |
| POST | `/api/devices` | Create new device |
| PUT | `/api/devices/:id` | Update device |
| DELETE | `/api/devices/:id` | Delete device |
| GET | `/api/devices/meta/locations` | Get unique locations |
| GET | `/api/devices/meta/types` | Get device types |

### Ping Operations

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/ping/device/:id` | Ping single device |
| POST | `/api/ping/all` | Ping all devices |
| GET | `/api/ping/history/:deviceId` | Get ping history |
| GET | `/api/ping/stats` | Get network statistics |

### System

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Health check |
| GET | `/api` | API documentation |

## Configuration

### Environment Variables

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/netpulse

# Ping Configuration
PING_TIMEOUT=5000
PING_INTERVAL=30000
MAX_CONCURRENT_PINGS=10

# Security
JWT_SECRET=your-super-secret-jwt-key-here
API_RATE_LIMIT=100
```

## Data Models

### Device Schema
```javascript
{
  name: String,           // Device name
  ip: String,            // IP address (validated)
  location: String,      // Physical location
  type: String,          // Device type (enum)
  description: String,   // Optional description
  status: String,        // Current status
  lastPing: Date,        // Last ping timestamp
  responseTime: Number,  // Response time in ms
  uptime: Number,        // Uptime percentage
  isActive: Boolean,     // Soft delete flag
  createdAt: Date,
  updatedAt: Date
}
```

### Ping Log Schema
```javascript
{
  deviceId: ObjectId,    // Reference to device
  deviceIp: String,      // IP address
  status: String,        // Ping result
  responseTime: Number,  // Response time in ms
  timestamp: Date,       // When ping occurred
  error: String,         // Error message if failed
  packetLoss: Number     // Packet loss percentage
}
```

## Automated Jobs

The server runs several background jobs:

- **Auto-ping**: Pings all devices every 5 minutes
- **Cleanup**: Removes old logs daily at 2 AM
- **Health Check**: Logs network statistics hourly

## Rate Limiting

- **General API**: 100 requests per 15 minutes
- **Ping Operations**: 30 requests per minute
- **Device Operations**: 20 requests per 5 minutes

## Error Handling

The API returns consistent error responses:

```json
{
  "error": "Error Type",
  "message": "Detailed error message",
  "details": "Additional context (development only)"
}
```

## Security Features

- **Helmet.js**: Security headers
- **CORS**: Cross-origin resource sharing
- **Rate Limiting**: Prevents abuse
- **Input Validation**: Mongoose schema validation
- **Soft Deletes**: Data preservation

## Production Deployment

1. **Set environment variables:**
   ```bash
   NODE_ENV=production
   MONGODB_URI=your-production-mongodb-uri
   ```

2. **Use PM2 for process management:**
   ```bash
   npm install -g pm2
   pm2 start server.js --name netpulse-api
   ```

3. **Set up reverse proxy (Nginx):**
   ```nginx
   location /api {
     proxy_pass http://localhost:5000;
     proxy_set_header Host $host;
     proxy_set_header X-Real-IP $remote_addr;
   }
   ```

## Monitoring

- Health check endpoint: `GET /health`
- Logs are written to console (use log aggregation in production)
- MongoDB connection monitoring included

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details