import React from 'react';
import { Search, Filter, RefreshCw } from 'lucide-react';
import { Button } from './ui/Button';
import { DeviceType, DeviceStatus } from '../types/device';

interface SearchAndFiltersProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedLocation: string;
  onLocationChange: (location: string) => void;
  selectedType: DeviceType | 'all';
  onTypeChange: (type: DeviceType | 'all') => void;
  selectedStatus: DeviceStatus | 'all';
  onStatusChange: (status: DeviceStatus | 'all') => void;
  locations: string[];
  onPingAll: () => void;
  isPinging: boolean;
}

export const SearchAndFilters: React.FC<SearchAndFiltersProps> = ({
  searchTerm,
  onSearchChange,
  selectedLocation,
  onLocationChange,
  selectedType,
  onTypeChange,
  selectedStatus,
  onStatusChange,
  locations,
  onPingAll,
  isPinging
}) => {
  return (
    <div className="bg-white rounded-xl border border-dark-200 p-6 mb-8 animate-fade-in">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-dark-400" />
          <input
            type="text"
            placeholder="Search devices by name or IP..."
            className="w-full pl-10 pr-4 py-2 border border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          <select
            className="px-3 py-2 border border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
            value={selectedLocation}
            onChange={(e) => onLocationChange(e.target.value)}
          >
            <option value="">All Locations</option>
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>

          <select
            className="px-3 py-2 border border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
            value={selectedType}
            onChange={(e) => onTypeChange(e.target.value as DeviceType | 'all')}
          >
            <option value="all">All Types</option>
            <option value="server">Server</option>
            <option value="printer">Printer</option>
            <option value="router">Router</option>
            <option value="switch">Switch</option>
            <option value="camera">Camera</option>
            <option value="workstation">Workstation</option>
            <option value="other">Other</option>
          </select>

          <select
            className="px-3 py-2 border border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
            value={selectedStatus}
            onChange={(e) => onStatusChange(e.target.value as DeviceStatus | 'all')}
          >
            <option value="all">All Status</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
            <option value="checking">Checking</option>
            <option value="unknown">Unknown</option>
          </select>

          <Button
            onClick={onPingAll}
            isLoading={isPinging}
            className="flex items-center space-x-2"
          >
            <RefreshCw className={`h-4 w-4 ${isPinging ? 'animate-spin' : ''}`} />
            <span>Ping All</span>
          </Button>
        </div>
      </div>
    </div>
  );
};