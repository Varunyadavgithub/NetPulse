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
import Navbar from "./Home/Navbar";
import Footer from "./Home/Footer";
import HeroSection from "./Home/HeroSection";
import DashboardPreview from "./Home/DashboardPreview";
import ProblemSection from "./Home/ProblemSection";
import FeaturesSection from "./Home/FeaturesSection";

function Home() {
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
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Dashboard Preview */}
      <DashboardPreview />

      {/* Problem Section */}
      <ProblemSection />

      {/* Features Section */}
      <FeaturesSection />

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
      <Footer />
    </div>
  );
}

export default Home;
