import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Sparkles, Scissors, Users, Check, Droplets, Palette, Waves, Sparkle } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';
import { SEO } from '../components/SEO';

export function CabeloPage() {
  const [activeCategory, setActiveCategory] = useState('alisamento');

  const categories = [
    { id: 'alisamento', name: 'Alisamento' },
    { id: 'brushing', name: 'Brushing/Corte e Penteados' },
    { id: 'madeixas', name: 'Madeixas e Coloração' },
    { id: 'tratamento', name: 'Tratamento Capilar' },
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

  const brushingCorte = [
    { name: 'Matização/Neutralização de Cor (até 40grs)', price: '16,50 €' },
    { name: 'Limpeza de Tom', price: '55,50 €' },
    { name: 'Corte de Franja', price: '4,50 €' },
    { name: 'Penteado (inclui apliques)', price: 'de 10,00 € a 30,00 € (sob orçamento)' },
  ];

  const madeixas = [
    { name: 'Madeixas3 (até 60grs produto)', price: '43,00 €' },
    { name: 'Madeixas Bi/Tricolor3 (até 60grs produto)', price: '52,80 €' },
    { name: 'Matização / Neutralização de Coloração2 (até 40grs produto)', price: '16,50 €' },
    { name: 'Limpeza de Tom (até 80grs)', price: '55,00 €' },
    { name: 'Descoloração Global', price: '43,00 €' },
  ];

  const coloracao = [
    { name: 'Coloração Crescimento2 (até 4cms cabelo)', price: '23,90 €' },
    { name: 'Coloração Completa2 (até 120grs produto)', price: '30,90 €' },
    { name: 'Coloração INOA Crescimento2 (até 4 cms cabelo – 60gr produto)', price: '33,50 €' },
    { name: 'Coloração INOA Completa2 (até 120grs produto)', price: '47,80 €' },
    { name: 'Coloração Semi-Permanente DIARICHESSE2 (até 50grs produto)', price: '33,50 €' },
  ];

  const suplementos = [
    { name: 'Brushing – cabelos crespos, densos, encaracolados ou com extensões', price: '4,00 €' },
  ];

  const alisamento = [
    { name: 'Ondulação/Permanente4 (até 75ml)', price: '42,00 €' },
    { name: 'Disciplinar Cabelo (c/Pigments) <70grs(0,80€/gr)', price: 'desde 35,00 € (sob orçamento)' },
    { name: 'Disciplinar Cabelo (c/Pigments) >70grs(0,70€/gr)', price: 'desde 35,00 € (sob orçamento)' },
    { name: 'Alisamento Progressivo (c/Pigments) <70grs (1,50€/gr)', price: 'desde 60,00 € (sob orçamento)', highlight: true },
    { name: 'Alisamento Progressivo (c/Pigments) >70grs (1,35€/gr)', price: 'desde 60,00 € (sob orçamento)', highlight: true },
  ];

  const tratamentoCapilar = [
    { name: 'Tratamento de Ação Profunda (qualquer tipo tratamento)', price: '22,00 €' },
    { name: 'Detox Capilar (cabelo e couro cabeludo)', price: '15,00 €' },
    { name: 'Tratamento Metal Detox', price: '16,00 €' },
    { name: 'Tratamento Molecular Loreal', price: '18,00 €' },
    { name: 'Tratamento Ação Instantânea', price: '12,00 €' },
    { name: 'Alisamento Progressivo (inclui pigments)', price: 'desde 60,00 € (sob orçamento)', highlight: true },
    { name: 'Tratamento Lamination (inclui Brushing)', price: 'desde 44,00 € (sob orçamento)', highlight: true },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <SEO 
        title="Serviços de Cabelo - Vitorias Beauty | Cortes, Coloração, Alisamento"
        description="Serviços profissionais de cabeleireiro em Lisboa. Cortes, coloração, alisamento, madeixas, penteados e tratamentos capilares. Produtos L'Oréal, Andreia e Alfaparf."
        keywords="cabeleireiro Lisboa, corte cabelo Lisboa, coloração cabelo Lisboa, alisamento Lisboa, madeixas Lisboa, penteados Lisboa, tratamento capilar Lisboa"
        url="https://vitoriasbeauty.pt/#/servicos/cabelo"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-900">
        <div className="relative h-[450px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1647462741268-e5724e5886c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjB0b29scyUyMHNjaXNzb3JzfGVufDF8fHx8MTc2MTM0ODk2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Hair Salon Tools"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/70"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 pt-20">
            <div className="inline-block mb-6 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 border border-pink-500/30 rounded-full px-6 py-2">
              <span className="text-white">Serviços de Cabelo</span>
            </div>

            <h1 className="mb-6 bg-gradient-to-r from-pink-400 to-pink-300 bg-clip-text text-transparent text-center">
              Transforme o Seu Visual
            </h1>
            
            <p className="text-gray-300 max-w-xl mx-auto text-center">
              Serviços profissionais de cabeleireiro com produtos de alta qualidade
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
          
          {/* Alisamento */}
          <div id="alisamento" className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <div className="mb-8">
                  <h2 className="text-white mb-2 text-center">Alisamento</h2>
                  <div className="w-full h-px bg-gray-600/50 mt-4"></div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {alisamento.map((service, index) => (
                    <div 
                      key={index}
                      className={`flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-6 py-4 px-5 rounded-lg border transition-all duration-300 group ${
                        service.highlight
                          ? 'bg-pink-500/10 border-pink-500/50 hover:bg-pink-500/20'
                          : 'bg-gray-700/30 border-gray-600/30 hover:border-pink-500/50 hover:bg-gray-700/50'
                      }`}
                    >
                      <span className="text-gray-100 group-hover:text-white transition-colors flex-1 break-words">{service.name}</span>
                      <span className="text-pink-400 whitespace-nowrap sm:ml-6">{service.price}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-600/50 flex items-start gap-3">
                  <Check className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">
                    Serviços de alisamento com produtos profissionais
                  </p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-[250px] md:h-[450px]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759142235060-3191ee596c81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwY3V0dGluZyUyMHN0eWxpbmclMjBzYWxvbnxlbnwxfHx8fDE3NjE0MTQzMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Hair Cutting and Styling"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
          </div>

          {/* Brushing/Corte e Penteados */}
          <div id="brushing" className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <div className="mb-8">
                  <h2 className="text-white mb-2 text-center">Brushing, Corte e Penteados</h2>
                  <div className="w-full h-px bg-gray-600/50 mt-4"></div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {brushingCorte.map((service, index) => (
                    <div 
                      key={index}
                      className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-6 py-4 px-5 rounded-lg bg-gray-700/30 border border-gray-600/30 hover:border-pink-500/50 hover:bg-gray-700/50 transition-all duration-300 group"
                    >
                      <span className="text-gray-100 group-hover:text-white transition-colors flex-1 break-words">{service.name}</span>
                      <span className="text-pink-400 whitespace-nowrap sm:ml-6">{service.price}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-600/50 flex items-start gap-3">
                  <Check className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">
                    Todos os serviços incluem: Creme, Shampoo Neutro e Laca
                  </p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759142235060-3191ee596c81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwY3V0dGluZyUyMHN0eWxpbmclMjBzYWxvbnxlbnwxfHx8fDE3NjE0MTQzMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Hair Cutting and Styling"
                  className="w-full h-[250px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
          </div>

          {/* Madeixas e Coloração */}
          <div id="madeixas" className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-[250px] md:h-[450px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1527829619216-f3de4bcb9533?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwaGlnaGxpZ2h0cyUyMGJsb25kZXxlbnwxfHx8fDE3NjE0MTQzMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Hair Highlights"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="mb-8">
                <h2 className="text-white mb-2 text-center">Madeixas e Coloração</h2>
                <div className="w-full h-px bg-gray-600/50 mt-4"></div>
              </div>
              
              {/* Madeixas Section */}
              <div className="mb-8">
                <h3 className="text-gray-200 mb-4">Madeixas</h3>
                <div className="space-y-3">
                  {madeixas.map((service, index) => (
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

              {/* Coloração Section */}
              <div className="pt-6 border-t border-gray-600/50 mb-8">
                <h3 className="text-gray-200 mb-4">Coloração</h3>
                <div className="space-y-3">
                  {coloracao.map((service, index) => (
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

              {/* Suplementos */}
              <div className="pt-6 border-t border-gray-600/50 mb-8">
                <p className="text-gray-300 mb-4">Suplementos:</p>
                {suplementos.map((service, index) => (
                  <div 
                    key={index}
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-6 py-4 px-5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all duration-300"
                  >
                    <span className="text-gray-200 text-sm flex-1 break-words">{service.name}</span>
                    <span className="text-cyan-400 whitespace-nowrap sm:ml-6">{service.price}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-600/50 flex items-start gap-3">
                <Check className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Todos os serviços incluem: Creme e Shampoo Neutro e Laca
                </p>
              </div>
            </div>
          </div>

          {/* Tratamento Capilar */}
          <div id="tratamento" className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <div className="mb-8">
                  <h2 className="text-white mb-2 text-center">Tratamento Capilar</h2>
                  <div className="w-full h-px bg-gray-600/50 mt-4"></div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {tratamentoCapilar.map((service, index) => (
                    <div 
                      key={index}
                      className={`flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-6 py-4 px-5 rounded-lg transition-all duration-300 ${
                        service.highlight 
                          ? 'bg-pink-500/20 border-2 border-pink-500/50 hover:bg-pink-500/30' 
                          : 'bg-gray-700/30 border border-gray-600/30 hover:border-pink-500/50 hover:bg-gray-700/50'
                      } group`}
                    >
                      <span className={`transition-colors flex-1 break-words ${
                        service.highlight ? 'text-pink-200 group-hover:text-pink-100' : 'text-gray-100 group-hover:text-white'
                      }`}>
                        {service.name}
                      </span>
                      <span className={`whitespace-nowrap sm:ml-6 ${
                        service.highlight ? 'text-pink-300' : 'text-pink-400'
                      }`}>
                        {service.price}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-600/50 flex items-start gap-3">
                  <Check className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">
                    Todos os serviços incluem: Creme, Shampoo Neutro e Laca
                  </p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-[250px] md:h-[450px]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1760038548850-bfc356d88b12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwY2FyZSUyMHRyZWF0bWVudCUyMHNhbG9ufGVufDF8fHx8MTc2MTQxNDUzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Hair Treatment"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-12">
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-10 border border-gray-700/50 max-w-2xl mx-auto">
              <h3 className="text-white mb-4">Pronto para transformar o seu visual?</h3>
              <p className="text-gray-300 mb-8">
                Agende o seu próximo serviço de cabelo e transforme o seu look.
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
