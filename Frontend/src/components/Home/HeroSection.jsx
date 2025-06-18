import { ArrowRight, Play, Users, Activity, Clock, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 to-purple-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center relative z-10">
          {/* Badge */}
          <div className="mb-8 inline-block">
            <div className="rounded-full bg-gray-800/60 backdrop-blur-sm border border-gray-700 px-4 py-1.5">
              <span className="text-sm font-medium text-gray-300">
                🚀 New Feature: Multi-Device Dashboard
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Stop Running Ping
            </span>
            <br />
            <span className="text-white">
              in <span className="text-blue-400">10</span> Terminals
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Start visualizing your network health with{" "}
            <span className="font-medium text-blue-400">
              one beautiful dashboard
            </span>
            . NetPulse automates device monitoring with{" "}
            <span className="font-medium">real-time status tracking</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-lg shadow-blue-500/25 cursor-pointer">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center space-x-3 hover:bg-gray-800/50 border border-gray-700 hover:border-gray-600 cursor-pointer">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700">
              <div className="flex justify-center mb-4">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-sm text-gray-400 font-medium">Uptime</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700">
              <div className="flex justify-center mb-4">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-sm text-gray-400 font-medium">
                Active Users
              </div>
            </div>
            <div className="text-center hidden md:block p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700">
              <div className="flex justify-center mb-4">
                <Activity className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm text-gray-400 font-medium">
                Monitoring
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
