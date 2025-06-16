export interface Device {
  id: string;
  name: string;
  ip: string;
  location: string;
  type: DeviceType;
  status: DeviceStatus;
  lastPing: Date | null;
  responseTime: number | null;
  uptime: number;
  description?: string;
}

export type DeviceStatus = 'online' | 'offline' | 'checking' | 'unknown';

export type DeviceType = 'server' | 'printer' | 'router' | 'switch' | 'camera' | 'workstation' | 'other';

export interface PingResult {
  deviceId: string;
  status: DeviceStatus;
  responseTime: number | null;
  timestamp: Date;
  error?: string;
}

export interface NetworkStats {
  totalDevices: number;
  onlineDevices: number;
  offlineDevices: number;
  averageResponseTime: number;
}