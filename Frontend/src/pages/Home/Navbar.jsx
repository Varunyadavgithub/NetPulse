import { useState } from "react";
import { Activity, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed w-full z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Activity className="h-8 w-8 text-primary-600" />
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-success-500 rounded-full animate-ping-slow"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold">NetPulse</h1>
              <p className="text-sm">Your Smart Network Monitoring Space</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </a>
            <a
              href="#demo"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Demo
            </a>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-4 py-6 space-y-4">
            <a
              href="#features"
              className="block text-gray-300 hover:text-white"
            >
              Features
            </a>
            <a href="#pricing" className="block text-gray-300 hover:text-white">
              Pricing
            </a>
            <a href="#demo" className="block text-gray-300 hover:text-white">
              Demo
            </a>
            <button className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
