import cron from 'node-cron';
import pingService from '../services/pingService.js';

class Scheduler {
  constructor() {
    this.jobs = new Map();
    this.isRunning = false;
  }

  start() {
    if (this.isRunning) {
      console.log('Scheduler is already running');
      return;
    }

    // Auto-ping all devices every 5 minutes
    const autoPingJob = cron.schedule('*/5 * * * *', async () => {
      try {
        console.log('Running scheduled ping for all devices...');
        const results = await pingService.pingAllDevices();
        console.log(`Scheduled ping completed. Processed ${results.length} devices.`);
      } catch (error) {
        console.error('Error in scheduled ping:', error);
      }
    }, {
      scheduled: false
    });

    // Cleanup old ping logs daily at 2 AM
    const cleanupJob = cron.schedule('0 2 * * *', async () => {
      try {
        console.log('Running daily cleanup...');
        // MongoDB TTL index will handle automatic cleanup
        // This is just for logging purposes
        console.log('Daily cleanup completed');
      } catch (error) {
        console.error('Error in daily cleanup:', error);
      }
    }, {
      scheduled: false
    });

    // Health check every hour
    const healthCheckJob = cron.schedule('0 * * * *', async () => {
      try {
        const stats = await pingService.getNetworkStats();
        console.log(`Network Health Check - Online: ${stats.onlineDevices}/${stats.totalDevices}, Avg Response: ${stats.averageResponseTime}ms`);
      } catch (error) {
        console.error('Error in health check:', error);
      }
    }, {
      scheduled: false
    });

    this.jobs.set('autoPing', autoPingJob);
    this.jobs.set('cleanup', cleanupJob);
    this.jobs.set('healthCheck', healthCheckJob);

    // Start all jobs
    autoPingJob.start();
    cleanupJob.start();
    healthCheckJob.start();

    this.isRunning = true;
    console.log('Scheduler started with the following jobs:');
    console.log('- Auto-ping all devices: Every 5 minutes');
    console.log('- Daily cleanup: Every day at 2 AM');
    console.log('- Health check: Every hour');
  }

  stop() {
    if (!this.isRunning) {
      console.log('Scheduler is not running');
      return;
    }

    this.jobs.forEach((job, name) => {
      job.stop();
      console.log(`Stopped job: ${name}`);
    });

    this.jobs.clear();
    this.isRunning = false;
    console.log('Scheduler stopped');
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      activeJobs: Array.from(this.jobs.keys())
    };
  }
}

export default new Scheduler();