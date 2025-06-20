import { useState, useEffect, useCallback } from "react";
import { generateMockDevices } from "../utils/mockData";

export const useDevices = () => {
  const [devices, setDevices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPinging, setIsPinging] = useState(false);

  useEffect(() => {
    // Initialize with mock data
    const mockDevices = generateMockDevices();
    setDevices(mockDevices);
    setIsLoading(false);
  }, []);

  const simulatePing = useCallback(async (deviceId) => {
    return new Promise((resolve) => {
      // Simulate network ping delay
      const delay = Math.random() * 2000 + 500; // 500ms to 2.5s

      setTimeout(() => {
        setDevices((prev) =>
          prev.map((device) => {
            if (device.id === deviceId) {
              const isOnline = Math.random() > 0.1; // 90% success rate
              return {
                ...device,
                status: isOnline ? "online" : "offline",
                lastPing: new Date(),
                responseTime: isOnline
                  ? Math.floor(Math.random() * 100) + 1
                  : null,
                uptime: isOnline
                  ? Math.min(device.uptime + Math.random() * 0.1, 100)
                  : Math.max(device.uptime - Math.random() * 5, 0),
              };
            }
            return device;
          })
        );
        resolve();
      }, delay);
    });
  }, []);

  const pingDevice = useCallback(
    async (deviceId) => {
      setDevices((prev) =>
        prev.map((device) =>
          device.id === deviceId ? { ...device, status: "checking" } : device
        )
      );

      await simulatePing(deviceId);
    },
    [simulatePing]
  );

  const pingAllDevices = useCallback(async () => {
    setIsPinging(true);

    // Set all devices to checking status
    setDevices((prev) =>
      prev.map((device) => ({ ...device, status: "checking" }))
    );

    // Ping all devices in parallel
    const promises = devices.map((device) => simulatePing(device.id));
    await Promise.all(promises);

    setIsPinging(false);
  }, [devices, simulatePing]);

  const addDevice = useCallback((newDevice) => {
    const device = {
      ...newDevice,
      id: `device-${Date.now()}`,
      status: "unknown",
      lastPing: null,
      responseTime: null,
      uptime: 0,
    };

    setDevices((prev) => [...prev, device]);
    return device.id;
  }, []);

  const updateDevice = useCallback((deviceId, updates) => {
    setDevices((prev) =>
      prev.map((device) =>
        device.id === deviceId ? { ...device, ...updates } : device
      )
    );
  }, []);

  const deleteDevice = useCallback((deviceId) => {
    setDevices((prev) => prev.filter((device) => device.id !== deviceId));
  }, []);

  return {
    devices,
    isLoading,
    isPinging,
    pingDevice,
    pingAllDevices,
    addDevice,
    updateDevice,
    deleteDevice,
  };
};
