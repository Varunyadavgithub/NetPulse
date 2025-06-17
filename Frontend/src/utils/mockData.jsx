export const generateMockDevices = () => {
  const locations = [
    "Server Room",
    "Office Floor 1",
    "Office Floor 2",
    "Reception",
    "Conference Room A",
    "IT Room",
  ];
  const deviceTypes = [
    "server",
    "printer",
    "router",
    "switch",
    "camera",
    "workstation",
  ];
  const deviceNames = [
    "Main Server",
    "Backup Server",
    "HP LaserJet Pro",
    "Canon Printer",
    "Main Router",
    "Switch-01",
    "Security Cam 1",
    "Security Cam 2",
    "CEO Workstation",
    "Dev Machine 1",
    "Dev Machine 2",
    "Conference Printer",
    "WiFi Access Point",
    "NAS Storage",
    "Database Server",
    "Web Server",
    "Mail Server",
    "CCTV-Reception",
  ];

  return deviceNames.map((name, index) => ({
    id: `device-${index + 1}`,
    name,
    ip: `192.168.1.${10 + index}`,
    location: locations[index % locations.length],
    type: deviceTypes[index % deviceTypes.length],
    status: Math.random() > 0.15 ? "online" : "offline",
    lastPing: new Date(Date.now() - Math.random() * 300000), // Random time within last 5 minutes
    responseTime:
      Math.random() > 0.15 ? Math.floor(Math.random() * 100) + 1 : null,
    uptime: Math.random() * 99.9 + 0.1,
    description: `${name} - Located in ${locations[index % locations.length]}`,
  }));
};
