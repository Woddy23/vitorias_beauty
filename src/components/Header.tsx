import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logoImage from 'figma:asset/51fd73e2d92324fded4f3834fe80e72d6131ba18.png';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from './ui/sheet';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (closeTimeout) clearTimeout(closeTimeout);
    };
  }, [closeTimeout]);

  const handleNavigation = (path: string, sectionId?: string) => {
    if (path.startsWith('/servicos/')) {
      navigate(path);
      setIsMenuOpen(false);
      setIsServicesOpen(false);
      setIsMobileServicesOpen(false);
      window.scrollTo(0, 0);
    } else if (location.pathname === '/') {
      // If on home page, scroll to section
      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setIsMenuOpen(false);
        }
      }
    } else {
      // If on another page, navigate to home then scroll
      navigate('/' + (sectionId ? `#${sectionId}` : ''));
      setIsMenuOpen(false);
      setTimeout(() => {
        if (sectionId) {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    }
  };

  const serviceCategories = [
    { name: 'Cabelo', path: '/servicos/cabelo' },
    { name: 'Makeup', path: '/servicos/makeup' },
    { name: 'Manicure e Pedicure', path: '/servicos/manicure-pedicure' },
    { name: 'Estética', path: '/servicos/estetica' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-800/60 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex md:grid md:grid-cols-[1fr_auto_1fr] items-center justify-between h-24 gap-4">
          {/* Left Navigation - Desktop */}
          <nav className="hidden md:flex items-center justify-end gap-10 pr-8">
            <button 
              onClick={() => handleNavigation('/', 'hero')}
              className="text-gray-300 hover:text-pink-400 transition-colors"
            >
              Início
            </button>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => {
                if (closeTimeout) clearTimeout(closeTimeout);
                setIsServicesOpen(true);
              }}
              onMouseLeave={() => {
                const timeout = setTimeout(() => {
                  setIsServicesOpen(false);
                }, 200);
                setCloseTimeout(timeout);
              }}
            >
              <button 
                className="flex items-center gap-1 text-gray-300 hover:text-pink-400 transition-colors"
              >
                Serviços
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-gray-800/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-700/50 overflow-hidden">
                  {serviceCategories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => handleNavigation(category.path)}
                      className="w-full text-left px-6 py-3 text-gray-300 hover:text-pink-400 hover:bg-gray-700/50 transition-colors border-b border-gray-700/30 last:border-0"
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <button 
              onClick={() => { navigate('/galeria'); setIsServicesOpen(false); }}
              className="text-gray-300 hover:text-pink-400 transition-colors"
            >
              Galeria
            </button>
          </nav>

          {/* Logo - Center on desktop, left on mobile */}
          <div className="flex items-center justify-start md:justify-center md:px-8">
            <img 
              src={logoImage} 
              alt="Vitoria's Beauty" 
              className="h-14 md:h-16 w-auto cursor-pointer"
              onClick={() => handleNavigation('/', 'hero')}
            />
          </div>

          {/* Right Navigation - Desktop */}
          <nav className="hidden md:flex items-center justify-start gap-10 pl-8">
            <button 
              onClick={() => navigate('/sobre')}
              className="text-gray-300 hover:text-pink-400 transition-colors whitespace-nowrap"
            >
              Sobre Nós
            </button>
            <a 
              href="https://www.miss-shampoo.pt/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-400 transition-colors whitespace-nowrap"
            >
              Loja Online
            </a>
            <button 
              onClick={() => window.open('https://you.zappysoftware.com/vitoriasbeauty', '_blank')}
              className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-2.5 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg shadow-pink-500/30 whitespace-nowrap"
            >
              Agende Agora
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden text-white p-2">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-900/95 backdrop-blur-md border-gray-800 w-[280px] sm:w-[320px]">
              <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
              <SheetDescription className="sr-only">
                Navegue pelas diferentes seções do Vitoria's Beauty
              </SheetDescription>
              <nav className="flex flex-col gap-6 mt-8 px-4">
                <button 
                  onClick={() => handleNavigation('/', 'hero')}
                  className="text-gray-300 hover:text-pink-400 transition-colors text-left py-2"
                >
                  Início
                </button>
                
                {/* Mobile Services Dropdown */}
                <div>
                  <button 
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="flex items-center justify-between w-full text-gray-300 hover:text-pink-400 transition-colors text-left py-2"
                  >
                    Serviços
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isMobileServicesOpen && (
                    <div className="ml-4 mt-2 space-y-1 pl-2 border-l-2 border-pink-500/30">
                      {serviceCategories.map((category, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            handleNavigation(category.path);
                            setIsMobileServicesOpen(false);
                          }}
                          className="block w-full text-left py-2 px-3 text-gray-400 hover:text-pink-400 hover:bg-gray-800/50 rounded transition-colors"
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                
                <button 
                  onClick={() => { navigate('/galeria'); setIsMenuOpen(false); }}
                  className="text-gray-300 hover:text-pink-400 transition-colors text-left py-2"
                >
                  Galeria
                </button>
                <button 
                  onClick={() => { navigate('/sobre'); setIsMenuOpen(false); }}
                  className="text-gray-300 hover:text-pink-400 transition-colors text-left py-2"
                >
                  Sobre Nós
                </button>
                <a 
                  href="https://www.miss-shampoo.pt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-pink-400 transition-colors text-left py-2 block"
                >
                  Loja Online
                </a>
                <button 
                  onClick={() => window.open('https://you.zappysoftware.com/vitoriasbeauty', '_blank')}
                  className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all mt-4"
                >
                  Agende Agora
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
