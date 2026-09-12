import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GALLERY_ITEMS } from '../data/barberData';
import { GalleryItem } from '../types';
import { PageHeader } from '../components/PageHeader';
import { Lightbox } from '../components/Lightbox';
import { Maximize2, Sparkles, Scissors, ArrowRight } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((i) => i.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#f4f2ee]">
      <PageHeader
        badge="Visual Portfolio"
        title="Studio Gallery"
        subtitle="Exploring the craftsmanship, precision fades, razor finishes, and redesigned interior & exterior lounge environment in Downtown San Diego."
        breadcrumbs={[{ label: 'Gallery' }]}
        action={{ label: 'Book Appointment', to: '/book' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Studio Makeover History Note as factual reference */}
        <div className="p-6 bg-[#131519] border border-[#242730] rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#959aa6]">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#c5a880] flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-white font-medium block text-sm">
                Studio Makeover & Furniture Enhancement
              </strong>
              <span>
                Luxury Barber Lounge recently underwent a comprehensive transformation—including upgraded custom interior seating, exterior refinements, precision barber stations, and atmospheric lighting designed for maximum guest comfort.
              </span>
            </div>
          </div>
          <Link
            to="/book"
            className="px-5 py-2.5 bg-[#c5a880] text-[#0c0d0e] font-semibold uppercase text-[11px] tracking-wider whitespace-nowrap"
          >
            Experience The Lounge
          </Link>
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {[
            { id: 'all', label: 'All Works' },
            { id: 'cuts', label: 'Fades & Cuts' },
            { id: 'craft', label: 'Beards & Styling' },
            { id: 'shave', label: 'Hot Towel & Shaves' },
            { id: 'atmosphere', label: 'Lounge & Atmosphere' }
          ].map((cat) => {
            const count = cat.id === 'all'
              ? GALLERY_ITEMS.length
              : GALLERY_ITEMS.filter((i) => i.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-widest transition-all rounded-sm flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? 'bg-[#c5a880] text-[#0c0d0e] font-semibold shadow'
                    : 'bg-[#14151a] text-[#8e929e] hover:text-white border border-[#22242a] hover:border-[#383b45]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded ${
                  activeCategory === cat.id ? 'bg-[#0c0d0e]/20 text-[#0c0d0e]' : 'bg-[#1c1e26] text-[#717582]'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group relative h-80 sm:h-96 bg-[#14151a] border border-[#202228] hover:border-[#c5a880]/60 overflow-hidden rounded-sm cursor-pointer transition-all shadow-lg"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] uppercase tracking-widest text-[#c5a880] font-semibold">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-white font-medium mt-1">
                  {item.title}
                </h3>
                <div className="mt-3 flex items-center gap-2 text-xs text-[#9ea2ae]">
                  <Maximize2 className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>Click to view full photo</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="pt-12 text-center space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white">
            Ready for your precision cut?
          </h3>
          <p className="text-xs text-[#8a8e99] max-w-md mx-auto">
            Book online in less than two minutes. Choose your service, preferred barber, and appointment time.
          </p>
          <div className="pt-2">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0c0d0e] font-semibold text-xs tracking-widest uppercase transition-all shadow-md"
            >
              Book an Appointment <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <Lightbox
        item={activeLightboxItem}
        items={filteredItems}
        onClose={() => setActiveLightboxItem(null)}
        onSelect={(item) => setActiveLightboxItem(item)}
      />
    </div>
  );
};
