import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    name: 'Ana Silva',
    image: 'https://images.unsplash.com/photo-1619369230168-7ca073c6904e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMHdvbWFuJTIwaGFwcHl8ZW58MXx8fHwxNzYwOTA4NjMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: 'Experiência incrível! A equipa é super profissional e o ambiente é maravilhoso. Saio sempre de lá a sentir-me renovada e linda.',
    service: 'Cabeleireiro',
    rating: 5,
  },
  {
    name: 'Maria Santos',
    image: 'https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwd29tYW58ZW58MXx8fHwxNzYwOTA4NjMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: 'O Vitoria\'s Beauty é o meu refúgio de beleza. Os tratamentos faciais são divinos e a maquilhadora é uma verdadeira artista!',
    service: 'Estética Facial',
    rating: 5,
  },
  {
    name: 'Joana Pereira',
    image: 'https://images.unsplash.com/photo-1659658380078-1ef23d838ba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA3OTg4OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: 'Atendimento 5 estrelas! Adoro a atenção aos detalhes e o cuidado que têm com cada cliente. Recomendo vivamente!',
    service: 'Manicure & Pedicure',
    rating: 5,
  },
  {
    name: 'Sofia Costa',
    image: 'https://images.unsplash.com/photo-1619369230168-7ca073c6904e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMHdvbWFuJTIwaGFwcHl8ZW58MXx8fHwxNzYwOTA4NjMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: 'Profissionalismo de excelência! Cada visita é uma experiência única. Adoro o resultado final sempre perfeito.',
    service: 'Coloração',
    rating: 5,
  },
  {
    name: 'Carolina Alves',
    image: 'https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwd29tYW58ZW58MXx8fHwxNzYwOTA4NjMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: 'Simplesmente perfeito! O atendimento personalizado e a qualidade dos serviços fazem toda a diferença.',
    service: 'Penteados',
    rating: 5,
  },
  {
    name: 'Beatriz Martins',
    image: 'https://images.unsplash.com/photo-1659658380078-1ef23d838ba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA3OTg4OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: 'Um espaço maravilhoso com profissionais incríveis. Sempre saio feliz e satisfeita com os resultados!',
    service: 'Madeixas',
    rating: 5,
  },
];

// Componente individual de card de depoimento com navegação própria
function TestimonialCard({ testimonialGroup }: { testimonialGroup: typeof testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialGroup.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialGroup.length) % testimonialGroup.length);
  };

  const current = testimonialGroup[currentIndex];

  return (
    <div className="relative bg-gray-800/50 backdrop-blur rounded-2xl p-8 shadow-xl border border-gray-700 hover:border-pink-500/50 hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-300">
      {/* Navigation Arrows */}
      <button
        onClick={prevTestimonial}
        className="absolute -left-4 top-1/2 -translate-y-1/2 bg-pink-500/80 hover:bg-pink-500 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 z-10"
        aria-label="Depoimento anterior"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <button
        onClick={nextTestimonial}
        className="absolute -right-4 top-1/2 -translate-y-1/2 bg-pink-500/80 hover:bg-pink-500 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 z-10"
        aria-label="Próximo depoimento"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(current.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-pink-500 text-pink-500" />
        ))}
      </div>

      {/* Testimonial text */}
      <p className="text-gray-300 mb-6 italic min-h-[120px]">
        "{current.text}"
      </p>

      {/* Client info */}
      <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-pink-500/30">
          <ImageWithFallback
            src={current.image}
            alt={current.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="text-white">{current.name}</div>
          <div className="text-gray-400 text-sm">{current.service}</div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-1.5 mt-4">
        {testimonialGroup.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-pink-500' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  // Dividir testemunhos em 3 grupos
  const group1 = [testimonials[0], testimonials[3]];
  const group2 = [testimonials[1], testimonials[4]];
  const group3 = [testimonials[2], testimonials[5]];

  return (
    <section className="py-24 bg-gray-700 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 border border-pink-500/30 rounded-full px-6 py-2">
            <span className="text-white">
              Testemunhos
            </span>
          </div>
          <h2 className="mb-4 text-white">
            O Que Dizem as Nossas Clientes
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A satisfação das nossas clientes é a nossa maior recompensa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          <TestimonialCard testimonialGroup={group1} />
          <TestimonialCard testimonialGroup={group2} />
          <TestimonialCard testimonialGroup={group3} />
        </div>
      </div>
    </section>
  );
}
