import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-gray-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-pink-500/30">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1635080472002-ca760a070e37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwYmVhdXR5fGVufDF8fHx8MTc2MDkwODYzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Vitoria's Beauty"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-gray-700 border border-pink-500/30 rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                  Desde 2014
                </div>
                <div className="text-gray-400 text-sm">Excelência</div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-block mb-6 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-500/30 rounded-full px-6 py-2">
              <span className="text-white">
                Sobre Nós
              </span>
            </div>

            <h2 className="mb-6 text-white">
              Excelência em Beleza
            </h2>

            <p className="text-gray-300 mb-6">
              O Vitoria's Beauty é mais do que um salão de beleza - é um refúgio onde a elegância 
              encontra a inovação. Com anos de experiência no setor, oferecemos serviços de cabeleireiro 
              e estética que transformam e realçam a sua beleza natural.
            </p>

            <p className="text-gray-400 mb-8">
              Nossa missão é proporcionar uma experiência única, combinando técnicas avançadas, 
              produtos de alta qualidade e um atendimento caloroso.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <a 
                href="#/equipa" 
                className="bg-gray-700/50 backdrop-blur rounded-xl p-4 border border-pink-500/20 hover:border-pink-500/50 hover:bg-gray-700/70 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-white">✓</span>
                </div>
                <div className="text-white mb-2">Profissionais Certificados</div>
                <div className="text-pink-300 group-hover:text-pink-200 transition-all">
                  Veja a nossa equipa →
                </div>
              </a>
              <div className="bg-gray-700/50 backdrop-blur rounded-xl p-4 border border-cyan-500/20">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-3">
                  <span className="text-white">✓</span>
                </div>
                <div className="text-white mb-1">Produtos Premium</div>
                <div className="text-gray-400 text-sm">Marcas de referência</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
