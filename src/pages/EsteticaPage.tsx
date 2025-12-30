import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';
import { SEO } from '../components/SEO';

export function EsteticaPage() {
  const [activeCategory, setActiveCategory] = useState('depilacao-cera');

  const categories = [
    { id: 'depilacao-cera', name: 'Depilação com Cera' },
    { id: 'depilacao-linha', name: 'Depilação a Linha' },
    { id: 'tratamento-corpo', name: 'Tratamento Corpo' },
    { id: 'tratamento-rosto', name: 'Tratamento Rosto' },
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

  const depilacaoCera = [
    { name: 'Pacote Depilação Completa', price: '24,50 €' },
    { name: 'Pacote Depilação Parcial', price: '19,90 €' },
    { name: 'Perna Inteiras', price: '12,50 €' },
    { name: 'Meias Pernas', price: '8,80 €' },
    { name: 'Virilha Normal', price: '7,50 €' },
    { name: 'Virilha Integral', price: '1,50 €' },
    { name: 'Sobrancelhas', price: '4,80 €' },
    { name: 'Buço ou Queixo', price: '3,20 €' },
  ];

  const depilacaoLinha = [
    { name: 'Buço', price: '4,00 €' },
    { name: 'Sobrancelhas', price: '6,50 €' },
    { name: 'Buço + Sobrancelha', price: '9,00 €' },
    { name: 'Queixo', price: '4,00 €' },
    { name: 'Rosto (sobrancelhas não incluídas)', price: '10,50 €' },
  ];

  const tratamentoCorpo = [
    { name: 'Massagem Relaxamento localizada (30min)', price: '20,00 €' },
    { name: 'Massagem Relaxamento Completa (50min.)', price: '30,00 €' },
    { name: 'Envolvimento Corporal', price: '20,00 €' },
    { name: 'Cavitação', price: 'pacotes desde 16,67€ por sessão' },
    { name: 'Endermologia', price: 'pacotes desde 16,67€ por sessão' },
    { name: 'Radio Frequência', price: 'pacotes desde 16,67€ por sessão' },
    { name: 'Tratamento Super-Redutor', price: 'pacotes desde 16,67€ por sessão' },
    { name: 'Massagem Modelante Anti-Celulítica Localizada', price: 'pacotes desde 20,00€ por sessão' },
    { name: 'Massagem Modelante Anti-celulítica Completa', price: 'pacotes desde 26,00€ por sessão' },
    { name: 'Pressoterapia', price: 'pacotes desde 7,00€ por sessão' },
  ];

  const rostoTratamento = [
    { name: 'Limpeza de Pele', price: '28,00 €' },
    { name: 'Minifacial', price: '17,00 €' },
    { name: 'Microdermabrasão com cristais diamante', price: '20,00 €' },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <SEO 
        title="Estética - Vitorias Beauty | Depilação e Tratamentos Faciais Lisboa"
        description="Serviços de estética em Lisboa. Depilação com cera e linha, tratamentos faciais, limpeza de pele e tratamentos corporais. Profissionais qualificados."
        keywords="estética Lisboa, depilação Lisboa, depilação cera Lisboa, tratamento facial Lisboa, limpeza pele Lisboa, estética profissional Lisboa"
        url="https://vitoriasbeauty.pt/#/servicos/estetica"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-900">
        <div className="relative h-[450px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1731514771613-991a02407132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpYWwlMjBzcGElMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzYxNDE1MDM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Facial Spa Treatment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/70"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 pt-20">
            <div className="inline-block mb-6 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 border border-pink-500/30 rounded-full px-6 py-2">
              <span className="text-white">Serviços de Estética</span>
            </div>

            <h1 className="mb-6 bg-gradient-to-r from-pink-400 to-pink-300 bg-clip-text text-transparent text-center">
              Bem-Estar e Beleza
            </h1>
            
            <p className="text-gray-300 max-w-xl mx-auto text-center">
              Tratamentos profissionais de depilação para realçar a sua beleza natural
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
          
          {/* Depilação com Cera */}
          <div id="depilacao-cera" className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <div className="mb-8">
                  <h2 className="text-white mb-2 text-center">Depilação com Cera</h2>
                  <div className="w-full h-px bg-gray-600/50 mt-4"></div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {depilacaoCera.map((service, index) => (
                    <div 
                      key={index}
                      className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-6 py-4 px-5 rounded-lg bg-gray-700/30 border border-gray-600/30 hover:border-pink-500/50 hover:bg-gray-700/50 transition-all duration-300 group"
                    >
                      <span className="text-gray-100 group-hover:text-white transition-colors flex-1 break-words">{service.name}</span>
                      <span className="text-pink-400 whitespace-nowrap sm:ml-6">{service.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-[250px] md:h-[450px]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1601924925594-e5eae9bbcb22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXglMjBkZXBpbGF0aW9uJTIwc2Fsb258ZW58MXx8fHwxNzYxNDE1MDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Wax Depilation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
          </div>

          {/* Depilação com Linha */}
          <div id="depilacao-linha" className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-[250px] md:h-[450px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1570386061001-2b0892eb354b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWVicm93JTIwdGhyZWFkaW5nJTIwc2Fsb258ZW58MXx8fHwxNzYxNDE1MDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Eyebrow Threading"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="mb-8">
                <h2 className="text-white mb-2 text-center">Depilação com Linha</h2>
                <div className="w-full h-px bg-gray-600/50 mt-4"></div>
              </div>
              
              <div className="space-y-3 mb-8">
                {depilacaoLinha.map((service, index) => (
                  <div 
                    key={index}
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-6 py-4 px-5 rounded-lg bg-gray-700/30 border border-gray-600/30 hover:border-cyan-400/50 hover:bg-gray-700/50 transition-all duration-300 group"
                  >
                    <span className="text-gray-100 group-hover:text-white transition-colors flex-1 break-words">{service.name}</span>
                    <span className="text-cyan-400 whitespace-nowrap sm:ml-6">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tratamento Corpo */}
          <div id="tratamento-corpo" className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <div className="mb-8">
                  <h2 className="text-white mb-2 text-center">Tratamento Corpo</h2>
                  <div className="w-full h-px bg-gray-600/50 mt-4"></div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {tratamentoCorpo.map((service, index) => (
                    <div 
                      key={index}
                      className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-6 py-4 px-5 rounded-lg bg-gray-700/30 border border-gray-600/30 hover:border-pink-500/50 hover:bg-gray-700/50 transition-all duration-300 group"
                    >
                      <span className="text-gray-100 group-hover:text-white transition-colors flex-1 break-words">{service.name}</span>
                      <span className="text-pink-400 whitespace-nowrap sm:ml-6 text-sm">{service.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-[250px] md:h-[450px]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1745327883508-b6cd32e5dde5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBtYXNzYWdlJTIwdGhlcmFweXxlbnwxfHx8fDE3NjEzMTQ1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Spa Massage Therapy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
          </div>

          {/* Rosto Tratamento */}
          <div id="tratamento-rosto" className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-[250px] md:h-[450px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpYWwlMjBza2luY2FyZSUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NjEzMzgzODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Facial Skincare Treatment"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="mb-8">
                <h2 className="text-white mb-2 text-center">Rosto Tratamento</h2>
                <div className="w-full h-px bg-gray-600/50 mt-4"></div>
              </div>
              
              <div className="space-y-3 mb-8">
                {rostoTratamento.map((service, index) => (
                  <div 
                    key={index}
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-6 py-4 px-5 rounded-lg bg-gray-700/30 border border-gray-600/30 hover:border-cyan-400/50 hover:bg-gray-700/50 transition-all duration-300 group"
                  >
                    <span className="text-gray-100 group-hover:text-white transition-colors flex-1 break-words">{service.name}</span>
                    <span className="text-cyan-400 whitespace-nowrap sm:ml-6">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-12">
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-10 border border-gray-700/50 max-w-2xl mx-auto">
              <h3 className="text-white mb-4">Pronta para realçar a sua beleza?</h3>
              <p className="text-gray-300 mb-8">
                Agende o seu tratamento de estética e revele a sua melhor versão.
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
