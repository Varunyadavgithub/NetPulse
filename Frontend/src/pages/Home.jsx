import HeroSection from "../components/Home/HeroSection";
import DashboardPreview from "../components/Home/DashboardPreview";
import ProblemSection from "../components/Home/ProblemSection";
import FeaturesSection from "../components/Home/FeaturesSection";
import Testimonials from "../components/Home/Testimonials";
import Pricing from "../components/Home/Pricing";
import CTASection from "../components/Home/CTASection";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <HeroSection />
      <DashboardPreview />
      <ProblemSection />
      <FeaturesSection />
      <Testimonials />
      <Pricing />
      <CTASection />
    </div>
  );
};

export default Home;
