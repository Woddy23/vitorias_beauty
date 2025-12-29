import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

const galleryCategories = [
  {
    image: 'https://images.unsplash.com/photo-1647462741268-e5724e5886c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjBzdHlsaW5nfGVufDF8fHx8MTc2MDkwODE1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Cabelos',
    description: 'Cortes, coloração, alisamentos, madeixas e penteados',
  },
  {
    image: 'https://images.unsplash.com/photo-1758225490983-0fae7961e425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5pY3VyZSUyMHBlZGljdXJlfGVufDF8fHx8MTc2MDkxMDc3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Manicure e Pedicure',
    description: 'Tratamentos completos para mãos e pés com nail art',
  },
  {
    image: 'https://images.unsplash.com/photo-1600637070413-0798fafbb6c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYWtldXAlMjBhcnRpc3R8ZW58MXx8fHwxNzYwOTA5NzMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Makeup',
    description: 'Maquilhagem profissional para eventos especiais',
  },
];

export function GallerySection() {
  const navigate = useNavigate();

  const handleGalleryClick = () => {
    navigate('/galeria');
    window.scrollTo(0, 0);
  };

  return (
    <section id="galeria" className="py-24 bg-gray-800 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 border border-pink-500/30 rounded-full px-6 py-2">
            <span className="text-white">
              Galeria
            </span>
          </div>
          <h2 className="mb-4 text-white">
            Nossos Trabalhos
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Veja alguns dos nossos trabalhos e transformações realizadas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryCategories.map((category, index) => (
            <div
              key={index}
              onClick={handleGalleryClick}
              className="group bg-gray-700/50 backdrop-blur rounded-xl md:rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-300 border border-gray-600 hover:border-pink-500/50 cursor-pointer"
            >
              <div className="relative h-48 md:h-64 overflow-hidden">
                <ImageWithFallback
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent"></div>
              </div>
              
              <div className="p-4 md:p-6">
                <h3 className="mb-2 text-white">{category.title}</h3>
                <p className="text-gray-400 text-sm md:text-base">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
