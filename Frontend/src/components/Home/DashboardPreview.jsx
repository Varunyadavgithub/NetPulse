import { CheckCircle, Database, Monitor, Server, XCircle, Activity, Clock, RefreshCw } from "lucide-react";
import { useState, useEffect } from "react";

const DashboardPreview = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-gray-700">
          {/* Dashboard Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-3">
              <Activity className="w-5 h-5 text-blue-400" />
              <h2 className="text-xl font-semibold">Network Monitor</h2>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-400">
                <Clock className="w-4 h-4 inline mr-2" />
                {currentTime.toLocaleTimeString()}
              </div>
              <button 
                onClick={handleRefresh}
                className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <RefreshCw className={`w-5 h-5 text-gray-400 ${isRefreshing ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>

          {/* Device Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Web Server Card */}
            <div className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-6 border border-gray-600 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-blue-500/10 rounded-lg group-hover:scale-110 transition-transform">
                    <Server className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="font-semibold">Web Server</span>
                </div>
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm flex items-center">
                  <span className="w-3 h-3 inline-block bg-gray-600 rounded-full mr-2"></span>
                  192.168.1.10
                </p>
                <p className="text-green-400 text-sm flex items-center">
                  <span className="w-3 h-3 inline-block bg-green-500/30 rounded-full mr-2 animate-pulse"></span>
                  Online • 24ms
                </p>
              </div>
            </div>

            {/* Database Card */}
            <div className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-6 border border-gray-600 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-purple-500/10 rounded-lg group-hover:scale-110 transition-transform">
                    <Database className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="font-semibold">Database</span>
                </div>
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm flex items-center">
                  <span className="w-3 h-3 inline-block bg-gray-600 rounded-full mr-2"></span>
                  192.168.1.20
                </p>
                <p className="text-green-400 text-sm flex items-center">
                  <span className="w-3 h-3 inline-block bg-green-500/30 rounded-full mr-2 animate-pulse"></span>
                  Online • 18ms
                </p>
              </div>
            </div>

            {/* CCTV System Card */}
            <div className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-6 border border-gray-600 hover:border-red-500/50 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-red-500/10 rounded-lg group-hover:scale-110 transition-transform">
                    <Monitor className="w-5 h-5 text-red-400" />
                  </div>
                  <span className="font-semibold">CCTV System</span>
                </div>
                <XCircle className="w-6 h-6 text-red-500" />
              </div>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm flex items-center">
                  <span className="w-3 h-3 inline-block bg-gray-600 rounded-full mr-2"></span>
                  192.168.1.30
                </p>
                <p className="text-red-400 text-sm flex items-center">
                  <span className="w-3 h-3 inline-block bg-red-500/30 rounded-full mr-2"></span>
                  Offline • Timeout
                </p>
              </div>
            </div>
          </div>

          {/* Dashboard Footer */}
          <div className="text-center border-t border-gray-700 pt-6">
            <p className="text-gray-400 mb-4 flex items-center justify-center">
              <Activity className="w-4 h-4 mr-2" />
              Real-time Network Status Dashboard
            </p>
            <div className="inline-flex items-center justify-center space-x-6 text-sm bg-gray-700/30 rounded-full px-6 py-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span>2 Online</span>
              </div>
              <div className="w-px h-4 bg-gray-600"></div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span>1 Offline</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;