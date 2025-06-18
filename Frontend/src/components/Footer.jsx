import {
  Activity,
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Helper function to get links for each section
  const getLinks = (section) => {
    const links = {
      Product: [
        { label: "Features", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Demo", href: "#" },
        { label: "API", href: "#" },
      ],
      Support: [
        { label: "Documentation", href: "#" },
        { label: "Help Center", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Status", href: "#" },
      ],
      Company: [
        { label: "About", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Privacy", href: "#" },
      ],
    };
    return links[section] || [];
  };
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="relative group">
                <Activity className="h-8 w-8 text-blue-500 group-hover:text-blue-400 transition-colors" />
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full animate-ping-slow"></div>
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  NetPulse
                </h1>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Smart network monitoring made simple. Stop running ping in
              terminals, start using NetPulse for intelligent network
              management.
            </p>

            <div className="flex space-x-5">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <Github className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-xs text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  GitHub
                </span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-xs text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  LinkedIn
                </span>
              </a>
              <a href="mailto:contact@netpulse.com" className="group relative">
                <Mail className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-xs text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Email
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links Sections */}
          {["Product", "Support", "Company"].map((section, index) => (
            <div key={section} className="space-y-4">
              <h3 className="font-semibold text-white relative inline-block">
                {section}
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
              </h3>
              <ul className="space-y-3">
                {getLinks(section).map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors flex items-center group"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} NetPulse. All rights reserved. Built by{" "}
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Varun Yadav
            </a>
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
