import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { BookingCtas } from '../components/BookingCtas';
import { LocationJsonLd } from '../components/LocationJsonLd';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function SaldanhaPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <SEO 
        title="Salão Saldanha – Vitorias Beauty"
        description="Morada, horários e contactos do Salão Saldanha (Lisboa). Marque via Zappy ou na app Vitorias Beauty."
        url="https://vitoriasbeauty.pt/#/saldanha"
      />
      <LocationJsonLd
        name="Saldanha"
        urlPath="/#/saldanha"
        telephone="+351-210-987-604"
        streetAddress="Av. Defensores Chaves nº 3A"
        postalCode="1000-109"
        addressLocality="Lisboa"
      />
      <Header />
      <main className="pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
              Vitorias Beauty — Saldanha
            </h1>
            <p className="text-gray-300 text-lg text-center mb-12">
              Salão de beleza em Saldanha, Lisboa. Serviços de cabeleireiro, estética, maquilhagem e manicure.
            </p>

            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 mb-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-pink-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Morada</h3>
                    <p className="text-gray-300">Av. Defensores Chaves nº 3A</p>
                    <p className="text-gray-300">1000-109 Lisboa</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-pink-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Horário</h3>
                    <p className="text-gray-300">Todos os dias: 08:00–20:00</p>
                    <p className="text-pink-400 text-sm mt-2">Em Agosto, encerrado aos Domingos.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-pink-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Telefone</h3>
                    <p className="text-gray-300">210 987 604</p>
                    <p className="text-gray-300">910 063 828</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-pink-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">E-mail</h3>
                    <p className="text-gray-300">vitoriasbeautysaldanha@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700/50">
                <BookingCtas variant="compact" />
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/contacto"
                className="text-pink-400 hover:text-pink-300 transition-colors inline-flex items-center gap-2"
              >
                ← Ver todos os contactos
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

