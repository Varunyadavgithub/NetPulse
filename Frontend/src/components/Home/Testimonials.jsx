import { StarIcon, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "IT Manager at TechCorp",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=150",
      content: "NetPulse transformed how we monitor our network. What used to take hours of manual checking now happens automatically.",
      rating: 5,
      company: "TechCorp",
      companyLogo: "/techcorp-logo.svg" // Add your company logos
    },
    {
      name: "Mike Rodriguez",
      role: "Network Administrator",
      avatar: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?w=150",
      content: "The real-time dashboard is a game-changer. We can spot issues before they become problems.",
      rating: 5,
      company: "CloudScale",
      companyLogo: "/cloudscale-logo.svg"
    },
    {
      name: "Emily Watson",
      role: "DevOps Engineer",
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?w=150",
      content: "Finally, a network monitoring solution that's both powerful and easy to use. Highly recommended!",
      rating: 5,
      company: "DevFlow",
      companyLogo: "/devflow-logo.svg"
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-800/50 to-gray-900/50" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-500 font-semibold mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
            Trusted by IT Teams Worldwide
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See what network administrators are saying about NetPulse's innovative monitoring solution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-[1.02] group"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 p-3 bg-blue-500/10 rounded-full group-hover:scale-110 transition-transform">
                <Quote className="w-6 h-6 text-blue-400" />
              </div>

              {/* Rating Stars */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current mr-1 group-hover:scale-110 transition-transform"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full ring-2 ring-gray-700 group-hover:ring-blue-500 transition-colors"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-800"></div>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>

              {/* Company Logo */}
              <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <img 
                  src={testimonial.companyLogo} 
                  alt={testimonial.company} 
                  className="w-12 h-12"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-gray-800/50 backdrop-blur-sm rounded-full px-8 py-4 border border-gray-700">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                500+
              </span>
              <span className="ml-2 text-gray-400">Active Users</span>
            </div>
            <div className="w-px h-8 bg-gray-700"></div>
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                4.9/5
              </span>
              <span className="ml-2 text-gray-400">Average Rating</span>
            </div>
            <div className="w-px h-8 bg-gray-700"></div>
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                99%
              </span>
              <span className="ml-2 text-gray-400">Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;