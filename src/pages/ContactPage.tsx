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
      <main className="pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contactos e horários
            </h1>
            <p className="text-gray-300 text-lg">
              Estamos em três localizações em Lisboa. Entre em contacto e faça a sua marcação.
            </p>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

