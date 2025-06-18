import { CheckCircle, ArrowRight, Zap } from "lucide-react";

const Pricing = () => {
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
      icon: "🚀",
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
      icon: "⚡",
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
      icon: "🏢",
    },
  ];

  return (
    <section id="pricing" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-800/50 to-gray-900/50" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-500 font-semibold mb-4">
            PRICING PLANS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Start monitoring your network today with flexible pricing options
            designed to scale with your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 
                transition-all duration-300 hover:transform hover:scale-[1.02]
                ${plan.popular ? "ring-2 ring-blue-500 md:transform md:scale-105" : ""}
                border border-gray-700 hover:border-gray-600
              `}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold inline-flex items-center">
                    <Zap className="w-4 h-4 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <span className="text-4xl mb-4 block">{plan.icon}</span>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2">
                  {plan.price}
                  {plan.period && (
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center space-x-3 group"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`
                  w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300
                  flex items-center justify-center space-x-2 group
                  ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/25"
                      : "bg-gray-700 hover:bg-gray-600 text-white"
                  }
                `}
              >
                <span>{plan.price === "Custom" ? "Contact Sales" : "Get Started"}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-400">
            Have questions about our pricing?{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
              Check our FAQ
            </a>{" "}
            or{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
              contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;