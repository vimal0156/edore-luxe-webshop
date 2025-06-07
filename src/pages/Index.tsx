
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SocialProofPopup from '@/components/SocialProofPopup';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <SocialProofPopup />
    </div>
  );
};

export default Index;
