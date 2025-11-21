import HeroSection from '../components/landing/HeroSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import HowItWorks from '../components/landing/HowItWorks';
import DemoSection from '../components/landing/DemoSection';
import LandingFooter from '../components/landing/LandingFooter';
import LandingNavbar from '../components/landing/LandingNavbar';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <LandingNavbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Demo Section */}
      <DemoSection />

      {/* Footer */}
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
