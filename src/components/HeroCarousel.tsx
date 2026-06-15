import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { CAROUSEL_PROMOS } from '../data';

interface HeroCarouselProps {
  onCtaClick: (department: string) => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onCtaClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CAROUSEL_PROMOS.length);
    }, 6000); // 6 seconds auto-cycle

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + CAROUSEL_PROMOS.length) % CAROUSEL_PROMOS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % CAROUSEL_PROMOS.length);
  };

  return (
    <div className="relative w-full overflow-hidden h-[240px] md:h-[350px] lg:h-[440px] bg-zinc-900 group">
      {/* Promo banner item */}
      {CAROUSEL_PROMOS.map((promo, idx) => {
        const isActive = idx === activeIndex;
        return (
          <div
            key={promo.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Dark tint overlay, then image */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-black/80 z-10" />
            <img
              src={promo.imageUrl}
              alt={promo.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />

            {/* Banner Floating Content Card */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-6 pr-6 md:pl-16 md:pr-12 max-w-2xl z-20 text-left">
              <div className="space-y-3.5">
                {/* Visual Deal Day Badge */}
                <div className="inline-flex items-center space-x-1.5 bg-red-600 text-white font-black uppercase text-[10px] tracking-widest px-2 py-0.5 rounded-sm shadow">
                  <Sparkles className="h-3 w-3 fill-white animate-pulse" />
                  <span>Limited Time Deal</span>
                </div>

                <h2 className="text-2xl md:text-3xl lg:text-4.5xl font-black tracking-tight leading-none text-white drop-shadow">
                  {promo.title}
                </h2>

                <p className="text-xs md:text-sm lg:text-base font-medium text-stone-200 leading-relaxed max-w-lg drop-shadow">
                  {promo.tagline}
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => onCtaClick(promo.department)}
                    id={`promo-cta-${promo.id}`}
                    className="bg-amber-400 hover:bg-amber-500 text-zinc-950 font-bold px-5 py-2.5 rounded-sm shadow-md transition text-xs tracking-wider uppercase cursor-pointer hover:shadow-lg active:scale-95"
                  >
                    {promo.ctaText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Manual Arrow Controls, hidden by default, visible on hover */}
      <button
        onClick={handlePrev}
        id="carousel-prev-btn"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2 rounded-md hover:ring-2 hover:ring-amber-500 transition duration-150 z-30 cursor-pointer hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100"
        aria-label="Previous promo banner"
      >
        <ChevronLeft className="h-6 w-6 stroke-[3]" />
      </button>

      <button
        onClick={handleNext}
        id="carousel-next-btn"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2 rounded-md hover:ring-2 hover:ring-amber-500 transition duration-150 z-30 cursor-pointer hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100"
        aria-label="Next promo banner"
      >
        <ChevronRight className="h-6 w-6 stroke-[3]" />
      </button>

      {/* Carousel Bullets Indicators for Visual Integrity */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex space-x-2 z-35">
        {CAROUSEL_PROMOS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === activeIndex ? 'w-8 bg-amber-400 shadow-md' : 'w-2.5 bg-white/40 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Critical Amazon-Style Vignette Fading Bottom Edge. It blends the hero slider perfectly with the bento cards below */}
      <div className="absolute bottom-0 left-0 w-full h-16 md:h-28 bg-gradient-to-t from-stone-100 dark:from-zinc-950 to-transparent z-30 pointer-events-none transition-colors duration-200" />
    </div>
  );
};
