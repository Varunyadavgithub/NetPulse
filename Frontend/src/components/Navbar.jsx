import { useState, useEffect } from "react";
import { Activity, Menu, X, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-gray-900/95 backdrop-blur-md shadow-lg" 
        : "bg-transparent"
    }`}>
      {/* Border Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-50"></div>

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navbar */}
        <div className="flex justify-between items-center h-20">
          {/* Brand */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <Activity className="h-8 w-8 text-blue-500 group-hover:text-blue-400 transition-colors" />
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full animate-ping"></div>
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                NetPulse
              </h1>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                Smart Network Monitoring
              </p>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {["Features", "Pricing", "Demo"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group text-gray-300 hover:text-white transition-colors"
              >
                <span>{item}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <button className="bg-blue-600 hover:bg-blue-500 px-6 py-2.5 rounded-lg text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center group">
              <span>Get Started</span>
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 p-2 hover:bg-gray-800 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`
          fixed top-0 right-0 h-screen w-72 bg-gray-900 z-40 
          transform transition-all duration-500 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden
          border-l border-gray-800
        `}
      >
        <div className="px-6 py-20 space-y-6">
          {["Features", "Pricing", "Demo"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-gray-300 hover:text-white text-xl p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300 flex items-center justify-between group"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>{item}</span>
              <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>
          ))}
          <div className="pt-6">
            <button
              className="w-full bg-blue-600 hover:bg-blue-500 p-4 rounded-lg transition-all duration-300 text-xl text-white flex items-center justify-center space-x-2 group"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Get Started</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden transition-all duration-300"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;