import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, ALL_MENU_PRICES } from '../data/barberData';
import { PageHeader } from '../components/PageHeader';
import { ArrowRight, Clock, Sparkles, Check, Scissors } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#f4f2ee]">
      <PageHeader
        badge="Grooming Menu & Rituals"
        title="Services & Pricing"
        subtitle="Precision grooming, tailored to you. From bespoke scissor cuts and skin fades to restorative hot towel shaves and VIP in-home appointments."
        breadcrumbs={[{ label: 'Services & Pricing' }]}
        action={{ label: 'Book Appointment', to: '/book' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Discrepancy transparent note as mandated by prompt */}
        <div className="mb-12 p-4 bg-[#14161a] border border-[#26282f] text-xs text-[#8f939e] flex items-start gap-3">
          <Sparkles className="w-4 h-4 text-[#c5a880] flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-white font-medium">Service Pricing Transparency:</strong> All rates reflect authentic Luxury Barber Lounge pricing. Note on In-Home Services: our general overview references baseline offerings from $85, while our dedicated full-concierge private in-home travel experience is $325.
          </div>
        </div>

        {/* Primary Dedicated Service Cards Grid */}
        <div className="space-y-6 mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#212329] pb-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-medium">
                Primary Experiences
              </span>
              <h2 className="font-serif text-3xl font-medium text-white mt-1">
                Signature Barber Rituals
              </h2>
            </div>
            <p className="text-xs text-[#7f838d] max-w-sm mt-2 sm:mt-0">
              Each primary service includes a consultation, razor detailing, and styling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group bg-[#121316] border border-[#22242a] hover:border-[#3d4049] transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="relative h-56 overflow-hidden bg-[#181a1f]">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-transparent opacity-80" />
                    <div className="absolute top-4 right-4 bg-[#0c0d0e]/80 backdrop-blur-md px-3 py-1 rounded-sm border border-[#26282f] text-xs font-serif text-[#c5a880] font-semibold">
                      {service.priceDisplay}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[11px] text-[#787c86] font-mono">
                      <Clock className="w-3.5 h-3.5 text-[#c5a880]" />
                      <span>{service.duration}</span>
                    </div>

                    <h3 className="font-serif text-2xl font-medium text-white group-hover:text-[#c5a880] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs text-[#8a8e98] leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>

                    <ul className="space-y-1.5 pt-2 border-t border-[#1e2025]">
                      {service.highlights.slice(0, 3).map((hl, i) => (
                        <li key={i} className="text-[11px] text-[#9fa3ae] flex items-start gap-2">
                          <Check className="w-3 h-3 text-[#c5a880] flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0 flex gap-3">
                  <Link
                    to={`/services/${service.slug}`}
                    className="flex-1 py-3 px-4 text-center bg-[#191a20] hover:bg-[#22242c] text-white text-xs uppercase tracking-wider font-medium border border-[#2a2c35] transition-colors flex items-center justify-center gap-1.5"
                  >
                    View Details <ArrowRight className="w-3 h-3" />
                  </Link>
                  <Link
                    to={`/book?service=${service.id}`}
                    className="py-3 px-4 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0c0d0e] text-xs uppercase tracking-wider font-semibold transition-colors"
                  >
                    Book
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Complete À La Carte & Package Price Board */}
        <div className="bg-[#121316] border border-[#24262c] rounded-sm p-8 sm:p-12 mb-16">
          <div className="max-w-2xl mb-10 space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
              Complete Grooming Directory
            </span>
            <h2 className="font-serif text-3xl font-medium text-white">
              Transparent Service & Package Rates
            </h2>
            <p className="text-xs text-[#8a8e98]">
              All authentic options from Luxury Barber Lounge. Click any option to explore details or book directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {ALL_MENU_PRICES.map((item, index) => (
              <Link
                key={index}
                to={item.route}
                className="flex items-baseline justify-between py-3 border-b border-[#1e2026] group hover:border-[#c5a880] transition-colors"
              >
                <div className="pr-4">
                  <span className="font-serif text-base text-[#e5e7ec] group-hover:text-[#c5a880] transition-colors">
                    {item.name}
                  </span>
                  {item.note && (
                    <span className="block text-[10px] text-[#71757f] mt-0.5">
                      {item.note}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-serif text-base text-[#c5a880] font-semibold whitespace-nowrap">
                    {item.price}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#4b4e57] group-hover:text-white transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Consultation Callout */}
        <div className="border border-[#23252b] bg-gradient-to-r from-[#121417] to-[#17191e] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl text-white font-medium">
              Require Bespoke Consultation or Event Bookings?
            </h3>
            <p className="text-xs text-[#8b8f99] max-w-xl">
              From wedding parties and corporate grooming to private in-home appointments, contact our Downtown San Diego lounge directly.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              to="/contact"
              className="px-6 py-3.5 bg-[#1f2127] hover:bg-[#282b33] text-white border border-[#353842] text-xs uppercase tracking-widest font-semibold transition-colors"
            >
              Contact Studio
            </Link>
            <Link
              to="/book"
              className="px-6 py-3.5 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0c0d0e] text-xs uppercase tracking-widest font-semibold transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
