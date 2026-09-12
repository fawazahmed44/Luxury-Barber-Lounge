import React from 'react';
import { Link } from 'react-router-dom';
import { BARBERS, BUSINESS_INFO } from '../data/barberData';
import { PageHeader } from '../components/PageHeader';
import { Scissors, Calendar, Award, CheckCircle, ArrowRight } from 'lucide-react';

export const BarbersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#f4f2ee]">
      <PageHeader
        badge="Our Craftsmen"
        title="Meet the Barbers"
        subtitle="Dedicated professionals committed to precision, consistency, and elevated grooming hospitality at 1401 Sixth Ave."
        breadcrumbs={[{ label: 'Barbers' }]}
        action={{ label: 'Become a Barber', to: '/become-a-barber' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Core team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BARBERS.map((barber) => (
            <div
              key={barber.id}
              className="bg-[#121316] border border-[#22242a] hover:border-[#373a44] p-6 sm:p-8 rounded-sm transition-all flex flex-col justify-between group"
            >
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <div className="relative">
                    <img
                      src={barber.avatarImage || barber.image}
                      alt={barber.name}
                      referrerPolicy="no-referrer"
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-[#2c2f37] group-hover:border-[#c5a880] transition-colors shadow-lg bg-[#1a1c22]"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-[#0c0d0e] p-1.5 rounded-full border border-[#282b33]">
                      <Scissors className="w-3.5 h-3.5 text-[#c5a880]" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white group-hover:text-[#c5a880] transition-colors">
                        {barber.name}
                      </h3>
                      {(barber.id === 'antony' || barber.id === 'anthony') && (
                        <span className="text-[10px] uppercase tracking-wider bg-[#1d1f25] text-[#c5a880] px-2 py-0.5 rounded border border-[#333742]">
                          Owner
                        </span>
                      )}
                    </div>
                    <p className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold">
                      {barber.role}
                    </p>
                    <p className="text-[11px] text-[#7d818a]">
                      1401 Sixth Ave, Downtown San Diego
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#9599a5] leading-relaxed">
                  {barber.experienceDescription}
                </p>

                {barber.specialties && (
                  <div className="space-y-2 pt-4 border-t border-[#1e2025]">
                    <span className="text-[10px] uppercase tracking-widest text-[#72757f] block">
                      Core Disciplines:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {barber.specialties.map((spec, i) => (
                        <span
                          key={i}
                          className="text-[11px] px-2.5 py-1 bg-[#17191e] border border-[#272930] rounded-sm text-[#a6abb7]"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-6 mt-6 border-t border-[#1e2025] flex items-center justify-between">
                <span className="text-xs text-[#72757f]">Available for appointments</span>
                <Link
                  to={`/book?barber=${barber.id}`}
                  className="px-5 py-2.5 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0c0d0e] font-semibold text-xs tracking-wider uppercase transition-colors flex items-center gap-2"
                >
                  Book with {barber.name} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Join the team callout */}
        <div className="p-8 sm:p-12 bg-[#121417] border border-[#252830] rounded-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
              Join Our Downtown Team
            </span>
            <h2 className="font-serif text-3xl font-medium text-white">
              Are You a Talented & Friendly Barber?
            </h2>
            <p className="text-xs text-[#8e929d] leading-relaxed">
              We provide a supportive, respectful, and professional atmosphere in Downtown San Diego. Licensed barbers looking for career growth and loyal clientele are invited to apply.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/hiring"
              className="px-6 py-3.5 bg-[#1a1c22] hover:bg-[#23262f] text-white border border-[#313540] text-xs uppercase tracking-widest font-medium transition-colors text-center"
            >
              Hiring Overview
            </Link>
            <Link
              to="/become-a-barber"
              className="px-6 py-3.5 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0c0d0e] text-xs uppercase tracking-widest font-semibold transition-colors text-center"
            >
              Barber Application
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
