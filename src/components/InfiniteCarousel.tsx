import { useEffect, useRef } from 'react';

interface InfiniteCarouselProps {
  children: React.ReactNode;
  speed?: number;
}

export function InfiniteCarousel({ children, speed = 30 }: InfiniteCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Clone the items for infinite scroll
    const scrollerContent = Array.from(scroller.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scroller.appendChild(duplicatedItem);
    });
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div
        ref={scrollerRef}
        className="flex gap-0 animate-scroll"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
