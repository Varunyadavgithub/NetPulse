import {
  Bell,
  Database,
  Eye,
  Search,
  Smartphone,
  Zap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

const FeaturesSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Parallel Ping Monitoring",
      description:
        "Monitor multiple IPs simultaneously with lightning-fast parallel ping checks across your entire network infrastructure.",
      color: "blue",
      benefits: [
        "Up to 10x faster monitoring",
        "Reduced system load",
        "Real-time updates",
      ],
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Real-time Status Dashboard",
      description:
        "Get instant visual feedback with color-coded status indicators. Green means online, red means offline - it's that simple.",
      color: "purple",
      benefits: [
        "Visual status indicators",
        "Custom dashboard layouts",
        "Quick insights",
      ],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Historical Logging",
      description:
        "Track device connectivity patterns over time with comprehensive logs and historical data analysis.",
      color: "green",
      benefits: ["Unlimited history", "Data export", "Trend analysis"],
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Smart Alerts",
      description:
        "Receive instant notifications when devices go offline or experience connectivity issues.",
      color: "yellow",
      benefits: ["Custom alert rules", "Multiple channels", "Priority levels"],
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Device Management",
      description:
        "Easily add, edit, and organize network devices with search and filtering capabilities.",
      color: "pink",
      benefits: ["Bulk operations", "Smart grouping", "Quick search"],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Responsive",
      description:
        "Monitor your network from anywhere with our fully responsive mobile-friendly dashboard.",
      color: "orange",
      benefits: ["Native apps", "Touch optimized", "Offline support"],
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20",
      purple: "bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20",
      green: "bg-green-500/10 text-green-400 group-hover:bg-green-500/20",
      yellow: "bg-yellow-500/10 text-yellow-400 group-hover:bg-yellow-500/20",
      pink: "bg-pink-500/10 text-pink-400 group-hover:bg-pink-500/20",
      orange: "bg-orange-500/10 text-orange-400 group-hover:bg-orange-500/20",
    };
    return colors[color];
  };

  return (
    <section
      id="features"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-800/50 to-gray-900/50" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-500 font-semibold mb-4">
            FEATURES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
            Powerful Features, Simple Interface
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to monitor your network infrastructure in one
            comprehensive dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-[1.02] border border-gray-700 hover:border-gray-600 cursor-pointer"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${getColorClasses(
                  feature.color
                )}`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400 mb-6">{feature.description}</p>

              {/* Benefits List */}
              <ul
                className={`space-y-2 transition-all duration-300 ${
                  hoveredFeature === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {feature.benefits.map((benefit, i) => (
                  <li
                    key={i}
                    className="flex items-center text-sm text-gray-400"
                  >
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <div className="absolute bottom-8 right-8">
                <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Feature Highlight */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center justify-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>View all features</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
