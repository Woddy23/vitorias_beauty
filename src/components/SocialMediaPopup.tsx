import { useState, useEffect } from 'react';
import { X, Heart, Instagram, Facebook } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SocialMediaPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Verificar se o popup já foi visto hoje
    const lastShown = localStorage.getItem('socialPopupLastShown');
    const promotionShown = localStorage.getItem('promotionPopupLastShown');
    const today = new Date().toDateString();

    // Só mostrar se não foi visto hoje e se o popup de promoções também não foi mostrado hoje
    if (lastShown !== today && promotionShown !== today) {
      // Mostrar popup após 5 segundos
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem('socialPopupLastShown', today);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank');
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
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md animate-in zoom-in-95 duration-300">
        <div className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border border-cyan-500/20 rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/20">
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
              src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGJlYXV0eXxlbnwxfHx8fDE3NjI3Mjg0MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl"></div>

          {/* Content */}
          <div className="relative p-8 md:p-10">
            {/* Top badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-500/30 rounded-full px-5 py-2 backdrop-blur-sm">
                <Heart className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm">Siga-nos</span>
              </div>
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur-2xl"></div>
                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-cyan-500 rounded-full shadow-xl shadow-cyan-500/40">
                  <Heart className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-white mb-3 text-center">Conecte-se Connosco</h2>
            
            {/* Description */}
            <p className="text-gray-300 mb-8 leading-relaxed text-center">
              Siga as nossas redes sociais e fique a par das novidades, 
              dicas de beleza e trabalhos exclusivos!
            </p>

            {/* Social Media Buttons */}
            <div className="space-y-3 mb-6">
              <button
                onClick={() => handleSocialClick('https://www.instagram.com/vitoriasbeauty_/')}
                className="w-full group bg-gradient-to-r from-pink-500/10 to-purple-500/10 border-2 border-pink-500/30 hover:border-pink-500/60 rounded-2xl p-5 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-500/20"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-pink-500/30">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-white">Instagram</div>
                    <div className="text-gray-400 text-sm">@vitoriasbeauty_</div>
                  </div>
                  <div className="text-pink-400 text-2xl group-hover:translate-x-1 transition-transform">→</div>
                </div>
              </button>

              <button
                onClick={() => handleSocialClick('https://www.facebook.com/vitoriasbeauty')}
                className="w-full group bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/30 hover:border-cyan-500/60 rounded-2xl p-5 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/30">
                    <Facebook className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-white">Facebook</div>
                    <div className="text-gray-400 text-sm">Vitoria's Beauty</div>
                  </div>
                  <div className="text-cyan-400 text-2xl group-hover:translate-x-1 transition-transform">→</div>
                </div>
              </button>
            </div>

            {/* Close button */}
            <div className="flex justify-center">
              <button
                onClick={handleClose}
                className="border-2 border-gray-700 text-gray-300 px-8 py-3 rounded-full hover:bg-gray-800 hover:border-gray-600 transition-all"
              >
                Talvez Mais Tarde
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
