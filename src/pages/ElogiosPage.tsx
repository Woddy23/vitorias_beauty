import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { SEO } from '../components/SEO';

export function ElogiosPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <SEO 
        title="Opiniões de Clientes – Vitorias Beauty"
        description="Opiniões e testemunhos de clientes sobre a experiência nos nossos salões em Lisboa. Marque via Zappy ou na app."
        url="https://vitoriasbeauty.pt/#/elogios"
      />
      <Header />
      <main className="pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Opiniões de clientes
            </h1>
            <p className="text-gray-300 text-lg">
              A satisfação das nossas clientes é a nossa maior recompensa.
            </p>
          </div>
        </section>
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}

