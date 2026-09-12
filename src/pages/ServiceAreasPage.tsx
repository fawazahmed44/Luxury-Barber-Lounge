import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICE_AREAS, BUSINESS_INFO } from '../data/barberData';
import { PageHeader } from '../components/PageHeader';
import { MapPin, Scissors, ArrowRight, Clock, Phone, Sparkles } from 'lucide-react';

export const ServiceAreasPage: React.FC = () => {
  const { areaSlug } = useParams<{ areaSlug?: string }>();

  const currentArea = areaSlug ? SERVICE_AREAS.find((a) => a.slug === areaSlug) : null;

  if (currentArea) {
    return (
      <div className="min-h-screen bg-[#0c0d0e] text-[#f4f2ee]">
        <PageHeader
          badge={`San Diego Service Area • ${currentArea.region}`}
          title={`${currentArea.name} Men's Grooming`}
          subtitle={currentArea.description}
          breadcrumbs={[
            { label: 'Service Areas', href: '/areas' },
            { label: currentArea.name }
          ]}
          action={{ label: 'Book in Studio', to: '/book' }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
          <div className="bg-[#121316] border border-[#23252c] p-8 sm:p-12 rounded-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
                Barbershop Accessibility
              </span>
              <h2 className="font-serif text-3xl font-medium text-white">
                Serving {currentArea.name} with Distinction
              </h2>
              <p className="text-sm text-[#9296a2] leading-relaxed">
                Whether you live or work in {currentArea.name}, Luxury Barber Lounge at 1401 Sixth Ave is your dedicated sanctuary for razor fades, hot towel shaves, and custom haircutting.
              </p>
            </div>

            <div className="pt-4 border-t border-[#1f2127] space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#c5a880] block font-semibold">
                Neighborhood Highlights
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {currentArea.highlights.map((hl, i) => (
                  <div key={i} className="p-4 bg-[#17191e] border border-[#262932] rounded text-xs text-[#b0b4c0]">
                    {hl}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <Link
                to="/book"
                className="px-8 py-3.5 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0c0d0e] font-semibold text-xs tracking-widest uppercase transition-all shadow-md text-center"
              >
                Schedule Appointment
              </Link>
              <Link
                to="/services/in-home-hair-service"
                className="px-6 py-3.5 bg-[#191b20] hover:bg-[#23252d] text-white border border-[#31343f] text-xs tracking-widest uppercase font-medium transition-all text-center"
              >
                Private In-Home Service ($325)
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // All service areas list
  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#f4f2ee]">
      <PageHeader
        badge="San Diego Neighborhoods"
        title="Service Areas & Coverage"
        subtitle="Conveniently situated in Downtown San Diego, serving discerning clients from across the city's premier neighborhoods and districts."
        breadcrumbs={[{ label: 'Service Areas' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_AREAS.map((area) => (
            <Link
              key={area.slug}
              to={`/areas/${area.slug}`}
              className="p-6 bg-[#121316] border border-[#22242a] hover:border-[#c5a880] rounded-sm transition-all group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-wider text-[#c5a880] font-mono">
                  {area.region}
                </span>
                <h3 className="font-serif text-xl font-medium text-white group-hover:text-[#c5a880] transition-colors">
                  {area.name}
                </h3>
                <p className="text-xs text-[#878b96] leading-relaxed line-clamp-3">
                  {area.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#1e2025] flex items-center justify-between text-xs text-[#c5a880]">
                <span>Explore Area & Services</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
