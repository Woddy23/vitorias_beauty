import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft, X } from 'lucide-react';

// 24 images for the gallery (2 per square)
const galleryImages = [
  'https://images.unsplash.com/photo-1636019411480-58321fcb11ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5pY3VyZSUyMG5haWxzJTIwYXJ0fGVufDF8fHx8MTc2MTQyODM4OXww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1683478311668-a47bc25151f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwcG9saXNoJTIwZGVzaWdufGVufDF8fHx8MTc2MTQzOTQzMHww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1659391542239-9648f307c0b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZWwlMjBuYWlscyUyMGJlYXV0aWZ1bHxlbnwxfHx8fDE3NjE0Mzk0MzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1517837317028-6ce34fd27c34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBtYW5pY3VyZXxlbnwxfHx8fDE3NjE0MTE3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1609353864300-f19013dedb39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwYXJ0JTIwZGVzaWdufGVufDF8fHx8MTc2MTM0MjMxNXww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1632345031435-8727f6897d53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3J5bGljJTIwbmFpbHN8ZW58MXx8fHwxNzYxNDM5NDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1700160566526-3f2d8aebccdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbmFpbHN8ZW58MXx8fHwxNzYxNDM5NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1613457492120-4fcfbb7c3a5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwc2Fsb24lMjBtYW5pY3VyZXxlbnwxfHx8fDE3NjEzNTkyNzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1661267571825-45b3036a1aed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBoYW5kcyUyMG5haWxzfGVufDF8fHx8MTc2MTQzOTQzMnww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1733171934596-6fad5221f396?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW5pY3VyZXxlbnwxfHx8fDE3NjE0MTU0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1479136145882-cedec2839dfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9zc3klMjBuYWlsc3xlbnwxfHx8fDE3NjE0Mzk0MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1636019411480-58321fcb11ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5pY3VyZSUyMG5haWxzJTIwYXJ0fGVufDF8fHx8MTc2MTQyODM4OXww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1683478311668-a47bc25151f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwcG9saXNoJTIwZGVzaWdufGVufDF8fHx8MTc2MTQzOTQzMHww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1659391542239-9648f307c0b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZWwlMjBuYWlscyUyMGJlYXV0aWZ1bHxlbnwxfHx8fDE3NjE0Mzk0MzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1517837317028-6ce34fd27c34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBtYW5pY3VyZXxlbnwxfHx8fDE3NjE0MTE3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1609353864300-f19013dedb39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwYXJ0JTIwZGVzaWdufGVufDF8fHx8MTc2MTM0MjMxNXww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1632345031435-8727f6897d53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3J5bGljJTIwbmFpbHN8ZW58MXx8fHwxNzYxNDM5NDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1700160566526-3f2d8aebccdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbmFpbHN8ZW58MXx8fHwxNzYxNDM5NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1613457492120-4fcfbb7c3a5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwc2Fsb24lMjBtYW5pY3VyZXxlbnwxfHx8fDE3NjEzNTkyNzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1661267571825-45b3036a1aed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBoYW5kcyUyMG5haWxzfGVufDF8fHx8MTc2MTQzOTQzMnww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1733171934596-6fad5221f396?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW5pY3VyZXxlbnwxfHx8fDE3NjE0MTU0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1479136145882-cedec2839dfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9zc3klMjBuYWlsc3xlbnwxfHx8fDE3NjE0Mzk0MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1700160566526-3f2d8aebccdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbmFpbHN8ZW58MXx8fHwxNzYxNDM5NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1609353864300-f19013dedb39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwYXJ0JTIwZGVzaWdufGVufDF8fHx8MTc2MTM0MjMxNXww&ixlib=rb-4.1.0&q=80&w=1080',
];

// Create 12 squares with 2 images each
const createGallerySquares = () => {
  const squares = [];
  for (let i = 0; i < 12; i++) {
    squares.push({
      id: i,
      image1: galleryImages[i * 2],
      image2: galleryImages[i * 2 + 1],
      isVertical: i % 2 === 0,
    });
  }
  return squares;
};

export function MaosPage() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const squares = createGallerySquares();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Header />
      
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <button
            onClick={() => navigate('/galeria')}
            className="flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Voltar à Galeria</span>
          </button>

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-cyan-500/10 border border-pink-500/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500"></div>
              <span className="text-sm text-gray-300">Portfolio</span>
            </div>
            <h1 className="text-gray-100 mb-4">
              Mãos
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Manicure e nail art impecáveis. Das unhas clássicas aos designs mais ousados e criativos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {squares.map((square, index) => (
              <div
                key={square.id}
                className="group relative overflow-hidden rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div className={`relative aspect-square ${square.isVertical ? 'flex' : 'flex flex-col'}`}>
                  <div 
                    className={`relative overflow-hidden cursor-pointer ${square.isVertical ? 'w-1/2' : 'h-1/2'}`}
                    onClick={() => setSelectedImage(square.image1)}
                  >
                    <ImageWithFallback
                      src={square.image1}
                      alt={`Manicure ${index * 2 + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className={`${square.isVertical ? 'w-px bg-gradient-to-b' : 'h-px bg-gradient-to-r'} from-pink-500/50 via-cyan-500/50 to-pink-500/50`}></div>

                  <div 
                    className={`relative overflow-hidden cursor-pointer ${square.isVertical ? 'w-1/2' : 'h-1/2'}`}
                    onClick={() => setSelectedImage(square.image2)}
                  >
                    <ImageWithFallback
                      src={square.image2}
                      alt={`Manicure ${index * 2 + 2}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                <div className={`absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  index % 2 === 0 ? 'border-pink-500' : 'border-cyan-500'
                }`}></div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center gap-4 px-8 py-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50">
              <p className="text-gray-300">
                Gostou do que viu? Faça já a sua marcação!
              </p>
              <button
                onClick={() => window.open('https://you.zappysoftware.com/vitoriasbeauty', '_blank')}
                className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-3 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg shadow-pink-500/30"
              >
                Fazer Marcação
              </button>
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-pink-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <ImageWithFallback
              src={selectedImage}
              alt="Imagem ampliada"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
