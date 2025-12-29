import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface GalleryCategory {
  id: string;
  name: string;
  image: string;
  count?: number;
}

export function GalleryPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryId: string) => {
    const routeMap: { [key: string]: string } = {
      'alisamento': '/alisamento',
      'penteados': '/penteados',
      'maos': '/maos',
      'madeixas': '/madeixas',
      'coloracao': '/coloracao',
      'makeup': '/makeup-galeria',
      'hair-lamination': '/hair-lamination',
    };

    if (routeMap[categoryId]) {
      navigate(routeMap[categoryId]);
      window.scrollTo(0, 0);
    } else {
      setSelectedCategory(categoryId);
    }
  };

  const categories: GalleryCategory[] = [
    {
      id: 'alisamento',
      name: 'ALISAMENTO',
      image: 'https://images.unsplash.com/photo-1739979903440-d0aae44cdf16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc21vb3RoaW5nJTIwdHJlYXRtZW50fGVufDF8fHx8MTc2MTQyODM4OHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'penteados',
      name: 'PENTEADOS',
      image: 'https://images.unsplash.com/photo-1759675905846-d9ec793714af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwaGFpcnN0eWxlJTIwdXBkb3xlbnwxfHx8fDE3NjE0MjgzODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'maos',
      name: 'MÃOS',
      image: 'https://images.unsplash.com/photo-1636019411480-58321fcb11ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5pY3VyZSUyMG5haWxzJTIwYXJ0fGVufDF8fHx8MTc2MTQyODM4OXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'madeixas',
      name: 'MADEIXAS',
      image: 'https://images.unsplash.com/photo-1597993866297-92b8acff41d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwaGlnaGxpZ2h0cyUyMGJhbGF5YWdlfGVufDF8fHx8MTc2MTQxNDE5NXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'coloracao',
      name: 'COLORAÇÃO',
      image: 'https://images.unsplash.com/photo-1657546978958-76f538211af8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwY29sb3IlMjBzYWxvbnxlbnwxfHx8fDE3NjE0MjAyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'makeup',
      name: 'MAKEUP',
      image: 'https://images.unsplash.com/photo-1698181842513-2179d5f8bc65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBhcnRpc3QlMjBiZWF1dHl8ZW58MXx8fHwxNzYxMzQyMzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'hair-lamination',
      name: 'HAIR LAMINATION',
      image: 'https://images.unsplash.com/photo-1721351336580-00200736ea98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwbGFtaW5hdGlvbiUyMGtlcmF0aW58ZW58MXx8fHwxNzYxNDI4MzkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Title with Badge */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-cyan-500/10 border border-pink-500/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500"></div>
              <span className="text-sm text-gray-300">Nossos Trabalhos</span>
            </div>
            <h1 className="text-gray-100 mb-4">
              Galeria de Beleza
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore nossos trabalhos organizados por categoria. Cada imagem conta uma história de transformação e beleza.
            </p>
          </div>

          {/* Categories Grid - First Row: 4 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {categories.slice(0, 4).map((category, index) => (
              <div
                key={category.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[3/4] transition-all duration-500 hover:scale-105 w-full"
                onClick={() => handleCategoryClick(category.id)}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Background Image */}
                <ImageWithFallback
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500"></div>
                
                {/* Border Effect - Alternating Pink and Cyan */}
                <div 
                  className={`absolute inset-0 rounded-2xl border-2 ${
                    index % 2 === 0 
                      ? 'border-pink-500/0 group-hover:border-pink-500/60' 
                      : 'border-cyan-500/0 group-hover:border-cyan-500/60'
                  } transition-all duration-500`}
                ></div>

                {/* Content - Centered */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  {/* Category Name */}
                  <h3 className="text-white text-2xl tracking-wider text-center">
                    {category.name}
                  </h3>
                  
                  {/* Decorative Line Below */}
                  <div 
                    className={`h-0.5 w-0 group-hover:w-16 transition-all duration-500 mt-4 ${
                      index % 2 === 0 ? 'bg-pink-500' : 'bg-cyan-500'
                    }`}
                  ></div>
                </div>

                {/* Corner Accent */}
                <div 
                  className={`absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    index % 2 === 0 ? 'border-pink-500' : 'border-cyan-500'
                  }`}
                ></div>
              </div>
            ))}
          </div>

          {/* Categories Grid - Second Row: 3 items centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {categories.slice(4, 7).map((category, index) => (
              <div
                key={category.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[3/4] transition-all duration-500 hover:scale-105 w-full"
                onClick={() => handleCategoryClick(category.id)}
                style={{
                  animationDelay: `${(index + 4) * 100}ms`,
                }}
              >
                {/* Background Image */}
                <ImageWithFallback
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500"></div>
                
                {/* Border Effect - Alternating Pink and Cyan */}
                <div 
                  className={`absolute inset-0 rounded-2xl border-2 ${
                    (index + 4) % 2 === 0 
                      ? 'border-pink-500/0 group-hover:border-pink-500/60' 
                      : 'border-cyan-500/0 group-hover:border-cyan-500/60'
                  } transition-all duration-500`}
                ></div>

                {/* Content - Centered */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  {/* Category Name */}
                  <h3 className="text-white text-2xl tracking-wider text-center">
                    {category.name}
                  </h3>
                  
                  {/* Decorative Line Below */}
                  <div 
                    className={`h-0.5 w-0 group-hover:w-16 transition-all duration-500 mt-4 ${
                      (index + 4) % 2 === 0 ? 'bg-pink-500' : 'bg-cyan-500'
                    }`}
                  ></div>
                </div>

                {/* Corner Accent */}
                <div 
                  className={`absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    (index + 4) % 2 === 0 ? 'border-pink-500' : 'border-cyan-500'
                  }`}
                ></div>
              </div>
            ))}
          </div>

          {/* Info Note */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gray-800/50 border border-gray-700/50">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 animate-pulse"></div>
              <p className="text-gray-400 text-sm">
                Clique numa categoria para ver a galeria completa
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
