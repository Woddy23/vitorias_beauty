import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useRef, useEffect } from 'react';
import { BookingCtas } from './BookingCtas';
import parqueImage1 from 'figma:asset/926e634aa304cebd6190799c1b1d573197ad12a2.png';
import parqueImage2 from 'figma:asset/1783e45c444c413fae233e978acb83f156669095.png';
import parqueImage3 from 'figma:asset/4460826bb478d41ea8be1411b8dc4ee1a80fac52.png';
import parqueImage4 from 'figma:asset/8d1fb1fa7c1b1ca4e3165c52360f9150025e8cc1.png';
import parqueImage5 from 'figma:asset/c65c929d156fb0a733b6f9dc8040690763dc805b.png';
import portelaImage1 from 'figma:asset/8347649355a4c78f1659e3509412161ac918324c.png';
import portelaImage2 from 'figma:asset/e531185df9d11ce893e16f1d700db419e12b4b57.png';
import portelaImage3 from 'figma:asset/ea20431636c9a8bb4f832408be4ad03b57ed5f74.png';
import portelaImage4 from 'figma:asset/de719a540ef912afad95d339ed646605f0fc321a.png';
import portelaImage5 from 'figma:asset/daec17fd2857fd657a346a524a65f195723d2c2b.png';
import saldanhaImage1 from 'figma:asset/82fd6363bff9ad8c75bd45d6e71270796960a4de.png';
import saldanhaImage2 from 'figma:asset/d88b2e9002bb603bbede9c5262a5926122e542f1.png';
import saldanhaImage3 from 'figma:asset/90110b568b8d214e335f5dda90e51fdf59dfaceb.png';
import saldanhaImage4 from 'figma:asset/71c9861663f08ac4e45f11531fb3004f9414a7d7.png';
import saldanhaImage5 from 'figma:asset/490bb8a330540fef15ebc3903bc6297a25834f31.png';

