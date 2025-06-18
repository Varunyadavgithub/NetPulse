import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
            Stop Running Ping in 10 Terminals
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Start visualizing your network health with one beautiful dashboard.
            NetPulse automates device monitoring with real-time status tracking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
