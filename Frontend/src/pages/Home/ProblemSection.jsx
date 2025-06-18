import { XCircle } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Problem IT Teams Face Daily
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Manual Terminal Chaos</h3>
                  <p className="text-gray-400">
                    Running ping commands in 10+ terminal windows is
                    time-consuming and error-prone.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">No Historical Data</h3>
                  <p className="text-gray-400">
                    No way to track connectivity patterns or identify recurring
                    issues over time.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Reactive Monitoring</h3>
                  <p className="text-gray-400">
                    Finding out about network issues only after users complain.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 rounded-2xl p-8">
            <div className="bg-black rounded-lg p-4 font-mono text-sm text-green-400">
              <div>$ ping 192.168.1.10</div>
              <div>$ ping 192.168.1.20</div>
              <div>$ ping 192.168.1.30</div>
              <div>$ ping 192.168.1.40</div>
              <div>$ ping 192.168.1.50</div>
              <div className="text-red-400">
                $ ping 192.168.1.60 # timeout...
              </div>
              <div>$ ping 192.168.1.70</div>
              <div>$ ping 192.168.1.80</div>
              <div className="text-gray-600">...</div>
            </div>
            <p className="text-gray-400 text-center mt-4">
              The old way: Multiple terminals, manual tracking
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
