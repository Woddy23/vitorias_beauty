import { Smartphone, Download } from 'lucide-react';
import { BOOKING_LINKS } from '../constants/bookingLinks';

export function AppDownloadSection() {
  return (
    <section className="py-24 bg-gray-800 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl -z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 border border-pink-500/30 rounded-full px-6 py-2">
              <span className="text-white">Aplicação Móvel</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Baixe a nossa App
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
              Agende os seus serviços de forma rápida e prática diretamente do seu telemóvel
            </p>
          </div>

          {/* Main Content - Grid Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Side - Content */}
            <div className="order-2 md:order-1">
              {/* App Name */}
              <div className="mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  Vitorias Beauty App
                </h3>
                <p className="text-gray-400 text-lg">
                  Tudo o que precisa na palma da sua mão
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 bg-gray-700/30 rounded-xl p-4 border border-gray-600/30">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="text-white font-medium mb-1">Agendamento rápido</div>
                  <div className="text-gray-400 text-sm">Marque em poucos toques</div>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-700/30 rounded-xl p-4 border border-gray-600/30">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="text-white font-medium mb-1">Lembretes automáticos</div>
                  <div className="text-gray-400 text-sm">Nunca perca um agendamento</div>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-700/30 rounded-xl p-4 border border-gray-600/30">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="text-white font-medium mb-1">Histórico completo</div>
                  <div className="text-gray-400 text-sm">Acompanhe seus tratamentos</div>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-700/30 rounded-xl p-4 border border-gray-600/30">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="text-white font-medium mb-1">Promoções exclusivas</div>
                  <div className="text-gray-400 text-sm">Acesso a ofertas especiais</div>
                </div>
              </div>
            </div>

              {/* Download Buttons - Side by Side */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={BOOKING_LINKS.ios}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 bg-gradient-to-r from-gray-900 to-black hover:from-gray-800 hover:to-gray-900 text-white rounded-xl px-8 py-5 transition-all duration-300 shadow-2xl hover:shadow-pink-500/20 hover:scale-110 border-2 border-pink-500/30 hover:border-pink-500/50 relative overflow-hidden"
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Apple Logo */}
                  <svg className="w-7 h-7 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <span className="font-bold text-xl relative z-10">App Store</span>
                </a>
                
                <a
                  href={BOOKING_LINKS.android}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-900 rounded-xl px-6 py-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  <span className="font-semibold text-lg">Google Play</span>
                </a>
              </div>
            </div>

            {/* Right Side - Phone Mockup Image */}
            <div className="flex justify-center md:justify-end order-1 md:order-2">
              <div className="relative group">
                <div 
                  className="transition-all duration-700 ease-out"
                  style={{
                    transform: 'perspective(1000px) rotateY(0deg)',
                    transformStyle: 'preserve-3d',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateY(15deg) scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) scale(1)';
                  }}
                >
                  <img
                    src="/images/download-mockup.png"
                    alt="Vitorias Beauty App Mockup"
                    className="w-[360px] md:w-[440px] lg:w-[480px] h-auto drop-shadow-2xl"
                    loading="lazy"
                    decoding="async"
                  />
                  
                  {/* Reflection/Shadow on Hover */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-pink-500/20 to-cyan-500/20 rounded-[3.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

