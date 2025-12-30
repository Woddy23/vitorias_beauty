import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactSection } from '../components/ContactSection';
import { SEO } from '../components/SEO';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <SEO 
        title="Contactos e Moradas em Lisboa – Vitorias Beauty"
        description="Moradas, horários e contactos dos 3 salões em Lisboa. Marcação via Zappy ou na app Vitorias Beauty."
        url="https://vitoriasbeauty.pt/#/contacto"
      />
      <Header />
      <main className="pt-32 md:pt-40">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

