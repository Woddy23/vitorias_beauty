import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowLeft, X } from 'lucide-react';
import alisamentoImg1 from 'figma:asset/d5ee53bc9340d2c8d13ada3e1e4d633f7421a661.png';
import alisamentoImg2 from 'figma:asset/0553fdc2135dcbb97b6830843c1c52bd5b730e5a.png';
import alisamentoImg3 from 'figma:asset/dbb57a9067ca1eb10aeb89be2d2e29626e066bc1.png';

// 12 images for the gallery (repeating the 3 real photos)
const galleryImages = [
  alisamentoImg1,
  alisamentoImg2,
  alisamentoImg3,
  alisamentoImg1,
  alisamentoImg2,
  alisamentoImg3,
  alisamentoImg1,
  alisamentoImg2,
  alisamentoImg3,
  alisamentoImg1,
  alisamentoImg2,
  alisamentoImg3,
];

export function AlisamentoPage() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Back Button */}
          <button
            onClick={() => navigate('/galeria')}
            className="flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Voltar à Galeria</span>
          </button>

          {/* Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-cyan-500/10 border border-pink-500/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500"></div>
              <span className="text-sm text-gray-300">Portfolio</span>
            </div>
            <h1 className="text-gray-100 mb-4">
              Alisamento
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Veja alguns dos nossos trabalhos de alisamento capilar. Transformações incríveis com resultados duradouros.
            </p>
          </div>

          {/* Gallery Grid - 12 squares */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 cursor-pointer"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
                onClick={() => setSelectedImage(image)}
              >
                {/* Single Image */}
                <div className="relative aspect-square">
                  <img
                    src={image}
                    alt={`Alisamento ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    index % 2 === 0 ? 'from-pink-500/0 to-pink-500/20' : 'from-cyan-500/0 to-cyan-500/20'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  index % 2 === 0 ? 'border-pink-500' : 'border-cyan-500'
                }`}></div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
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

      {/* Fullscreen Image Modal */}
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
            <img
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
