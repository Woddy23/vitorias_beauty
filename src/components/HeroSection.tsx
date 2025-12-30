import { ImageWithFallback } from './figma/ImageWithFallback';
import { CountUpAnimation } from './CountUpAnimation';
import { BookingCtas } from './BookingCtas';

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8 md:pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1626383137804-ff908d2753a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMGludGVyaW9yfGVufDF8fHx8MTc2MDg1NDEzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Vitorias Beauty Interior"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gray-900/80"></div>
      </div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl z-[1]"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl z-[1]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 md:mb-6 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 border border-pink-500/30 rounded-full px-6 py-2">
            <span className="text-white">
              Beleza & Elegância
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 text-white">
            Vitorias Beauty
          </h1>
          
          <p className="mb-8 md:mb-10 text-gray-300 px-4 max-w-2xl mx-auto leading-relaxed">
            Transformamos o seu visual com serviços premium de cabeleireiro e estética. 
            Experimente a excelência em cada detalhe.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <BookingCtas variant="primary" className="mb-0" />
            
            <button 
              onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-full hover:bg-cyan-500/10 transition-all whitespace-nowrap"
            >
              Ver Serviços
            </button>
          </div>

          {/* Stats with animation */}
          <div className="grid grid-cols-3 md:flex md:flex-row items-center justify-center gap-6 md:gap-16 mt-12 md:mt-16 max-w-3xl mx-auto">
            <div className="text-center">
              <CountUpAnimation end={10} suffix="+" className="text-pink-400 text-2xl md:text-3xl mb-1 md:mb-2 block min-w-[70px]" />
              <div className="text-gray-400 text-xs md:text-sm">Anos de Experiência</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-700"></div>
            <div className="text-center">
              <CountUpAnimation end={5000} suffix="+" className="text-cyan-400 text-2xl md:text-3xl mb-1 md:mb-2 block min-w-[70px]" />
              <div className="text-gray-400 text-xs md:text-sm">Clientes Felizes</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-700"></div>
            <div className="text-center">
              <CountUpAnimation end={50} suffix="+" className="text-pink-400 text-2xl md:text-3xl mb-1 md:mb-2 block min-w-[70px]" />
              <div className="text-gray-400 text-xs md:text-sm">Serviços Premium</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