function ImageCarousel({ images, name }: { images: string[]; name: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
    if (touchEndX.current - touchStartX.current > 50) {
      // Swipe right
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    touchStartX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) {
      touchEndX.current = e.clientX;
    }
  };

  const handleMouseUp = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
    if (touchEndX.current - touchStartX.current > 50) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <div className="relative h-56 overflow-hidden flex-shrink-0">
      <div
        className="relative h-full cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ImageWithFallback
              src={image}
              alt={`${name} - Imagem ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white w-6'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export function ContactSection() {
  const locations = [
    {
      name: 'PARQUE DAS NAÇÕES',
      images: [
        parqueImage1,
        parqueImage2,
        parqueImage3,
        parqueImage4,
        parqueImage5,
      ],
      address: 'Rua Ilha dos Amores nº 55A',
      address2: '1990-371 Parque das Nações',
      hours: 'Abertos todos os dias das 08h00 às 20h00',
      phone: '218 958 421',
      phoneLabel: '(chamada para rede fixa nacional)',
      mobile: '936 857 289',
      mobileLabel: '(chamada para rede móvel nacional)',
      email: 'vitoriasbeautyparquenacoes@gmail.com',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.3827739456744!2d-9.097135623447456!3d38.76829995638871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4c2c3b8a0b5f9d6e!2zMzjCsDQ2JzA1LjkiTiA5wrAwNSc0MS43Ilc!5e0!3m2!1spt-PT!2spt!4v1697648890123!5m2!1spt-PT!2spt',
    },
    {
      name: 'PORTELA LRS',
      images: [
        portelaImage1,
        portelaImage2,
        portelaImage3,
        portelaImage4,
        portelaImage5,
      ],
      address: 'Rot. Nuno Rodrigues Santos, 2',
      address2: 'Centro Com. Portela, lojas 38 e 39 – 1º andar',
      address3: '2685-223 Portela LRS',
      hours: 'Aberto todos os dias das 08h00 às 20h00',
      phone: '219 431 654',
      phoneLabel: '(chamada para rede fixa nacional)',
      mobile: '924 470 840',
      mobileLabel: '(chamada para rede móvel nacional)',
      email: 'vitoriasbeautyportela@gmail.com',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.6543289876543!2d-9.113456784375!3d38.78234567891234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5d8e2f7a9b4c3e1d!2zMzjCsDQ2JzU2LjQiTiA5wrAwNic0OC41Ilc!5e0!3m2!1spt-PT!2spt!4v1697649123456!5m2!1spt-PT!2spt',
    },
    {
      name: 'SALDANHA',
      images: [
        saldanhaImage1,
        saldanhaImage2,
        saldanhaImage3,
        saldanhaImage4,
        saldanhaImage5,
      ],
      address: 'Av. Defensores Chaves nº 3A',
      address2: '1000-109 Lisboa',
      closedNote: 'Agosto encerrado aos Domingos',
      hours: 'Aberto todos os dias das 08h00 às 20h00',
      phone: '210 987 604',
      phoneLabel: '(chamada para rede fixa nacional)',
      mobile: '910 063 828',
      mobileLabel: '(chamada para rede móvel nacional)',
      email: 'vitoriasbeautysaldanha@gmail.com',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.723024994716!2d-9.147156!3d38.735588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdaa7f2e39e6b5a5e!2zMzjCsDQ0JzA4LjEiTiA5wrAwOCc0OS44Ilc!5e0!3m2!1spt-PT!2spt!4v1697648234567!5m2!1spt-PT!2spt',
    },
  ];

  return (
    <section id="contato" className="py-24 bg-gray-700 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-pink-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/10 to-pink-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 border border-pink-500/30 rounded-full px-6 py-2">
            <span className="text-white">
              Contacto
            </span>
          </div>
          <h2 className="mb-4 text-white">
            Vamos Começar a Sua Transformação
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Estamos ansiosos para recebê-la. Entre em contacto e faça a sua marcação.
          </p>
          <BookingCtas variant="compact" />
        </div>

        {/* Location Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {locations.map((location, index) => (
            <div
              key={index}
              className="group bg-gray-200 rounded-2xl overflow-hidden shadow-2xl hover:shadow-pink-500/40 hover:shadow-2xl transition-all duration-500 flex flex-col hover:-translate-y-2 hover:scale-[1.02] border-2 border-transparent hover:border-pink-500/50"
            >
              {/* Location Images Carousel */}
              <ImageCarousel images={location.images} name={location.name} />

              {/* Location Info */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-gray-900 mb-1 text-center">{location.name}</h3>
                <div className="w-full h-1 bg-gradient-to-r from-pink-500 to-pink-600 mb-6"></div>

                {/* Address */}
                <div className="text-center mb-4 text-gray-700 min-h-[80px]">
                  <p>{location.address}</p>
                  <p>{location.address2}</p>
                  {location.address3 && <p>{location.address3}</p>}
                  {location.closedNote && (
                    <p className="text-pink-500 mt-1">{location.closedNote}</p>
                  )}
                </div>

                {/* Hours */}
                <div className="text-center mb-4">
                  <p className="text-gray-800">{location.hours}</p>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 mb-4 text-sm">
                  <div className="text-gray-700">
                    <span className="text-gray-900">Tlm:</span> {location.phone}{' '}
                    <span className="text-gray-500 text-xs">{location.phoneLabel}</span>
                  </div>
                  <div className="text-gray-700">
                    <span className="text-gray-900">Tlm:</span> {location.mobile}{' '}
                    <span className="text-gray-500 text-xs">{location.mobileLabel}</span>
                  </div>
                  <div className="text-gray-700 break-words">
                    <span className="text-gray-900">E-mail:</span> {location.email}
                  </div>
                </div>

                {/* Google Maps */}
                <div className="rounded-lg overflow-hidden h-48 border-2 border-gray-200 mt-auto">
                  <iframe
                    src={location.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa de ${location.name}`}
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
