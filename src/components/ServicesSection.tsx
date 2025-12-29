import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import manicureImage from 'figma:asset/65ed65160253e2d4e08ad5ba6f5277038e493c69.png';
import makeupImage from 'figma:asset/c1442b461441a9fef7364ad61bf1fc69fa4d8faa.png';

const services = [
  {
    image: 'https://images.unsplash.com/photo-1647462741268-e5724e5886c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjBzdHlsaW5nfGVufDF8fHx8MTc2MDkwODE1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Cabelo',
    description: 'Cortes, coloração, madeixas, alisamentos e tratamentos capilares',
    path: '/servicos/cabelo',
  },
  {
    image: makeupImage,
    title: 'Makeup',
    description: 'Maquilhagem profissional para eventos e ocasiões especiais',
    path: '/servicos/makeup',
  },
  {
    image: manicureImage,
    title: 'Manicure e Pedicure',
    description: 'Cuidados completos para mãos e pés com nail art',
    path: '/servicos/manicure-pedicure',
  },
  {
    image: 'https://images.unsplash.com/photo-1559185590-d545a0c5a1dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzcGElMjBmYWNpYWx8ZW58MXx8fHwxNzYwOTEwMDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Estética',
    description: 'Tratamentos faciais, limpeza de pele e depilação',
    path: '/servicos/estetica',
  },
];

export function ServicesSection() {
  const navigate = useNavigate();

  const handleServiceClick = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <section id="servicos" className="py-24 bg-gray-700 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl -z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 border border-pink-500/30 rounded-full px-6 py-2">
            <span className="text-white">
              Nossos Serviços
            </span>
          </div>
          <h2 className="mb-4 text-white">
            Serviços Premium de Beleza
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços de beleza e bem-estar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleServiceClick(service.path)}
              className="group bg-gray-800/50 backdrop-blur rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-300 border border-gray-700 hover:border-pink-500/50 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="mb-2 text-white">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
