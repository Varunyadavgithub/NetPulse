import rateLimit from 'express-rate-limit';

// General API rate limiter
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: parseInt(process.env.API_RATE_LIMIT) || 100, // limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests',
    message: 'Please try again later'
  },
  standardHeaders: true,
  legacyHeaders: false
});

// Stricter rate limiter for ping operations
export const pingLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 30, // limit each IP to 30 ping requests per minute
  message: {
    error: 'Too many ping requests',
    message: 'Please wait before pinging again'
  },
  standardHeaders: true,
  legacyHeaders: false
});

// Rate limiter for device creation/updates
export const deviceLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 20, // limit each IP to 20 device operations per 5 minutes
  message: {
    error: 'Too many device operations',
    message: 'Please wait before making more changes'
  },
  standardHeaders: true,
  legacyHeaders: false
});