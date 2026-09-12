import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO, BARBERS } from '../data/barberData';
import { PageHeader } from '../components/PageHeader';
import { MapPin, Phone, Mail, Clock, Scissors, Shield, Sparkles, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#f4f2ee]">
      <PageHeader
        badge="Our Sanctuary & Ethos"
        title="About Luxury Barber Lounge"
        subtitle="San Diego's premier modern barbershop where precision fades, tailored beard work, and restorative grooming rituals meet unhurried hospitality."
        breadcrumbs={[{ label: 'About' }]}
        action={{ label: 'Book an Appointment', to: '/book' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {/* Core Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
              The Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-white leading-tight">
              Grooming as Both Appearance & Confidence
            </h2>
            <p className="text-sm text-[#9498a5] leading-relaxed">
              Luxury Barber Lounge was created in Downtown San Diego to provide men with an elevated grooming experience that transcends the transactional quick-cut shop. We believe that when a man looks exceptionally sharp, his demeanor, focus, and confidence follow.
            </p>
            <p className="text-sm text-[#9498a5] leading-relaxed">
              Every appointment at 1401 Sixth Ave is personalized to the individual. Our barbers take the time to evaluate hair growth directions, scalp topography, and facial features—harmonizing precision skin fades, beard sculpting, and straight razor work into a cohesive, timeless aesthetic.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-[#c5a880]">
              <span className="px-3 py-1.5 bg-[#17191e] border border-[#272a33] rounded">
                Downtown San Diego
              </span>
              <span className="px-3 py-1.5 bg-[#17191e] border border-[#272a33] rounded">
                Open Daily 7 AM – 9 PM
              </span>
              <span className="px-3 py-1.5 bg-[#17191e] border border-[#272a33] rounded">
                Experienced Barbers
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-sm overflow-hidden border border-[#262931] shadow-2xl">
              <img
                src="/images/gallery/studioInterior_24806.jpg"
                alt="Luxury Barber Lounge Interior & Stations"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#121316]/95 backdrop-blur-md border border-[#242730]">
                <span className="text-[10px] uppercase tracking-widest text-[#c5a880] block">
                  Studio Location
                </span>
                <p className="font-serif text-xl text-white font-medium mt-1">
                  1401 Sixth Ave, San Diego, CA 92101
                </p>
                <p className="text-xs text-[#80848f] mt-1">
                  Nestled conveniently near Cortez Hill, Gaslamp Quarter, and East Village.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars of Precision */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
              The Standard
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium">
              What Defines Our Lounge
            </h2>
            <p className="text-xs text-[#878b97]">
              Craftsmanship, comfort, and uncompromising attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-[#121316] border border-[#22242a] hover:border-[#353842] rounded-sm space-y-4 transition-colors">
              <div className="w-10 h-10 rounded-sm bg-[#1a1c22] border border-[#2c2f37] flex items-center justify-center text-[#c5a880]">
                <Scissors className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-white">
                Personalized Grooming
              </h3>
              <p className="text-xs text-[#8a8e99] leading-relaxed">
                No cookie-cutter haircuts. Every session begins with consultation to establish optimal fade heights, scissor texture, and beard boundary definition tailored specifically to your lifestyle.
              </p>
            </div>

            <div className="p-8 bg-[#121316] border border-[#22242a] hover:border-[#353842] rounded-sm space-y-4 transition-colors">
              <div className="w-10 h-10 rounded-sm bg-[#1a1c22] border border-[#2c2f37] flex items-center justify-center text-[#c5a880]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-white">
                Sophisticated Atmosphere
              </h3>
              <p className="text-xs text-[#8a8e99] leading-relaxed">
                Featuring an extensive studio makeover with high-end furniture, curated lighting, relaxing music, and complimentary beverages, our lounge serves as a welcome retreat in Downtown San Diego.
              </p>
            </div>

            <div className="p-8 bg-[#121316] border border-[#22242a] hover:border-[#353842] rounded-sm space-y-4 transition-colors">
              <div className="w-10 h-10 rounded-sm bg-[#1a1c22] border border-[#2c2f37] flex items-center justify-center text-[#c5a880]">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-white">
                Experienced Barbers
              </h3>
              <p className="text-xs text-[#8a8e99] leading-relaxed">
                Led by owner Antony and featuring master barbers like Flix with over 15 years of craft, our team pairs licensed technical excellence with genuine hospitality and dependable consistency.
              </p>
            </div>
          </div>
        </div>

        {/* Contact & Hours Information Block */}
        <div className="bg-[#121417] border border-[#242730] p-8 sm:p-12 rounded-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
              Visit Our Lounge
            </span>
            <h3 className="font-serif text-3xl font-medium text-white">
              Centrally Situated in Downtown San Diego
            </h3>
            <div className="space-y-3 text-xs text-[#9aa0ad] pt-2">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#c5a880] flex-shrink-0" />
                <span>{BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#c5a880] flex-shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#c5a880] flex-shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#c5a880] flex-shrink-0" />
                <span>Monday – Sunday: 7:00 AM – 9:00 PM</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-end">
            <Link
              to="/book"
              className="px-8 py-4 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0c0d0e] font-semibold text-xs tracking-widest uppercase transition-all shadow-md text-center"
            >
              Book Appointment
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#1a1c22] hover:bg-[#252832] text-white border border-[#323642] font-semibold text-xs tracking-widest uppercase transition-all text-center"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
