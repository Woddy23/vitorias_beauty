import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { AboutSection } from '../components/AboutSection';
import { GallerySection } from '../components/GallerySection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { PromotionPopup } from '../components/PromotionPopup';
import { SocialMediaPopup } from '../components/SocialMediaPopup';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <PromotionPopup />
      <SocialMediaPopup />
    </div>
  );
}