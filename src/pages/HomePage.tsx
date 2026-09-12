import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, BARBERS, PRODUCTS, BUSINESS_INFO, GALLERY_ITEMS } from '../data/barberData';
import { Logo } from '../components/Logo';
import {
  Scissors,
  Clock,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Phone,
  Beer,
  Check,
  ChevronRight,
  Star
} from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#f4f2ee] overflow-hidden">
      {/* 1. EDITORIAL HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#1c1e24]">
        {/* Background visual with subtle gradient scrims */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/gallery/studioInterior_24806.jpg"
            alt="Luxury Barber Lounge Atmosphere"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e] via-[#0c0d0e]/70 to-[#0c0d0e]/50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0c0d0e]/60 to-[#0c0d0e]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          {/* Brand Seal / Logo */}
          <div className="flex justify-center">
            <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#14151a]/90 border border-[#2d303a] shadow-2xl backdrop-blur-md">
              <Logo size="md" variant="header" showTagline={true} />
            </div>
          </div>

          {/* Status badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#16181e]/90 border border-[#2d303a] text-xs text-[#c5a880] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#c5a880] animate-pulse" />
            <span className="uppercase tracking-[0.2em] font-medium text-[11px]">
              Downtown San Diego • Open Daily 7:00 AM – 9:00 PM
            </span>
          </div>

          {/* Master Headline */}
          <div className="space-y-4">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.1]">
              The Art of the <br />
              <span className="font-normal italic text-[#e6d5be]">Modern Barber</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xs sm:text-base text-[#9da1ad] font-normal leading-relaxed">
              Precision skin fades, bespoke scissor texturing, restorative hot towel shaves, and executive full-service grooming at 1401 Sixth Avenue.
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/book"
              className="w-full sm:w-auto px-8 py-4 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0c0d0e] font-semibold text-xs tracking-widest uppercase transition-all duration-300 shadow-xl shadow-[#c5a880]/10 flex items-center justify-center gap-2"
            >
              Book an Appointment <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-4 bg-[#16171d]/90 hover:bg-[#20222a] text-[#cfd3de] border border-[#2e323d] font-medium text-xs tracking-widest uppercase transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2"
            >
              Explore Services
            </Link>
          </div>

          {/* Floating Key Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 border-t border-[#1f2229]/60 max-w-4xl mx-auto text-left">
            <div className="p-4 bg-[#121317]/80 border border-[#20222a] rounded-sm backdrop-blur-sm">
              <span className="text-[10px] uppercase tracking-widest text-[#72757f] block font-mono">Location</span>
              <span className="font-serif text-sm text-white font-medium">1401 Sixth Ave</span>
              <span className="text-[11px] text-[#8e929f] block">Downtown San Diego</span>
            </div>

            <div className="p-4 bg-[#121317]/80 border border-[#20222a] rounded-sm backdrop-blur-sm">
              <span className="text-[10px] uppercase tracking-widest text-[#72757f] block font-mono">Hours</span>
              <span className="font-serif text-sm text-white font-medium">7 AM – 9 PM</span>
              <span className="text-[11px] text-[#8e929f] block">Open 7 Days a Week</span>
            </div>

            <div className="p-4 bg-[#121317]/80 border border-[#20222a] rounded-sm backdrop-blur-sm">
              <span className="text-[10px] uppercase tracking-widest text-[#72757f] block font-mono">Service Menu</span>
              <span className="font-serif text-sm text-white font-medium">Fades from $45</span>
              <span className="text-[11px] text-[#8e929f] block">Full Service $65</span>
            </div>

            <div className="p-4 bg-[#121317]/80 border border-[#20222a] rounded-sm backdrop-blur-sm">
              <span className="text-[10px] uppercase tracking-widest text-[#72757f] block font-mono">Concierge</span>
              <span className="font-serif text-sm text-white font-medium">Cold Beer On House</span>
              <span className="text-[11px] text-[#8e929f] block">Private In-Home Options</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STUDIO ATMOSPHERE & BRAND INTRODUCTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
              The Downtown Sanctuary
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-white leading-tight">
              Where Precision Meets Comfort
            </h2>
            <p className="text-sm text-[#9498a4] leading-relaxed">
              Stepping into Luxury Barber Lounge is an intentional departure from rushed barbershops. Featuring a complete interior and exterior makeover with custom leather seating, vintage-inspired fixtures, and soothing lounge soundscapes, our studio is engineered for relaxation.
            </p>
            <p className="text-sm text-[#9498a4] leading-relaxed">
              Led by owner Antony and master craftsmen with up to 15+ years of experience, we provide genuine hospitality, thoughtful consultations, and complimentary cold beer with your service.
            </p>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a880] hover:text-[#dfc49f] font-semibold transition-colors"
              >
                Read Our Story & Philosophy <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative rounded-sm overflow-hidden border border-[#24262f] h-80 sm:h-96 group">
              <img
                src="/images/gallery/street.jpg"
                alt="Luxury Barber Lounge Storefront Entrance"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#c5a880] font-mono">1401 Sixth Ave</span>
                  <h3 className="font-serif text-xl text-white font-medium">Downtown Storefront</h3>
                </div>
              </div>
            </div>

            <div className="relative rounded-sm overflow-hidden border border-[#24262f] h-80 sm:h-96 group sm:translate-y-8">
              <img
                src="/images/gallery/studioInterior_24808.jpg"
                alt="Lounge Chairs and Atmosphere Makeover"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#c5a880] font-mono">Atmosphere</span>
                  <h3 className="font-serif text-xl text-white font-medium">Complete Studio Makeover</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES SHOWCASE */}
      <section className="py-20 bg-[#101114] border-y border-[#1e2026]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
                Signature Menu
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-white">
                Bespoke Grooming Rituals
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#c5a880] hover:text-[#e4caa5] font-semibold transition-colors"
            >
              View Full Price Board & Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="bg-[#14161b] border border-[#23252d] hover:border-[#383b46] rounded-sm p-6 flex flex-col justify-between group transition-all"
              >
                <div className="space-y-4">
                  <div className="relative h-48 rounded-sm overflow-hidden bg-[#181a20]">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-[#0c0d0e]/80 backdrop-blur-md px-3 py-1 rounded text-xs font-serif text-[#c5a880] font-semibold border border-[#2b2d35]">
                      {service.priceDisplay}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[11px] text-[#737680] font-mono">
                      <Clock className="w-3.5 h-3.5 text-[#c5a880]" />
                      <span>{service.duration}</span>
                    </div>
                    <h3 className="font-serif text-xl font-medium text-white group-hover:text-[#c5a880] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#878b97] line-clamp-2 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-[#1e2027] flex gap-3">
                  <Link
                    to={`/services/${service.slug}`}
                    className="flex-1 py-2.5 px-3 text-center bg-[#191b22] hover:bg-[#22252f] text-white text-xs uppercase tracking-wider font-medium border border-[#2d303a] transition-colors"
                  >
                    Details
                  </Link>
                  <Link
                    to={`/book?service=${service.id}`}
                    className="py-2.5 px-4 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0c0d0e] text-xs uppercase tracking-wider font-semibold transition-colors"
                  >
                    Book
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE BARBER RITUAL / PROCESS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
            Our Four-Stage Architecture
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-white">
            The Grooming Process
          </h2>
          <p className="text-xs sm:text-sm text-[#8a8d98]">
            We approach hair and beard geometry with structural deliberation. Every session is designed for longevity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 bg-[#121316] border border-[#22242a] rounded-sm space-y-4">
            <span className="font-serif text-4xl text-[#c5a880]/40 font-light block">01</span>
            <h3 className="font-serif text-lg text-white font-medium">Bespoke Consultation</h3>
            <p className="text-xs text-[#898d99] leading-relaxed">
              Evaluating bone contours, natural hair swirls, density, and beard growth vectors to customize the haircut and line.
            </p>
          </div>

          <div className="p-6 bg-[#121316] border border-[#22242a] rounded-sm space-y-4">
            <span className="font-serif text-4xl text-[#c5a880]/40 font-light block">02</span>
            <h3 className="font-serif text-lg text-white font-medium">Precision Cut & Edging</h3>
            <p className="text-xs text-[#898d99] leading-relaxed">
              Execution of clean skin fades, drop fades, or scissor work paired with surgical straight-razor perimeter definition.
            </p>
          </div>

          <div className="p-6 bg-[#121316] border border-[#22242a] rounded-sm space-y-4">
            <span className="font-serif text-4xl text-[#c5a880]/40 font-light block">03</span>
            <h3 className="font-serif text-lg text-white font-medium">Hot Towel & Lather</h3>
            <p className="text-xs text-[#898d99] leading-relaxed">
              Aromatic steamed towel application, hot lather massage, and traditional straight razor shave or beard contouring.
            </p>
          </div>

          <div className="p-6 bg-[#121316] border border-[#22242a] rounded-sm space-y-4">
            <span className="font-serif text-4xl text-[#c5a880]/40 font-light block">04</span>
            <h3 className="font-serif text-lg text-white font-medium">Wash & Papi Style Finish</h3>
            <p className="text-xs text-[#898d99] leading-relaxed">
              Scalp rinse, blowout architecture, and styling with premium clay, pomade, or Papi Style hair styling powder.
            </p>
          </div>
        </div>
      </section>

      {/* 5. MEET THE CRAFTSMEN PREVIEW */}
      <section className="py-20 bg-[#111215] border-t border-[#1e2026]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
                Senior Staff
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-white">
                Meet the Barbers
              </h2>
            </div>
            <Link
              to="/barbers"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#c5a880] hover:text-[#e4caa5] font-semibold transition-colors"
            >
              View All Barbers & Specialties <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BARBERS.map((barber) => (
              <div
                key={barber.id}
                className="bg-[#14151a] border border-[#22242a] rounded-sm p-5 space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="relative h-64 overflow-hidden rounded-sm bg-[#1a1c22]">
                    <img
                      src={barber.image}
                      alt={barber.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {(barber.id === 'antony' || barber.id === 'anthony') && (
                      <div className="absolute top-3 left-3 bg-[#0c0d0e]/90 text-[#c5a880] px-2 py-0.5 text-[10px] uppercase font-mono tracking-wider border border-[#333744]">
                        Owner
                      </div>
                    )}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif text-xl font-medium text-white group-hover:text-[#c5a880] transition-colors">
                      {barber.name}
                    </h3>
                    <p className="text-[11px] uppercase tracking-wider text-[#c5a880] font-semibold">
                      {barber.role}
                    </p>
                    <p className="text-xs text-[#878b97] line-clamp-2 leading-relaxed pt-1">
                      {barber.experienceDescription}
                    </p>
                  </div>
                </div>

                <Link
                  to={`/book?barber=${barber.id}`}
                  className="w-full py-2.5 text-center bg-[#1b1d24] hover:bg-[#c5a880] hover:text-[#0c0d0e] text-white text-xs uppercase tracking-wider font-semibold border border-[#2a2d36] transition-colors mt-2"
                >
                  Book with {barber.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. REAL GALLERY SHOWCASE */}
      <section className="py-20 bg-[#0e1013] border-t border-[#1d1f25]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
                Real Studio Portfolio
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-white">
                Craftsmanship & Atmosphere
              </h2>
              <p className="text-xs sm:text-sm text-[#8a8e99] max-w-xl">
                Direct snapshots from our 1401 Sixth Ave studio—showcasing real guest haircuts, razor work, beard grooming, and our lounge interior.
              </p>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#c5a880] hover:text-[#e4caa5] font-semibold transition-colors whitespace-nowrap"
            >
              View Full Gallery ({GALLERY_ITEMS.length} Photos) <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {GALLERY_ITEMS.slice(0, 6).map((item) => (
              <Link
                key={item.id}
                to="/gallery"
                className="group relative h-48 sm:h-56 rounded-sm overflow-hidden border border-[#22252c] bg-[#14161c]"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
                  <span className="text-[9px] uppercase tracking-wider text-[#c5a880] font-semibold line-clamp-1">
                    {item.category}
                  </span>
                  <p className="text-[11px] text-white font-medium line-clamp-1">
                    {item.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PRODUCTS SPOTLIGHT */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
              Grooming Packages & Products
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-white">
              Signature Provisions
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#c5a880] hover:text-[#e4caa5] font-semibold transition-colors"
          >
            Explore All Provisions <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="bg-[#121316] border border-[#22242a] hover:border-[#383b45] rounded-sm p-6 flex flex-col justify-between group transition-all"
            >
              <div className="space-y-4">
                <div className="h-52 overflow-hidden rounded-sm bg-[#16181e] relative">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#0c0d0e]/80 backdrop-blur-md px-3 py-1 rounded text-xs font-serif text-[#c5a880] font-semibold border border-[#2b2d35]">
                    {prod.priceDisplay}
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium text-white group-hover:text-[#c5a880] transition-colors">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-[#878b97] line-clamp-2 mt-1 leading-relaxed">
                    {prod.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#1e2026] mt-4">
                <Link
                  to={`/products/${prod.slug}`}
                  className="w-full py-2.5 text-center bg-[#181a20] hover:bg-[#22242b] text-white text-xs uppercase tracking-wider font-semibold border border-[#2a2c34] transition-colors flex items-center justify-center gap-2"
                >
                  Configure & Details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. DOWNTOWN SAN DIEGO LOCATION & HOURS SHOWCASE */}
      <section className="py-20 bg-[#121317] border-t border-[#21232a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
              Downtown San Diego
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-white">
              Centrally Positioned on Sixth Avenue
            </h2>
            <p className="text-xs sm:text-sm text-[#8c909e] leading-relaxed">
              Conveniently located at 1401 Sixth Ave near Cortez Hill, the Gaslamp Quarter, and East Village. We are open 7 days a week from 7:00 AM to 9:00 PM to accommodate busy professionals and weekend routines.
            </p>

            <div className="space-y-3 pt-2 text-xs text-[#a0a4b0]">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#c5a880]" />
                <span>1401 Sixth Ave, San Diego, CA 92101</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#c5a880]" />
                <span>Mon – Sun: 7:00 AM – 9:00 PM</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#c5a880]" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            <div className="pt-4 flex gap-4">
              <Link
                to="/book"
                className="px-6 py-3.5 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0c0d0e] font-semibold text-xs tracking-widest uppercase transition-colors"
              >
                Book Chair
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3.5 bg-[#191b21] hover:bg-[#23252d] text-white border border-[#2e313c] text-xs tracking-widest uppercase transition-colors"
              >
                Directions & Inquiries
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-sm overflow-hidden border border-[#262832] h-80 shadow-2xl">
            <iframe
              title="Barbershop Location Map"
              src="https://maps.google.com/maps?q=1401+Sixth+Ave,+San+Diego,+CA+92101&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 8. HIRING BANNER */}
      <section className="py-16 bg-[#0e0f12] border-t border-[#1e2025]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
              We Are Hiring
            </span>
            <h3 className="font-serif text-2xl text-white font-medium">
              Are You a Licensed Professional Barber?
            </h3>
            <p className="text-xs text-[#808490] max-w-xl">
              Join our respected Downtown San Diego team. Supportive culture, loyal clientele, and career development led by owner Antony.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/become-a-barber"
              className="px-6 py-3.5 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0c0d0e] text-xs uppercase tracking-widest font-semibold transition-colors"
            >
              Apply Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
