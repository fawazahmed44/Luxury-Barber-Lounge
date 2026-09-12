import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, items, onClose, onSelect }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 text-[#9ea2ab] hover:text-white bg-[#1a1c21]/80 rounded-full transition-colors z-20"
        aria-label="Close fullscreen preview"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-6 p-3 text-[#9ea2ab] hover:text-white bg-[#1a1c21]/80 rounded-full transition-colors z-20 hidden sm:block"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-6 p-3 text-[#9ea2ab] hover:text-white bg-[#1a1c21]/80 rounded-full transition-colors z-20 hidden sm:block"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="max-w-5xl max-h-[85vh] flex flex-col items-center">
        <img
          src={item.imageUrl}
          alt={item.title}
          referrerPolicy="no-referrer"
          className="max-h-[75vh] w-auto max-w-full object-contain rounded-sm shadow-2xl border border-[#26282e]"
        />
        <div className="mt-4 text-center">
          <p className="font-serif text-lg text-white font-medium">{item.title}</p>
          <span className="text-xs uppercase tracking-widest text-[#c5a880] mt-1 inline-block">
            {item.category} • Luxury Barber Lounge
          </span>
        </div>
      </div>
    </div>
  );
};
