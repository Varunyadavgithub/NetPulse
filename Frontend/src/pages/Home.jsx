import React, { useState, useEffect } from "react";
import {
  Activity,
  Shield,
  Zap,
  Eye,
  Bell,
  Database,
  Server,
  Monitor,
  CheckCircle,
  XCircle,
  ArrowRight,
  Play,
  Star,
  Users,
  Globe,
  BarChart3,
  Clock,
  Search,
  Layers,
  Smartphone,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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

  const techStack = [
    { name: "React.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "Express.js", category: "API" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "node-cron", category: "Scheduling" },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "IT Manager at TechCorp",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=150",
      content:
        "NetPulse transformed how we monitor our network. What used to take hours of manual checking now happens automatically.",
      rating: 5,
    },
    {
      name: "Mike Rodriguez",
      role: "Network Administrator",
      avatar:
        "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?w=150",
      content:
        "The real-time dashboard is a game-changer. We can spot issues before they become problems.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "DevOps Engineer",
      avatar:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?w=150",
      content:
        "Finally, a network monitoring solution that's both powerful and easy to use. Highly recommended!",
      rating: 5,
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for small teams",
      features: [
        "Monitor up to 10 devices",
        "Basic dashboard",
        "Email notifications",
        "7-day history",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "For growing organizations",
      features: [
        "Monitor up to 100 devices",
        "Advanced analytics",
        "Custom alerts",
        "90-day history",
        "API access",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Unlimited devices",
        "Custom integrations",
        "Advanced security",
        "Unlimited history",
        "24/7 support",
        "On-premise deployment",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Activity className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold">NetPulse</span>
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
              <a
                href="#pricing"
                className="block text-gray-300 hover:text-white"
              >
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Stop Running Ping in 10 Terminals
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Start visualizing your network health with one beautiful
              dashboard. NetPulse automates device monitoring with real-time
              status tracking.
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

      {/* Dashboard Preview */}
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

      {/* Problem Section */}
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
                    <h3 className="font-semibold mb-2">
                      Manual Terminal Chaos
                    </h3>
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
                      No way to track connectivity patterns or identify
                      recurring issues over time.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Reactive Monitoring</h3>
                    <p className="text-gray-400">
                      Finding out about network issues only after users
                      complain.
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

      {/* Features Section */}
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

      {/* Tech Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built with Modern Technologies
            </h2>
            <p className="text-xl text-gray-400">
              Powered by the MERN stack for reliability and performance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors"
              >
                <div className="font-semibold mb-2">{tech.name}</div>
                <div className="text-sm text-gray-400">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by IT Teams Worldwide
            </h2>
            <p className="text-xl text-gray-400">
              See what network administrators are saying about NetPulse
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-400">
              Start monitoring your network today with flexible pricing options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-gray-800 rounded-xl p-8 relative ${
                  plan.popular ? "ring-2 ring-blue-500 transform scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-2">
                    {plan.price}
                    {plan.period && (
                      <span className="text-lg text-gray-400">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-gray-700 hover:bg-gray-600 text-white"
                  }`}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Network Monitoring?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of IT teams who have already made the switch to
            smarter network monitoring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Activity className="w-8 h-8 text-blue-500" />
                <span className="text-xl font-bold">NetPulse</span>
              </div>
              <p className="text-gray-400 mb-4">
                Smart network monitoring made simple. Stop running ping in
                terminals, start using NetPulse.
              </p>
              <div className="flex space-x-4">
                <Github className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Mail className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Demo
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Status
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 NetPulse. All rights reserved. Built by Varun Yadav.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
