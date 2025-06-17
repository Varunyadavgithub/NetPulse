import { Activity, Plus, Settings } from "lucide-react";
import { Button } from "./ui/Button";

export const Header = ({ onAddDevice }) => {
  return (
    <header className="bg-white border-b border-dark-200 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Activity className="h-8 w-8 text-primary-600" />
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-success-500 rounded-full animate-ping-slow"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-dark-900">NetPulse</h1>
                <p className="text-sm text-dark-600">
                  Smart Network Monitoring
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              onClick={onAddDevice}
              className="flex items-center space-x-2"
            >
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Add Device</span>
            </Button>

            <Button variant="ghost" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">Settings</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
