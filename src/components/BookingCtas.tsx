import { BOOKING_LINKS } from '../constants/bookingLinks';

interface BookingCtasProps {
  variant?: 'primary' | 'compact';
  className?: string;
}

export function BookingCtas({ variant = 'primary', className = '' }: BookingCtasProps) {
  const isPrimary = variant === 'primary';

  return (
    <div className={className}>
      {/* Primary CTA - Zappy */}
      <a
        href={BOOKING_LINKS.zappy}
        target="_blank"
        rel="noopener noreferrer"
        className={`${
          isPrimary
            ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg shadow-pink-500/30'
            : 'bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition-all text-sm'
        } text-center font-medium inline-block whitespace-nowrap`}
      >
        Agendar Agora
      </a>
    </div>
  );
}

