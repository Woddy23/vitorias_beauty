import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CountUpAnimation } from '../components/CountUpAnimation';
import { InfiniteCarousel } from '../components/InfiniteCarousel';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Sparkles, Heart, Clock, Shield, DollarSign, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import lorealLogo from 'figma:asset/2d6ff77f206a6de9836f1aba65ba125eb9bb23ff.png';
import andreiaLogo from 'figma:asset/fcce27b5c1a48a193db67066837c2ab374a72a60.png';
import alfarparfLogo from 'figma:asset/1d49874d95f3f87f997ef822341569c437cf0806.png';

export function AboutPage() {

  const valores = [
    {
      icon: Users,
      title: 'O Cliente',
      description: 'O CLIENTE é o nosso foco. Ambicionamos proporcionar melhorias de beleza e sensações de bem-estar e prazer aos nossos clientes.',
      color: 'pink'
    },
    {
      icon: Sparkles,
      title: 'A Qualidade',
      description: 'QUALIDADE em todo o envolvimento com o cliente.',
      color: 'cyan'
    },
    {
      icon: Clock,
      title: 'A Rapidez',
      description: 'RAPIDEZ no atendimento para que o cliente não perca o seu importante tempo.',
      color: 'pink'
    },
    {
      icon: Shield,
      title: 'A Higiene',
      description: 'HIGIENE é uma das nossas principais preocupações dando preferência por material descartável, esterilização das ferramentas, lavagem de toalhas e higienização diária dos espaços.',
      color: 'cyan'
    }
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
              src="https://images.unsplash.com/photo-1757940113920-69e3686438d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcGElMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjEzNjU3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Vitoria's Beauty"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/75"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 pt-20">
            <div className="inline-block mb-6 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 border border-pink-500/30 rounded-full px-6 py-2">
              <span className="text-white">
                Sobre Nós
              </span>
            </div>
            
            <h1 className="mb-6 text-white text-center">
              Excelência em Beleza
            </h1>
            
            <p className="text-gray-300 max-w-2xl mx-auto text-center">
              Dedicados a proporcionar experiências de beleza e bem-estar excecionais
            </p>
          </div>
        </div>
      </section>

      {/* O QUE NOS TORNA DIFERENTE */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">O Que Nos Torna Diferente</h2>
            <div className="w-32 h-1 bg-pink-500 mx-auto"></div>
          </div>

          <div className="space-y-6">
            {valores.map((valor, index) => {
              const Icon = valor.icon;
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={index}
                  className={`flex items-start gap-6 p-8 bg-gray-800/40 backdrop-blur-sm rounded-2xl border ${isEven ? 'border-pink-500/30' : 'border-cyan-500/30'} hover:bg-gray-800/60 transition-all duration-300`}
                >
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${isEven ? 'bg-pink-500/20' : 'bg-cyan-500/20'} flex items-center justify-center`}>
                    <Icon className={`w-7 h-7 ${isEven ? 'text-pink-400' : 'text-cyan-400'}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white mb-3">{valor.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{valor.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUALIDADE COMPROVADA */}
      <section className="py-20 px-4 bg-gray-800/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 border border-pink-500/30 rounded-full px-6 py-2">
              <span className="text-white">Confiança</span>
            </div>
            <h2 className="text-white mb-4">Qualidade Comprovada</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A confiança de milhares de clientes é a nossa maior recompensa
            </p>
          </div>

          {/* Stats Card with Hero Number */}
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-800/60 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50 mb-12 shadow-2xl relative overflow-hidden">
            {/* Decorative gradient overlay */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-500/10 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-2xl"></div>

            <div className="relative z-10">
              {/* Main stat */}
              <div className="text-center mb-12">
                <div className="inline-block relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 blur-2xl"></div>
                  <div className="relative flex items-baseline justify-center gap-3 mb-4">
                    <span className="text-pink-400 text-4xl">+</span>
                    <CountUpAnimation 
                      end={2100} 
                      duration={2000}
                      className="text-pink-400 text-5xl"
                    />
                  </div>
                  <div className="relative">
                    <p className="text-white mb-2">Avaliações Positivas</p>
                    <p className="text-gray-400 text-sm">Uma garantia de excelência e qualidade</p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="relative mb-12">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700/50"></div>
                </div>
                <div className="relative flex justify-center">
                  <div className="bg-gray-800 px-4">
                    <Heart className="w-6 h-6 text-pink-400" />
                  </div>
                </div>
              </div>

              {/* Info Cards Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="text-white mb-2">Preço Justo</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Política de preços transparente num mercado onde muitos obtêm lucros excessivos. 
                        Qualidade superior sem comprometer o seu orçamento.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-white mb-2">Produtos Premium</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Elevado consumo graças aos nossos milhares de clientes regulares permite-nos 
                        acesso aos melhores preços em produtos de alta qualidade.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom highlight */}
              <div className="text-center pt-6 border-t border-gray-700/50">
                <p className="text-gray-300 text-sm">
                  Qualidade premium com preços justos - esta é a nossa promessa a cada cliente
                </p>
              </div>
            </div>
          </div>

          {/* Supporting info */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-800/40 rounded-2xl border border-gray-700/30">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-pink-500/20 mb-4">
                <Shield className="w-7 h-7 text-pink-400" />
              </div>
              <h4 className="text-white mb-2">Confiança</h4>
              <p className="text-gray-400 text-sm">Milhares de clientes satisfeitos</p>
            </div>

            <div className="text-center p-6 bg-gray-800/40 rounded-2xl border border-gray-700/30">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-cyan-500/20 mb-4">
                <Sparkles className="w-7 h-7 text-cyan-400" />
              </div>
              <h4 className="text-white mb-2">Excelência</h4>
              <p className="text-gray-400 text-sm">Produtos e serviços premium</p>
            </div>

            <div className="text-center p-6 bg-gray-800/40 rounded-2xl border border-gray-700/30">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-pink-500/20 mb-4">
                <Heart className="w-7 h-7 text-pink-400" />
              </div>
              <h4 className="text-white mb-2">Compromisso</h4>
              <p className="text-gray-400 text-sm">Sempre focados em si</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROFISSIONAIS QUALIFICADOS */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758519289791-ffce8889ca8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjB0ZWFtJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MTQxNTY5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional Team"
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
            </div>

            <div>
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-10 border border-gray-700/50">
                <h2 className="text-white mb-6">Profissionais Qualificados</h2>
                <div className="w-24 h-1 bg-cyan-400 mb-8"></div>
                
                <p className="text-gray-300 leading-relaxed mb-8">
                  Apostamos na FORMAÇÃO CONTÍNUA dos nossos colaboradores, 
                  porque só um profissional formado pode estar atualizado com as novas inovações e tendências.
                </p>

                <div className="pt-6 border-t border-gray-700/50">
                  <Link 
                    to="/equipa"
                    onClick={() => window.scrollTo(0, 0)}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
                  >
                    <span>Veja a nossa equipa</span>
                    <svg 
                      className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OS NOSSOS PARCEIROS */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Os Nossos Parceiros</h2>
            <div className="w-32 h-1 bg-pink-500 mx-auto mb-8"></div>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/50">
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto text-center mb-8">
              Utilizamos apenas produtos de alta qualidade, porque acreditamos que um trabalho perfeito, 
              duradouro e seguro só é possível com o apoio das melhores marcas do mercado.
            </p>

            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto text-center mb-16">
              Trabalhamos com L'Oréal Professionnel, Andreia e Alfaparf Milano, 
              que nos garantem resultados de excelência, aliados à inovação e confiança que o teu cabelo merece.
            </p>

            <InfiniteCarousel speed={30}>
              <div className="flex items-center justify-center min-w-[280px] h-24 px-12">
                <img 
                  src={lorealLogo}
                  alt="L'Oréal Professionnel"
                  className="h-20 w-auto object-contain opacity-90"
                  style={{ mixBlendMode: 'multiply', filter: 'brightness(0) invert(1)' }}
                />
              </div>
              <div className="flex items-center justify-center min-w-[280px] h-24 px-12">
                <img 
                  src={andreiaLogo}
                  alt="Andreia Professional"
                  className="h-20 w-auto object-contain opacity-90"
                  style={{ mixBlendMode: 'multiply', filter: 'brightness(0) invert(1)' }}
                />
              </div>
              <div className="flex items-center justify-center min-w-[280px] h-24 px-12">
                <img 
                  src={alfarparfLogo}
                  alt="Alfaparf Milano"
                  className="h-20 w-auto object-contain opacity-90"
                  style={{ mixBlendMode: 'multiply', filter: 'brightness(0) invert(1)' }}
                />
              </div>
            </InfiniteCarousel>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/50">
            <h3 className="text-white mb-4">Pronta para uma experiência única?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Descubra por que mais de 2.100 clientes confiam no Vitoria's Beauty para os seus cuidados de beleza.
            </p>
            <a 
              href="https://you.zappysoftware.com/vitoriasbeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pink-500 text-white px-12 py-4 rounded-full hover:bg-pink-600 transition-all hover:scale-105 shadow-lg"
            >
              Agende Agora
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
