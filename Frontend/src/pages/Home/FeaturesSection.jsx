import { Bell, Database, Eye, Search, Smartphone, Zap } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Parallel Ping Monitoring",
      description:
        "Monitor multiple IPs simultaneously with lightning-fast parallel ping checks across your entire network infrastructure.",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Real-time Status Dashboard",
      description:
        "Get instant visual feedback with color-coded status indicators. Green means online, red means offline - it's that simple.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Historical Logging",
      description:
        "Track device connectivity patterns over time with comprehensive logs and historical data analysis.",
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Smart Alerts",
      description:
        "Receive instant notifications when devices go offline or experience connectivity issues.",
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Device Management",
      description:
        "Easily add, edit, and organize network devices with search and filtering capabilities.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Responsive",
      description:
        "Monitor your network from anywhere with our fully responsive mobile-friendly dashboard.",
    },
  ];
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
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
              className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6 text-blue-400">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
