import { CheckCircle, Database, Monitor, Server, XCircle } from "lucide-react";

const DashboardPreview = () => {
  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-700 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Server className="w-5 h-5 text-blue-400" />
                  <span className="font-semibold">Web Server</span>
                </div>
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>
              <p className="text-gray-400 text-sm">192.168.1.10</p>
              <p className="text-green-400 text-sm">Online • 24ms</p>
            </div>

            <div className="bg-gray-700 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Database className="w-5 h-5 text-purple-400" />
                  <span className="font-semibold">Database</span>
                </div>
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>
              <p className="text-gray-400 text-sm">192.168.1.20</p>
              <p className="text-green-400 text-sm">Online • 18ms</p>
            </div>

            <div className="bg-gray-700 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Monitor className="w-5 h-5 text-red-400" />
                  <span className="font-semibold">CCTV System</span>
                </div>
                <XCircle className="w-6 h-6 text-red-500" />
              </div>
              <p className="text-gray-400 text-sm">192.168.1.30</p>
              <p className="text-red-400 text-sm">Offline • Timeout</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-4">
              Real-time Network Status Dashboard
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>2 Online</span>
              </div>
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
