import { BOOKING_LINKS } from '../constants/bookingLinks';

interface BookingCtasProps {
  variant?: 'primary' | 'compact';
  className?: string;
}

export function BookingCtas({ variant = 'primary', className = '' }: BookingCtasProps) {
  const isPrimary = variant === 'primary';

  return (
    <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 ${isPrimary ? 'justify-center' : 'justify-center'} ${className}`}>
      {/* Primary CTA - Zappy */}
      <a
        href={BOOKING_LINKS.zappy}
        target="_blank"
        rel="noopener noreferrer"
        className={`${
          isPrimary
            ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg shadow-pink-500/30'
            : 'bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition-all text-sm'
        } text-center font-medium`}
      >
        Agendar via Zappy
      </a>

      {/* Secondary CTAs - App Links */}
      <div className={`flex gap-2 sm:gap-3 ${isPrimary ? 'sm:flex-row' : 'flex-row'}`}>
        <a
          href={BOOKING_LINKS.ios}
          target="_blank"
          rel="noopener noreferrer"
          className={`${
            isPrimary
              ? 'border-2 border-cyan-500 text-cyan-400 px-6 py-4 rounded-full hover:bg-cyan-500/10 transition-all'
              : 'border border-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-100 transition-all text-xs'
          } text-center font-medium`}
        >
          App iOS
        </a>
        <a
          href={BOOKING_LINKS.android}
          target="_blank"
          rel="noopener noreferrer"
          className={`${
            isPrimary
              ? 'border-2 border-cyan-500 text-cyan-400 px-6 py-4 rounded-full hover:bg-cyan-500/10 transition-all'
              : 'border border-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-100 transition-all text-xs'
          } text-center font-medium`}
        >
          App Android
        </a>
      </div>
    </div>
  );
}

