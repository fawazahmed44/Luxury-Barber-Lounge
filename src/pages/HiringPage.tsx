import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { Award, Users, HeartHandshake, TrendingUp, ShieldCheck, ArrowRight, Check } from 'lucide-react';

export const HiringPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#f4f2ee]">
      <PageHeader
        badge="Careers & Culture"
        title="We Are Hiring"
        subtitle="Luxury Barber Lounge is expanding our elite roster in Downtown San Diego. Seeking passionate, licensed barber talent committed to craft, mutual respect, and client loyalty."
        breadcrumbs={[{ label: 'Careers' }]}
        action={{ label: 'Apply Online', to: '/become-a-barber' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Core Philosophy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
              Our Studio Culture
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-white leading-tight">
              An Elevated Environment Where Master Craftsmen Thrive
            </h2>
            <p className="text-sm text-[#9296a2] leading-relaxed">
              Located in the heart of Downtown San Diego at 1401 Sixth Ave, Luxury Barber Lounge offers a sophisticated, supportive, and professional home for licensed barbers. Led by owner Antony, we cultivate an atmosphere founded on craftsmanship, genuine mutual respect, and unhurried personalized service.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-[#14151a] border border-[#23262f] rounded-sm space-y-2">
                <ShieldCheck className="w-5 h-5 text-[#c5a880]" />
                <h3 className="font-serif text-base text-white font-medium">Respect & Professionalism</h3>
                <p className="text-xs text-[#7e828d]">
                  Zero shop drama. We hold ourselves to high ethical and professional standards for our team and clientele.
                </p>
              </div>

              <div className="p-4 bg-[#14151a] border border-[#23262f] rounded-sm space-y-2">
                <Users className="w-5 h-5 text-[#c5a880]" />
                <h3 className="font-serif text-base text-white font-medium">Experienced Team</h3>
                <p className="text-xs text-[#7e828d]">
                  Work alongside master barbers with over 15 years of chair experience, fostering daily collaborative growth.
                </p>
              </div>

              <div className="p-4 bg-[#14151a] border border-[#23262f] rounded-sm space-y-2">
                <Award className="w-5 h-5 text-[#c5a880]" />
                <h3 className="font-serif text-base text-white font-medium">Top-Tier Client Roster</h3>
                <p className="text-xs text-[#7e828d]">
                  Attracting high-value executives, downtown residents, and visitors who appreciate meticulous grooming.
                </p>
              </div>

              <div className="p-4 bg-[#14151a] border border-[#23262f] rounded-sm space-y-2">
                <TrendingUp className="w-5 h-5 text-[#c5a880]" />
                <h3 className="font-serif text-base text-white font-medium">Career Growth</h3>
                <p className="text-xs text-[#7e828d]">
                  Build sustainable, long-term personal brand equity with continuous digital bookings and referrals.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/become-a-barber"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0c0d0e] text-xs uppercase tracking-widest font-semibold transition-all shadow-md"
              >
                Join Our Team <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-sm border border-[#252831] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=85"
                alt="Barbershop Studio Atmosphere"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#121316]/95 backdrop-blur-md border border-[#252830]">
                <p className="font-serif text-lg text-white italic">
                  "We built Luxury Barber Lounge to be a sanctuary where true barbering craft is respected, rewarded, and elevated every single day."
                </p>
                <span className="text-xs uppercase tracking-wider text-[#c5a880] block mt-2">
                  — Antony, Owner & Lead Barber
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Candidate Expectations */}
        <div className="bg-[#121316] border border-[#22242a] p-8 sm:p-12 rounded-sm space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
              Who We Are Looking For
            </span>
            <h2 className="font-serif text-3xl font-medium text-white">
              Qualifications & Character
            </h2>
            <p className="text-xs text-[#898c98]">
              We evaluate candidate aptitude based on punctuality, technique, and personal integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#cfd2de]">
            <div className="flex items-start gap-3 p-4 bg-[#17181e] border border-[#272932]">
              <Check className="w-4 h-4 text-[#c5a880] flex-shrink-0 mt-0.5" />
              <span>Valid California Barber License in good standing</span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#17181e] border border-[#272932]">
              <Check className="w-4 h-4 text-[#c5a880] flex-shrink-0 mt-0.5" />
              <span>Demonstrated mastery of modern skin tapers, scissor work, and beard shaping</span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#17181e] border border-[#272932]">
              <Check className="w-4 h-4 text-[#c5a880] flex-shrink-0 mt-0.5" />
              <span>Punctual, friendly, and client-first communication ethos</span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#17181e] border border-[#272932]">
              <Check className="w-4 h-4 text-[#c5a880] flex-shrink-0 mt-0.5" />
              <span>Clean hygiene practices, sanitized workstations, and professional attire</span>
            </div>
          </div>
        </div>

        {/* Bottom application CTA */}
        <div className="text-center max-w-2xl mx-auto space-y-4 pt-8">
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white">
            Ready to Take Your Chair to the Next Level?
          </h3>
          <p className="text-xs text-[#888c97]">
            Complete our online application form with your credentials and references.
          </p>
          <div className="pt-2">
            <Link
              to="/become-a-barber"
              className="px-8 py-4 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0c0d0e] font-semibold text-xs tracking-widest uppercase transition-all shadow-md inline-block"
            >
              Fill Out Application Form
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
