import { useEffect, useState } from "react";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(document.getElementById("cta-section"));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="cta-section"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black/50" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      {/* Animated Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-64 -top-64 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute -right-64 -bottom-64 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative">
        {/* Sparkle Icon */}
        <div
          className={`
          flex justify-center mb-8 transform
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }
          transition-all duration-700 delay-100
        `}
        >
          <div className="p-3 bg-blue-500/10 rounded-2xl">
            <Sparkles className="w-8 h-8 text-blue-400" />
          </div>
        </div>

        {/* Heading */}
        <h2
          className={`
          text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }
          transition-all duration-700 delay-200
        `}
        >
          Ready to Transform Your
          <span className="text-blue-400"> Network </span>
          Monitoring?
        </h2>

        {/* Subheading */}
        <p
          className={`
          text-xl text-gray-400 mb-12
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }
          transition-all duration-700 delay-300
        `}
        >
          Join thousands of IT teams who have already made the switch to smarter
          network monitoring with industry-leading solutions.
        </p>

        {/* CTA Buttons */}
        <div
          className={`
          flex flex-col sm:flex-row gap-6 justify-center
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }
          transition-all duration-700 delay-400
        `}
        >
          <button className="group bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center space-x-2 cursor-pointer">
            <span>Start Free Trial</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="group px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:bg-gray-800/50 border border-gray-700 hover:border-gray-600 cursor-pointer">
            <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Schedule Demo</span>
          </button>
        </div>

        {/* Social Proof */}
        <div
          className={`
          mt-16 pt-8 border-t border-gray-800
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }
          transition-all duration-700 delay-500
        `}
        >
          <p className="text-sm font-medium text-gray-400 mb-6">
            TRUSTED BY LEADING COMPANIES WORLDWIDE
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {/* Add your company logos here */}
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-8 w-32 bg-gray-800/50 rounded-md animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
