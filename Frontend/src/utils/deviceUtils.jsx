export const getStatusColor = (status) => {
  switch (status) {
    case "online":
      return "text-success-500 bg-success-50 border-success-200";
    case "offline":
      return "text-error-500 bg-error-50 border-error-200";
    case "checking":
      return "text-warning-500 bg-warning-50 border-warning-200";
    default:
      return "text-dark-400 bg-dark-50 border-dark-200";
  }
};

export const getStatusIcon = (status) => {
  switch (status) {
    case "online":
      return "check-circle";
    case "offline":
      return "x-circle";
    case "checking":
      return "loader";
    default:
      return "help-circle";
  }
};

export const calculateNetworkStats = (devices) => {
  const totalDevices = devices.length;
  const onlineDevices = devices.filter((d) => d.status === "online").length;
  const offlineDevices = devices.filter((d) => d.status === "offline").length;

  const onlineResponseTimes = devices
    .filter((d) => d.status === "online" && d.responseTime !== null)
    .map((d) => d.responseTime);

  const averageResponseTime =
    onlineResponseTimes.length > 0
      ? onlineResponseTimes.reduce((sum, time) => sum + time, 0) /
        onlineResponseTimes.length
      : 0;

  return {
    totalDevices,
    onlineDevices,
    offlineDevices,
    averageResponseTime: Math.round(averageResponseTime * 100) / 100,
  };
};

export const formatUptime = (uptime) => {
  return `${uptime.toFixed(2)}%`;
};

export const formatResponseTime = (responseTime) => {
  if (responseTime === null) return "N/A";
  return `${responseTime}ms`;
};

export const isValidIP = (ip) => {
  const ipRegex =
    /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return ipRegex.test(ip);
};
