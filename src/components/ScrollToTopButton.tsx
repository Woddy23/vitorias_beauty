import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-4 z-50 p-3 bg-gray-800/90 backdrop-blur-sm border border-gray-700 text-cyan-400 rounded-full shadow-lg hover:bg-gray-700 hover:border-cyan-500 transition-all duration-300 hover:scale-110 group"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
        </button>
      )}
    </>
  );
}
