import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { Button } from './ui/Button';
import { DeviceType } from '../types/device';
import { isValidIP } from '../utils/deviceUtils';

interface AddDeviceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (device: {
    name: string;
    ip: string;
    location: string;
    type: DeviceType;
    description?: string;
  }) => void;
}

export const AddDeviceModal: React.FC<AddDeviceModalProps> = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    ip: '',
    location: '',
    type: 'server' as DeviceType,
    description: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Device name is required';
    }

    if (!formData.ip.trim()) {
      newErrors.ip = 'IP address is required';
    } else if (!isValidIP(formData.ip)) {
      newErrors.ip = 'Please enter a valid IP address';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onAdd(formData);
      setFormData({
        name: '',
        ip: '',
        location: '',
        type: 'server',
        description: ''
      });
      setErrors({});
      onClose();
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="flex items-center justify-between p-6 border-b border-dark-200">
          <h2 className="text-xl font-semibold text-dark-900 flex items-center">
            <Plus className="h-5 w-5 mr-2 text-primary-600" />
            Add New Device
          </h2>
          <button
            onClick={onClose}
            className="text-dark-400 hover:text-dark-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-dark-700 mb-1">
              Device Name *
            </label>
            <input
              type="text"
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                errors.name ? 'border-error-500' : 'border-dark-300'
              }`}
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="Enter device name"
            />
            {errors.name && <p className="text-error-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-dark-700 mb-1">
              IP Address *
            </label>
            <input
              type="text"
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors font-mono ${
                errors.ip ? 'border-error-500' : 'border-dark-300'
              }`}
              value={formData.ip}
              onChange={(e) => handleChange('ip', e.target.value)}
              placeholder="192.168.1.100"
            />
            {errors.ip && <p className="text-error-500 text-sm mt-1">{errors.ip}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-dark-700 mb-1">
              Location *
            </label>
            <input
              type="text"
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                errors.location ? 'border-error-500' : 'border-dark-300'
              }`}
              value={formData.location}
              onChange={(e) => handleChange('location', e.target.value)}
              placeholder="Server Room"
            />
            {errors.location && <p className="text-error-500 text-sm mt-1">{errors.location}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-dark-700 mb-1">
              Device Type
            </label>
            <select
              className="w-full px-3 py-2 border border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
              value={formData.type}
              onChange={(e) => handleChange('type', e.target.value)}
            >
              <option value="server">Server</option>
              <option value="printer">Printer</option>
              <option value="router">Router</option>
              <option value="switch">Switch</option>
              <option value="camera">Camera</option>
              <option value="workstation">Workstation</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-dark-700 mb-1">
              Description (Optional)
            </label>
            <textarea
              className="w-full px-3 py-2 border border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              rows={3}
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              placeholder="Additional notes about this device..."
            />
          </div>

          <div className="flex items-center justify-end space-x-3 pt-4 border-t border-dark-200">
            <Button variant="secondary" onClick={onClose} type="button">
              Cancel
            </Button>
            <Button type="submit">
              Add Device
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};