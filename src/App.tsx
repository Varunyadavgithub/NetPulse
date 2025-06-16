import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { NetworkStats } from './components/NetworkStats';
import { SearchAndFilters } from './components/SearchAndFilters';
import { DeviceCard } from './components/DeviceCard';
import { AddDeviceModal } from './components/AddDeviceModal';
import { useDevices } from './hooks/useDevices';
import { calculateNetworkStats } from './utils/deviceUtils';
import { DeviceType, DeviceStatus } from './types/device';

function App() {
  const { devices, isLoading, isPinging, pingDevice, pingAllDevices, addDevice, updateDevice, deleteDevice } = useDevices();
  
  // Modal and filter states
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState<DeviceType | 'all'>('all');
  const [selectedStatus, setSelectedStatus] = useState<DeviceStatus | 'all'>('all');

  // Get unique locations for filter
  const locations = useMemo(() => {
    return Array.from(new Set(devices.map(device => device.location))).sort();
  }, [devices]);

  // Filter devices based on search and filters
  const filteredDevices = useMemo(() => {
    return devices.filter(device => {
      const matchesSearch = device.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           device.ip.includes(searchTerm);
      const matchesLocation = !selectedLocation || device.location === selectedLocation;
      const matchesType = selectedType === 'all' || device.type === selectedType;
      const matchesStatus = selectedStatus === 'all' || device.status === selectedStatus;

      return matchesSearch && matchesLocation && matchesType && matchesStatus;
    });
  }, [devices, searchTerm, selectedLocation, selectedType, selectedStatus]);

  // Calculate network statistics
  const networkStats = useMemo(() => calculateNetworkStats(devices), [devices]);

  const handleAddDevice = (deviceData: Parameters<typeof addDevice>[0]) => {
    addDevice(deviceData);
  };

  const handleEditDevice = (device: typeof devices[0]) => {
    // For now, just log the device to edit
    console.log('Edit device:', device);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse">
            <div className="h-8 w-8 bg-primary-600 rounded-full mx-auto mb-4"></div>
          </div>
          <p className="text-dark-600">Loading NetPulse...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-50">
      <Header onAddDevice={() => setIsAddModalOpen(true)} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Network Statistics */}
        <NetworkStats stats={networkStats} />

        {/* Search and Filters */}
        <SearchAndFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedLocation={selectedLocation}
          onLocationChange={setSelectedLocation}
          selectedType={selectedType}
          onTypeChange={setSelectedType}
          selectedStatus={selectedStatus}
          onStatusChange={setSelectedStatus}
          locations={locations}
          onPingAll={pingAllDevices}
          isPinging={isPinging}
        />

        {/* Device Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-dark-900">
              Devices ({filteredDevices.length})
            </h2>
            <div className="text-sm text-dark-600">
              {filteredDevices.length !== devices.length && (
                <span>Filtered from {devices.length} total devices</span>
              )}
            </div>
          </div>

          {filteredDevices.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-dark-400 mb-4">
                <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 20a7.962 7.962 0 01-8-7.709V5a2 2 0 012-2h12a2 2 0 012 2v7.291z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-dark-900 mb-2">No devices found</h3>
              <p className="text-dark-600 mb-4">
                {devices.length === 0 
                  ? "Get started by adding your first device to monitor"
                  : "Try adjusting your search or filter criteria"
                }
              </p>
              {devices.length === 0 && (
                <button
                  onClick={() => setIsAddModalOpen(true)}
                  className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Add Your First Device
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDevices.map((device, index) => (
                <div
                  key={device.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <DeviceCard
                    device={device}
                    onPing={pingDevice}
                    onEdit={handleEditDevice}
                    onDelete={deleteDevice}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Add Device Modal */}
      <AddDeviceModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddDevice}
      />
    </div>
  );
}

export default App;