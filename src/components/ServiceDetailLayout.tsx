import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from './PageHeader';
import { ServiceItem } from '../types';
import { Check, Clock, ShieldCheck, Sparkles, ArrowRight, Phone, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barberData';

interface ServiceDetailLayoutProps {
  service: ServiceItem;
  badge?: string;
  ritualSteps?: { step: string; title: string; description: string }[];
  accentTone?: 'default' | 'cinematic' | 'ritual';
  ctaLabel?: string;
  customCallout?: React.ReactNode;
}

export const ServiceDetailLayout: React.FC<ServiceDetailLayoutProps> = ({
  service,
  badge = 'Dedicated Grooming Service',
  ritualSteps = service.serviceJourney,
  accentTone = 'default',
  ctaLabel = 'Book This Service',
  customCallout
}) => {
  const isCinematic = accentTone === 'cinematic';

  return (
    <div className={`min-h-screen ${isCinematic ? 'bg-[#09090b]' : 'bg-[#0c0d0e]'} text-[#f4f2ee]`}>
      <PageHeader
        badge={badge}
        title={service.title}
        subtitle={service.shortDescription}
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: service.title }
        ]}
        price={service.priceDisplay}
        action={{ label: ctaLabel, to: `/book?service=${service.id}` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Discrepancy or special note */}
        {service.note && (
          <div className="p-4 bg-[#14161b] border border-[#272a33] text-xs text-[#8e93a0] flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-[#c5a880] flex-shrink-0 mt-0.5" />
            <div>{service.note}</div>
          </div>
        )}

        {/* Hero split section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
                About The Experience
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-white leading-tight">
                Crafted With Architectural Precision
              </h2>
              <p className="text-sm text-[#9498a4] leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            {/* Inclusions list */}
            <div className="space-y-3 pt-4 border-t border-[#1f2127]">
              <h3 className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold">
                What This Service Includes
              </h3>
              <ul className="space-y-2.5">
                {service.highlights.map((hl, idx) => (
                  <li key={idx} className="text-xs text-[#cfd3dd] flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#c5a880] flex-shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {customCallout && (
              <div className="pt-2">{customCallout}</div>
            )}

            <div className="pt-6 flex flex-wrap items-center gap-4">
              <Link
                to={`/book?service=${service.id}`}
                className="px-7 py-4 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0c0d0e] font-semibold text-xs tracking-widest uppercase transition-all shadow-md"
              >
                {ctaLabel}
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-6 py-4 bg-[#181a1f] hover:bg-[#20232a] text-[#cfd3dd] border border-[#2d3038] text-xs tracking-widest uppercase transition-all flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                Concierge Questions
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-sm border border-[#26282f] shadow-2xl group">
              <img
                src={service.heroImage}
                alt={service.title}
                className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#121316]/90 backdrop-blur-md border border-[#2b2d35] flex justify-between items-center">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#797d88] block">
                    Duration & Rate
                  </span>
                  <span className="font-serif text-lg text-white font-medium">
                    {service.duration} Session
                  </span>
                </div>
                <span className="font-serif text-2xl font-bold text-[#c5a880]">
                  {service.priceDisplay}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Service Journey Section */}
        {ritualSteps && ritualSteps.length > 0 && (
          <div className="space-y-10 pt-10 border-t border-[#1f2127]">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
                The Service Journey
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium">
                Ritual Architecture
              </h2>
              <p className="text-xs text-[#8a8e98]">
                Every movement is measured, deliberate, and designed to restore balance and confidence.
              </p>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-${Math.min(ritualSteps.length, 5)} gap-4`}>
              {ritualSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#131418] border border-[#22242a] hover:border-[#353842] rounded-sm space-y-3 transition-colors relative"
                >
                  <span className="font-serif text-3xl font-light text-[#c5a880]/50 block">
                    {step.step}
                  </span>
                  <h3 className="font-serif text-lg font-medium text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#8a8d97] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Booking Guarantee */}
        <div className="bg-[#121317] border border-[#23252c] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-2xl text-white font-medium">
              Ready for elevated precision?
            </h3>
            <p className="text-xs text-[#858994]">
              Appointments available 7 AM – 9 PM daily at 1401 Sixth Ave, Downtown San Diego.
            </p>
          </div>
          <Link
            to={`/book?service=${service.id}`}
            className="px-8 py-4 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0c0d0e] font-semibold text-xs tracking-widest uppercase transition-all shadow-md flex items-center gap-2 whitespace-nowrap"
          >
            {ctaLabel} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
