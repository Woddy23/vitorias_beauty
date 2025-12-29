import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Palette, Check } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function MakeupPage() {

  const makeupServices = [
    { name: 'Maquilhagem by Make-up Artist', price: '40,00 €' },
    { name: 'Maquilhagem Noiva by Make-up Artist', price: '(sob orçamento)', highlight: true },
  ];

  const suplementos = [
    { name: 'Suplemento - Pestanas Postiças', price: '5,00 €' },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-900">
        <div className="relative h-[450px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1617837113948-2e0094a3da79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBhcnRpc3QlMjBicnVzaGVzfGVufDF8fHx8MTc2MTQxNDY0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Makeup Artist Tools"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/70"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 pt-20">
            <div className="inline-block mb-6 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 border border-pink-500/30 rounded-full px-6 py-2">
              <span className="text-white">Serviços de Make-up</span>
            </div>

            <h1 className="mb-6 bg-gradient-to-r from-pink-400 to-pink-300 bg-clip-text text-transparent text-center">
              Realce a Sua Beleza
            </h1>
            
            <p className="text-gray-300 max-w-xl mx-auto text-center">
              Maquilhagem profissional para todos os momentos especiais
            </p>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <section className="pt-12 pb-24 px-4">
        <div className="container mx-auto max-w-7xl space-y-24">
          
          {/* Maquilhagem Profissional */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <div className="mb-8">
                  <h2 className="text-white mb-2 text-center">Make-Up</h2>
                  <div className="w-full h-px bg-gray-600/50 mt-4"></div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {makeupServices.map((service, index) => (
                    <div 
                      key={index}
                      className={`flex justify-between items-start py-4 px-5 rounded-lg transition-all duration-300 ${
                        service.highlight 
                          ? 'bg-pink-500/20 border-2 border-pink-500/50 hover:bg-pink-500/30' 
                          : 'bg-gray-700/30 border border-gray-600/30 hover:border-pink-500/50 hover:bg-gray-700/50'
                      } group`}
                    >
                      <span className={`transition-colors flex-1 ${
                        service.highlight ? 'text-pink-200 group-hover:text-pink-100' : 'text-gray-100 group-hover:text-white'
                      }`}>
                        {service.name}
                      </span>
                      <span className={`whitespace-nowrap ml-6 ${
                        service.highlight ? 'text-pink-300' : 'text-pink-400'
                      }`}>
                        {service.price}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Suplementos */}
                <div className="pt-6 border-t border-gray-600/50 mb-8">
                  <p className="text-gray-300 mb-4">Suplementos:</p>
                  {suplementos.map((service, index) => (
                    <div 
                      key={index}
                      className="flex justify-between items-start py-4 px-5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all duration-300"
                    >
                      <span className="text-gray-200 text-sm flex-1">{service.name}</span>
                      <span className="text-cyan-400 whitespace-nowrap ml-6">{service.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-[250px] md:h-[450px]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758613655900-61957c2aca5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYWtldXAlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3NjE0MTQ2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional Makeup"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-12">
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-10 border border-gray-700/50 max-w-2xl mx-auto">
              <h3 className="text-white mb-4">Pronta para realçar a sua beleza?</h3>
              <p className="text-gray-300 mb-8">
                Agende o seu serviço de maquilhagem e brilhe em qualquer ocasião.
              </p>
              <a 
                href="https://you.zappysoftware.com/vitoriasbeauty"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-pink-500 text-white px-12 py-4 rounded-full hover:bg-pink-600 transition-all hover:scale-105"
              >
                Agende Agora
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
