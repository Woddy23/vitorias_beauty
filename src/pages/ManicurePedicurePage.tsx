import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Check } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';
import { SEO } from '../components/SEO';

export function ManicurePedicurePage() {
  const [activeCategory, setActiveCategory] = useState('unhas');

  const categories = [
    { id: 'unhas', name: 'Unhas' },
    { id: 'verniz-gel', name: 'Verniz Gel' },
    { id: 'unhas-gel-acrilico', name: 'Unhas Gel e Unhas Acrílico' },
    { id: 'laser-micose', name: 'Laser Micose' },
  ];

  const scrollToSection = (id: string) => {
    setActiveCategory(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const unhas = [
    { name: 'Manicure', price: '22,00 €' },
    { name: 'Pedicure', price: '15,00 €' },
    { name: 'Pedicure + calosidades simples', price: '16,00 €' },
    { name: 'Pedicure + calos e calosidades profundas', price: '12,00 €' },
    { name: 'Tratamento Parafina', price: '12,00 €' },
  ];

  const vernizGel = [
    { name: 'Aplicação Verniz Gel', price: '6,30 €' },
    { name: 'Aplicação + Remoção Verniz Gel', price: '9,00 €' },
    { name: 'Remoção de Verniz Gel (sem aplicação)', price: '4,00 €' },
    { name: 'Manicure (para aplicação Verniz Gel)', price: '8,00 €' },
  ];

  const unhasGelAcrilico = [
    { name: 'Manutenção Gel', price: '22,00 €' },
    { name: 'Brilho Gel', price: '14,00 €' },
    { name: 'Extensões com Tips (para todas as unhas)', price: '5,00 €' },
    { name: 'Manicure (para aplicação de Gel)', price: '4,50 €' },
    { name: 'Aplicação Gel nos Pés', price: '15,50 €' },
    { name: 'Manutenção Acrílico', price: '23,00 €' },
  ];

  const laserMicoses = [
    { name: 'Sessão Laser Micoses', price: '9,40 €' },
    { name: '4 Sessões Laser Micoses', price: '12,90 €' },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <SEO 
        title="Manicure e Pedicure - Vitorias Beauty | Unhas Gel e Nail Art Lisboa"
        description="Serviços completos de manicure e pedicure em Lisboa. Unhas gel, unhas acrílico, verniz gel, nail art e tratamento de micose com laser. Cuidados profissionais para mãos e pés."
        keywords="manicure Lisboa, pedicure Lisboa, unhas gel Lisboa, nail art Lisboa, unhas acrílico Lisboa, verniz gel Lisboa"
        url="https://vitoriasbeauty.pt/#/servicos/manicure-pedicure"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-900">
        <div className="relative h-[450px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1663229050017-503dbebdd573?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwcG9saXNoJTIwdG9vbHN8ZW58MXx8fHwxNzYxNDE0ODMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Nail Polish Tools"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/70"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 pt-20">
            <div className="inline-block mb-6 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 border border-pink-500/30 rounded-full px-6 py-2">
              <span className="text-white">Serviços de Manicure e Pedicure</span>
            </div>

            <h1 className="mb-6 bg-gradient-to-r from-pink-400 to-pink-300 bg-clip-text text-transparent text-center">
              Cuidado Profissional
            </h1>
            
            <p className="text-gray-300 max-w-xl mx-auto text-center">
              Cuide das suas mãos e pés com os nossos serviços especializados
            </p>
          </div>
        </div>
      </section>

      {/* Category Pills Navigation */}
      <section className="bg-gray-900 border-b border-gray-800 py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToSection(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/50'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <section className="pt-12 pb-24 px-4">
        <div className="container mx-auto max-w-7xl space-y-24">
          
          {/* Unhas */}
          <div id="unhas" className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <div className="mb-8">
                  <h2 className="text-white mb-2 text-center">Unhas</h2>
                  <div className="w-full h-px bg-gray-600/50 mt-4"></div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {unhas.map((service, index) => (
                    <div 
                      key={index}
                      className="flex justify-between items-start py-4 px-5 rounded-lg bg-gray-700/30 border border-gray-600/30 hover:border-pink-500/50 hover:bg-gray-700/50 transition-all duration-300 group"
                    >
                      <span className="text-gray-100 group-hover:text-white transition-colors flex-1">{service.name}</span>
                      <span className="text-pink-400 whitespace-nowrap ml-6">{service.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-[250px] md:h-[450px]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1737214475537-2ccc466876ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5pY3VyZSUyMG5haWwlMjBjYXJlfGVufDF8fHx8MTc2MTQxNDgzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Manicure Nail Care"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
          </div>

          {/* Verniz Gel */}
          <div id="verniz-gel" className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-[250px] md:h-[450px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1699997760248-71ac169e640e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZWwlMjBuYWlscyUyMGFwcGxpY2F0aW9ufGVufDF8fHx8MTc2MTQxNDgzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Gel Nails Application"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="mb-8">
                <h2 className="text-white mb-2 text-center">Verniz Gel</h2>
                <div className="w-full h-px bg-gray-600/50 mt-4"></div>
              </div>
              
              <div className="space-y-3 mb-8">
                {vernizGel.map((service, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-start py-4 px-5 rounded-lg bg-gray-700/30 border border-gray-600/30 hover:border-cyan-400/50 hover:bg-gray-700/50 transition-all duration-300 group"
                  >
                    <span className="text-gray-100 group-hover:text-white transition-colors flex-1">{service.name}</span>
                    <span className="text-cyan-400 whitespace-nowrap ml-6">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Unhas Gel e Unhas Acrílico */}
          <div id="unhas-gel-acrilico" className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <div className="mb-8">
                  <h2 className="text-white mb-2 text-center">Unhas Gel e Unhas Acrílico</h2>
                  <div className="w-full h-px bg-gray-600/50 mt-4"></div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {unhasGelAcrilico.map((service, index) => (
                    <div 
                      key={index}
                      className="flex justify-between items-start py-4 px-5 rounded-lg bg-gray-700/30 border border-gray-600/30 hover:border-pink-500/50 hover:bg-gray-700/50 transition-all duration-300 group"
                    >
                      <span className="text-gray-100 group-hover:text-white transition-colors flex-1">{service.name}</span>
                      <span className="text-pink-400 whitespace-nowrap ml-6">{service.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-[250px] md:h-[450px]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759430376892-40c6a83bdfc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3J5bGljJTIwbmFpbHMlMjBzYWxvbnxlbnwxfHx8fDE3NjE0MTQ4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Acrylic Nails Salon"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
          </div>

          {/* Laser Micoses */}
          <div id="laser-micose" className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-[250px] md:h-[450px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1629459347138-b34fcc7603cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNlciUyMHRyZWF0bWVudCUyMGZlZXR8ZW58MXx8fHwxNzYxNDE1MDA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Laser Treatment"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="mb-8">
                <h2 className="text-white mb-2 text-center">Laser Micoses</h2>
                <div className="w-full h-px bg-gray-600/50 mt-4"></div>
              </div>
              
              <div className="space-y-3 mb-8">
                {laserMicoses.map((service, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-start py-4 px-5 rounded-lg bg-gray-700/30 border border-gray-600/30 hover:border-cyan-400/50 hover:bg-gray-700/50 transition-all duration-300 group"
                  >
                    <span className="text-gray-100 group-hover:text-white transition-colors flex-1">{service.name}</span>
                    <span className="text-cyan-400 whitespace-nowrap ml-6">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-12">
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-10 border border-gray-700/50 max-w-2xl mx-auto">
              <h3 className="text-white mb-4">Pronta para cuidar das suas unhas?</h3>
              <p className="text-gray-300 mb-8">
                Agende o seu serviço de manicure ou pedicure e deixe as suas unhas perfeitas.
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
