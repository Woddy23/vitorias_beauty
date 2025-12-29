import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft, X } from 'lucide-react';

// 24 images for the gallery (2 per square)
const galleryImages = [
  'https://images.unsplash.com/photo-1759675905846-d9ec793714af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwdXBkbyUyMGhhaXJzdHlsZXxlbnwxfHx8fDE3NjE0MDEyMzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1637150119047-a0b66ac05f93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwaGFpcnN0eWxlfGVufDF8fHx8MTc2MTQyMDI3NHww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1724572803720-3a925d7b499a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpZGVkJTIwaGFpcnN0eWxlfGVufDF8fHx8MTc2MTQyMDI3NXww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1713180758658-ba856416ffbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGhhaXJzdHlsZXxlbnwxfHx8fDE3NjE0Mzk0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1549236177-f9b0031756eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBoYWlyfGVufDF8fHx8MTc2MTQzOTQxOHww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1583170607643-9fcaba85073c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYnVuJTIwaGFpcnN0eWxlfGVufDF8fHx8MTc2MTQzOTQxOXww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1650816884639-811b3de7f6c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9tJTIwaGFpcnN0eWxlfGVufDF8fHx8MTc2MTQzOTQxOXww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1519028973475-162977ce59bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXJseSUyMHVwZG98ZW58MXx8fHwxNzYxNDM5NDIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1612690207805-a3c172ea6e8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwYnJhaWQlMjBzdHlsZXxlbnwxfHx8fDE3NjE0Mzk0MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1558265246-e84a824bcd83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlnbm9uJTIwaGFpcnN0eWxlfGVufDF8fHx8MTc2MTQzOTQyMHww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1533417020304-c785906cd8f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGhhaXJzdHlsZXxlbnwxfHx8fDE3NjE0Mzk0MjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1593359684352-cb3fd6c0ff1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb255dGFpbCUyMHN0eWxlfGVufDF8fHx8MTc2MTQzOTQyMXww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1624708255603-84fdfd9fd8b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxmJTIwdXAlMjBoYWlyc3R5bGV8ZW58MXx8fHwxNzYxNDM5NDIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1606773763032-462cc1af227c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwaGFpcnN0eWxlfGVufDF8fHx8MTc2MTQzOTQyMnww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1568631982221-1fb409cbde0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbGVlayUyMHBvbnl0YWlsfGVufDF8fHx8MTc2MTQzOTQyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1663582815426-3d31dbf17faf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXZ5JTIwaGFpcnN0eWxlfGVufDF8fHx8MTc2MTQzOTQyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1605180427725-95e306fc0e9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bWlub3VzJTIwaGFpcnN0eWxlfGVufDF8fHx8MTc2MTQzOTQyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1718916913219-0ebc462f91f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWRlJTIwc3dlcHQlMjBoYWlyfGVufDF8fHx8MTc2MTQzOTQyNHww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1596096479531-ae6993bba339?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0dXJlZCUyMGhhaXJzdHlsZXxlbnwxfHx8fDE3NjE0Mzk0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1532171875345-9712d9d4f65a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBsb25nJTIwaGFpcnxlbnwxfHx8fDE3NjE0MzkyMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1712641966879-63f3bc1a47e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGluZyUyMGJlYXV0eXxlbnwxfHx8fDE3NjE0MzkyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1647462741268-e5724e5886c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyZHJlc3NlciUyMHN0eWxpbmd8ZW58MXx8fHwxNzYxNDM5MjA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1707231510379-bb21c262e2c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3JnZW91cyUyMGhhaXJzdHlsZXxlbnwxfHx8fDE3NjE0MzkyMDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1637150119047-a0b66ac05f93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwaGFpcnN0eWxlfGVufDF8fHx8MTc2MTQyMDI3NHww&ixlib=rb-4.1.0&q=80&w=1080',
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

export function PenteadosPage() {
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
            className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Voltar à Galeria</span>
          </button>

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-cyan-500/10 border border-cyan-500/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500"></div>
              <span className="text-sm text-gray-300">Portfolio</span>
            </div>
            <h1 className="text-gray-100 mb-4">
              Penteados
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Penteados elegantes para todas as ocasiões. Do casual ao formal, criamos o look perfeito para si.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {squares.map((square, index) => (
              <div
                key={square.id}
                className="group relative overflow-hidden rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
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
                      alt={`Penteado ${index * 2 + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className={`${square.isVertical ? 'w-px bg-gradient-to-b' : 'h-px bg-gradient-to-r'} from-cyan-500/50 via-pink-500/50 to-cyan-500/50`}></div>

                  <div 
                    className={`relative overflow-hidden cursor-pointer ${square.isVertical ? 'w-1/2' : 'h-1/2'}`}
                    onClick={() => setSelectedImage(square.image2)}
                  >
                    <ImageWithFallback
                      src={square.image2}
                      alt={`Penteado ${index * 2 + 2}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                <div className={`absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  index % 2 === 0 ? 'border-cyan-500' : 'border-pink-500'
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
                className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-3 rounded-full hover:from-cyan-600 hover:to-cyan-700 transition-all shadow-lg shadow-cyan-500/30"
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
            className="absolute top-4 right-4 text-white hover:text-cyan-400 transition-colors"
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
