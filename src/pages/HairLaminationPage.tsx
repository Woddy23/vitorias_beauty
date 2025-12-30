import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft, X } from 'lucide-react';
import { SEO } from '../components/SEO';
import { openExternalUrl } from '../utils/security';

const galleryImages = [
  'https://images.unsplash.com/photo-1721351336580-00200736ea98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwbGFtaW5hdGlvbiUyMGtlcmF0aW58ZW58MXx8fHwxNzYxNDI4MzkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1739979903440-d0aae44cdf16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbW9vdGglMjBoYWlyJTIwdHJlYXRtZW50fGVufDF8fHx8MTc2MTQzOTIwMHww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1758315949140-1972ace0644e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9zc3klMjBzdHJhaWdodCUyMGhhaXJ8ZW58MXx8fHwxNzYxNDM5MjAyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1653241625670-3a1e643464ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlueSUyMGhhaXIlMjBtb2RlbHxlbnwxfHx8fDE3NjE0MzkyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1760038548850-bfc356d88b12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwY2FyZSUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NjE0MzkyMDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1717160675489-7779f2c91999?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxvbiUyMGhhaXIlMjBjYXJlfGVufDF8fHx8MTc2MTQzOTIwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1532171875345-9712d9d4f65a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBsb25nJTIwaGFpcnxlbnwxfHx8fDE3NjE0MzkyMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1711454867327-4990937f8f18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhaWdodCUyMGhhaXIlMjBzdHlsZXxlbnwxfHx8fDE3NjE0MzkyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1759142235060-3191ee596c81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbGVlayUyMGhhaXIlMjBzYWxvbnxlbnwxfHx8fDE3NjE0MzkyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1565463281984-f5a778c6ca80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBlcmZlY3QlMjBoYWlyfGVufDF8fHx8MTc2MTQzOTIwNnww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1733729765058-0e5fa3af47c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwYmVhdXR5JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYxNDM5MjA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1647462741268-e5724e5886c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyZHJlc3NlciUyMHN0eWxpbmd8ZW58MXx8fHwxNzYxNDM5MjA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1721351336580-00200736ea98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwbGFtaW5hdGlvbiUyMGtlcmF0aW58ZW58MXx8fHwxNzYxNDI4MzkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1739979903440-d0aae44cdf16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbW9vdGglMjBoYWlyJTIwdHJlYXRtZW50fGVufDF8fHx8MTc2MTQzOTIwMHww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1758315949140-1972ace0644e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9zc3klMjBzdHJhaWdodCUyMGhhaXJ8ZW58MXx8fHwxNzYxNDM5MjAyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1653241625670-3a1e643464ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlueSUyMGhhaXIlMjBtb2RlbHxlbnwxfHx8fDE3NjE0MzkyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1760038548850-bfc356d88b12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwY2FyZSUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NjE0MzkyMDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1717160675489-7779f2c91999?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxvbiUyMGhhaXIlMjBjYXJlfGVufDF8fHx8MTc2MTQzOTIwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1532171875345-9712d9d4f65a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBsb25nJTIwaGFpcnxlbnwxfHx8fDE3NjE0MzkyMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1711454867327-4990937f8f18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhaWdodCUyMGhhaXIlMjBzdHlsZXxlbnwxfHx8fDE3NjE0MzkyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1759142235060-3191ee596c81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbGVlayUyMGhhaXIlMjBzYWxvbnxlbnwxfHx8fDE3NjE0MzkyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1565463281984-f5a778c6ca80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBlcmZlY3QlMjBoYWlyfGVufDF8fHx8MTc2MTQzOTIwNnww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1733729765058-0e5fa3af47c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwYmVhdXR5JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYxNDM5MjA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1647462741268-e5724e5886c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyZHJlc3NlciUyMHN0eWxpbmd8ZW58MXx8fHwxNzYxNDM5MjA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
];

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

export function HairLaminationPage() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const squares = createGallerySquares();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <SEO 
        title="Hair Lamination - Vitorias Beauty | Tratamento Capilar Lisboa"
        description="Hair Lamination em Lisboa. Tratamento capilar que alisa e brilha o cabelo sem danificar. Resultados duradouros e cabelo saudável."
        keywords="hair lamination Lisboa, laminação cabelo Lisboa, tratamento capilar Lisboa"
        url="https://vitoriasbeauty.pt/#/hair-lamination"
      />
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
              Hair Lamination
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Tratamento de laminação capilar para cabelos brilhantes e saudáveis. Resultados profissionais que duram semanas.
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
                      alt={`Hair Lamination ${index * 2 + 1}`}
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
                      alt={`Hair Lamination ${index * 2 + 2}`}
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
                onClick={() => openExternalUrl('https://you.zappysoftware.com/vitoriasbeauty')}
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
