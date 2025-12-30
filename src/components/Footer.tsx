import { Facebook, Instagram, MapPin, Mail, Phone, Clock } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import logoImage from 'figma:asset/51fd73e2d92324fded4f3834fe80e72d6131ba18.png';

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string, sectionId?: string) => {
    if (location.pathname === '/') {
      // If on home page, scroll to section
      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // If on another page, navigate to home then scroll
      navigate('/' + (sectionId ? `#${sectionId}` : ''));
      setTimeout(() => {
        if (sectionId) {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          window.scrollTo(0, 0);
        }
      }, 100);
    }
  };

  const locations = [
    { name: 'Parque das Nações', phone: '+351 218 956 789' },
    { name: 'Portela LRS', phone: '+351 218 945 123' },
    { name: 'Saldanha', phone: '+351 213 456 789' },
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-pink-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        {/* Logo & Social - Full width on mobile */}
        <div className="mb-8 md:mb-12 md:hidden">
          <img 
            src={logoImage} 
            alt="Vitorias Beauty" 
            className="h-16 w-auto mb-6"
          />
          <p className="text-gray-400 mb-6 leading-relaxed">
            Cabeleireiro e estética ao seu dispor em Lisboa. Excelência e dedicação desde 2014.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/share/17VVExLm5g/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#1877F2] hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/vitorias_beauty?igsh=a21seHB1bmR1ZXpt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCAF45] hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {/* Logo & Social - Desktop only */}
          <div className="hidden md:block">
            <img 
              src={logoImage} 
              alt="Vitorias Beauty" 
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-400 mb-6 leading-relaxed">
              Cabeleireiro e estética ao seu dispor em Lisboa. Excelência e dedicação desde 2014.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/17VVExLm5g/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#1877F2] hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/vitorias_beauty?igsh=a21seHB1bmR1ZXpt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCAF45] hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Menu */}
          <div className="lg:pl-8">
            <h4 className="mb-4 md:mb-6 text-white">
              Menu
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <button 
                  onClick={() => handleNavigation('/', 'hero')} 
                  className="text-gray-300 hover:text-pink-400 transition-colors flex items-center group text-sm md:text-base"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-pink-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/', 'servicos')} 
                  className="text-gray-300 hover:text-pink-400 transition-colors flex items-center group text-sm md:text-base"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-pink-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    navigate('/equipa');
                    window.scrollTo(0, 0);
                  }} 
                  className="text-gray-300 hover:text-pink-400 transition-colors flex items-center group text-sm md:text-base"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-pink-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Nossa Equipa
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    navigate('/galeria');
                    window.scrollTo(0, 0);
                  }} 
                  className="text-gray-300 hover:text-pink-400 transition-colors flex items-center group text-sm md:text-base"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-pink-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Galeria
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    navigate('/elogios');
                    window.scrollTo(0, 0);
                  }} 
                  className="text-gray-300 hover:text-pink-400 transition-colors flex items-center group text-sm md:text-base"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-pink-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Elogios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    navigate('/contacto');
                    window.scrollTo(0, 0);
                  }} 
                  className="text-gray-300 hover:text-pink-400 transition-colors flex items-center group text-sm md:text-base"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-pink-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Contacto
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    navigate('/sobre');
                    window.scrollTo(0, 0);
                  }} 
                  className="text-gray-300 hover:text-pink-400 transition-colors flex items-center group text-sm md:text-base"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-pink-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Sobre Nós
                </button>
              </li>
              <li>
                <a href="https://www.miss-shampoo.pt/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group text-sm md:text-base">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Loja Online
                </a>
              </li>
            </ul>
          </div>

          {/* Salões */}
          <div>
            <h4 className="mb-4 md:mb-6 text-white">
              Os Nossos Salões
            </h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="group">
                <button 
                  onClick={() => { navigate('/parque-nacoes'); window.scrollTo(0, 0); }}
                  className="flex items-start gap-1.5 md:gap-2 mb-1 w-full text-left"
                >
                  <MapPin className="w-3 h-3 md:w-4 md:h-4 text-pink-400 mt-0.5 md:mt-1 flex-shrink-0" />
                  <p className="text-white group-hover:text-pink-400 transition-colors text-sm md:text-base leading-tight">Parque das Nações</p>
                </button>
                <div className="flex items-center gap-1.5 md:gap-2 ml-4 md:ml-6 text-gray-400 text-xs md:text-sm">
                  <Phone className="w-3 h-3" />
                  <a href="tel:+351218958421" className="hover:text-cyan-400 transition-colors">
                    +351 218 958 421
                  </a>
                </div>
              </li>
              <li className="group">
                <button 
                  onClick={() => { navigate('/saldanha'); window.scrollTo(0, 0); }}
                  className="flex items-start gap-1.5 md:gap-2 mb-1 w-full text-left"
                >
                  <MapPin className="w-3 h-3 md:w-4 md:h-4 text-pink-400 mt-0.5 md:mt-1 flex-shrink-0" />
                  <p className="text-white group-hover:text-pink-400 transition-colors text-sm md:text-base leading-tight">Saldanha</p>
                </button>
                <div className="flex items-center gap-1.5 md:gap-2 ml-4 md:ml-6 text-gray-400 text-xs md:text-sm">
                  <Phone className="w-3 h-3" />
                  <a href="tel:+351210987604" className="hover:text-cyan-400 transition-colors">
                    +351 210 987 604
                  </a>
                </div>
              </li>
              <li className="group">
                <button 
                  onClick={() => { navigate('/portela-lrs'); window.scrollTo(0, 0); }}
                  className="flex items-start gap-1.5 md:gap-2 mb-1 w-full text-left"
                >
                  <MapPin className="w-3 h-3 md:w-4 md:h-4 text-pink-400 mt-0.5 md:mt-1 flex-shrink-0" />
                  <p className="text-white group-hover:text-pink-400 transition-colors text-sm md:text-base leading-tight">Portela LRS</p>
                </button>
                <div className="flex items-center gap-1.5 md:gap-2 ml-4 md:ml-6 text-gray-400 text-xs md:text-sm">
                  <Phone className="w-3 h-3" />
                  <a href="tel:+351219431654" className="hover:text-cyan-400 transition-colors">
                    +351 219 431 654
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Contacto - spans 2 cols on mobile, 1 col on desktop */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="mb-4 md:mb-6 text-white">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start gap-2 md:gap-3">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm mb-1">Email</p>
                    <a href="mailto:vitoriasbeautygeral@gmail.com" className="text-white hover:text-pink-400 transition-colors text-xs md:text-sm break-all">
                      vitoriasbeautygeral@gmail.com
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2 md:gap-3">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm mb-1 md:mb-2">Horário</p>
                    <p className="text-white text-xs md:text-sm">Seg - Sáb: 8h - 20h</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-xs md:text-sm text-center md:text-left">
              © {new Date().getFullYear()} Vitorias Beauty. Todos os direitos reservados.
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                Termos e Condições
              </a>
              <a 
                href="https://www.livroreclamacoes.pt/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Livro de Reclamações
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
