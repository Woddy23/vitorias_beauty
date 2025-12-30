import React from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { AboutSection } from '../components/AboutSection';
import { GallerySection } from '../components/GallerySection';
import { ContactSection } from '../components/ContactSection';
import { AppDownloadSection } from '../components/AppDownloadSection';
import { Footer } from '../components/Footer';
import { PromotionPopup } from '../components/PromotionPopup';
import { SocialMediaPopup } from '../components/SocialMediaPopup';
import { SEO } from '../components/SEO';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Vitorias Beauty - Salão de Beleza em Lisboa | Cabeleireiro e Estética"
        description="Salão de beleza em Lisboa desde 2014. Serviços de cabeleireiro, estética, maquilhagem e manicure. Três localizações: Parque das Nações, Portela LRS e Saldanha. Marque já a sua consulta!"
        keywords="salão de beleza Lisboa, cabeleireiro Lisboa, estética Lisboa, maquilhagem Lisboa, manicure Lisboa, Vitorias Beauty"
        url="https://vitoriasbeauty.pt/"
      />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <GallerySection />
        <AppDownloadSection />
        <ContactSection />
      </main>
      <Footer />
      <PromotionPopup />
      <SocialMediaPopup />
    </div>
  );
}