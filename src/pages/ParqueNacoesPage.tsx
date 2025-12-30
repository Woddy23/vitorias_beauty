import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { BookingCtas } from '../components/BookingCtas';
import { LocationJsonLd } from '../components/LocationJsonLd';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ParqueNacoesPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <SEO 
        title="Salão Parque das Nações – Vitorias Beauty"
        description="Morada, horários e contactos do Salão Parque das Nações. Marque via Zappy ou na app Vitorias Beauty."
        url="https://vitoriasbeauty.pt/#/parque-nacoes"
      />
      <LocationJsonLd
        name="Parque das Nações"
        urlPath="/#/parque-nacoes"
        telephone="+351-218-958-421"
        streetAddress="Rua Ilha dos Amores nº 55A"
        postalCode="1990-371"
        addressLocality="Parque das Nações"
      />
      <Header />
      <main className="pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
              Vitorias Beauty — Parque das Nações
            </h1>
            <p className="text-gray-300 text-lg text-center mb-12">
              Salão de beleza no coração de Parque das Nações. Serviços de cabeleireiro, estética, maquilhagem e manicure.
            </p>

            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 mb-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-pink-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Morada</h3>
                    <p className="text-gray-300">Rua Ilha dos Amores nº 55A</p>
                    <p className="text-gray-300">1990-371 Parque das Nações</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-pink-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Horário</h3>
                    <p className="text-gray-300">Todos os dias: 08:00–20:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-pink-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Telefone</h3>
                    <p className="text-gray-300">218 958 421</p>
                    <p className="text-gray-300">936 857 289</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-pink-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">E-mail</h3>
                    <p className="text-gray-300">vitoriasbeautyparquenacoes@gmail.com</p>
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

