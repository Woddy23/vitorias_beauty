import { useState, useEffect } from 'react';
import { X, Sparkles, Gift, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { openExternalUrl } from '../utils/security';

export function PromotionPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Verificar se o popup já foi visto hoje
    const lastShown = localStorage.getItem('promotionPopupLastShown');
    const today = new Date().toDateString();

    if (lastShown !== today) {
      // Mostrar popup após 2 segundos
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem('promotionPopupLastShown', today);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleBooking = () => {
    openExternalUrl('https://you.zappysoftware.com/vitoriasbeauty');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 animate-in fade-in duration-300"
        onClick={handleClose}
      />
      
      {/* Popup */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-2xl animate-in zoom-in-95 duration-300">
        <div className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border border-pink-500/20 rounded-3xl overflow-hidden shadow-2xl shadow-pink-500/20">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 z-10 p-2.5 bg-gray-800/90 hover:bg-gray-700 rounded-full transition-all hover:scale-110 border border-gray-700"
            aria-label="Fechar"
          >
            <X className="w-5 h-5 text-gray-300" />
          </button>

          {/* Background Image with overlay */}
          <div className="absolute inset-0 opacity-[0.07]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1712641970791-ea9a566c93bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMGVsZWdhbnR8ZW58MXx8fHwxNzYyNzI3MTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

          {/* Content */}
          <div className="relative p-8 md:p-12">
            {/* Top badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 border border-pink-500/30 rounded-full px-5 py-2 backdrop-blur-sm">
                <Gift className="w-4 h-4 text-pink-400" />
                <span className="text-pink-400 text-sm">Oferta Especial</span>
              </div>
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-pink-500/30 rounded-full blur-2xl"></div>
                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-pink-500 rounded-full shadow-xl shadow-pink-500/40">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-white mb-4 text-center">Promoções Exclusivas</h2>
            
            {/* Description */}
            <p className="text-gray-300 mb-8 leading-relaxed text-center max-w-md mx-auto">
              Descubra as nossas promoções em tratamentos capilares premium. 
              Beleza e elegância com preços especiais!
            </p>

            {/* Highlight boxes */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-800/60 backdrop-blur-sm border border-pink-500/20 rounded-2xl p-6 text-center hover:border-pink-500/40 transition-all">
                <div className="text-3xl md:text-4xl text-pink-400 mb-2">20%</div>
                <div className="text-gray-400 text-sm mb-1">Desconto</div>
                <div className="text-gray-300 text-xs">Alisamento Progressivo</div>
              </div>
              <div className="bg-gray-800/60 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 text-center hover:border-cyan-500/40 transition-all">
                <div className="text-3xl md:text-4xl text-cyan-400 mb-2">15%</div>
                <div className="text-gray-400 text-sm mb-1">Desconto</div>
                <div className="text-gray-300 text-xs">Tratamento Capilar</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <button
                onClick={handleBooking}
                className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-3.5 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-105"
              >
                Agendar Agora
              </button>
              <button
                onClick={handleClose}
                className="border-2 border-gray-700 text-gray-300 px-8 py-3.5 rounded-full hover:bg-gray-800 hover:border-gray-600 transition-all"
              >
                Mais Tarde
              </button>
            </div>

            {/* Small text */}
            <div className="text-center">
              <p className="text-gray-500 text-xs">
                *Promoção válida até ao final do mês • Sujeito a disponibilidade
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
