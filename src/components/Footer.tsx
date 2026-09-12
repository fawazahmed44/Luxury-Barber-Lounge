import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO, SERVICES, SERVICE_AREAS } from '../data/barberData';
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#08090a] text-[#a0a3ab] border-t border-[#1a1b1f] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & Brand statement banner */}
        <div className="pb-16 border-b border-[#1b1c21] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-2">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#c5a880] uppercase">
              Stay Connected
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#f4f2ee] font-medium tracking-tight">
              Get notified of deals, discounts, new services and products.
            </h3>
            <p className="text-xs text-[#7d8089]">
              Receive private notifications and seasonal grooming releases from our Downtown San Diego lounge.
            </p>
          </div>
          <div className="lg:col-span-6">
            {isSubscribed ? (
              <div className="flex items-center gap-3 p-4 bg-[#14161a] border border-[#272a32] text-[#c5a880] text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#c5a880] flex-shrink-0" />
                <span>Thank you. You are now subscribed to Luxury Barber Lounge updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 bg-[#121417] border border-[#26282e] focus:border-[#c5a880] px-4 py-3 text-sm text-[#f4f2ee] placeholder-[#5c5f66] outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0c0d0e] font-semibold text-xs tracking-widest uppercase transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Subscribe <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Multi-column navigation links */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 border-b border-[#1b1c21]">
          {/* Col 1: Brand & Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block hover:opacity-95 transition-opacity" aria-label="Luxury Barber Lounge Home">
              <Logo size="md" variant="header" showTagline={true} />
            </Link>
            <p className="text-xs text-[#828690] leading-relaxed max-w-sm">
              A premium men's grooming destination in San Diego. Providing personalized haircuts, precision razor fades, traditional hot towel shaves, and elevated executive grooming rituals.
            </p>

            <div className="space-y-2.5 text-xs text-[#9599a3]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c5a880] flex-shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c5a880] flex-shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-[#c5a880] transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#c5a880] flex-shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[#c5a880] transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#c5a880] flex-shrink-0" />
                <span>{BUSINESS_INFO.hours.summary}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-[0.2em] text-[#f4f2ee] uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/services" className="hover:text-[#c5a880] transition-colors">
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#c5a880] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/barbers" className="hover:text-[#c5a880] transition-colors">
                  Barbers
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#c5a880] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#c5a880] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/book" className="hover:text-[#c5a880] transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#c5a880] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/hiring" className="hover:text-[#c5a880] transition-colors">
                  Careers / We Are Hiring
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-[0.2em] text-[#f4f2ee] uppercase">
              Featured Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link to={`/services/${s.slug}`} className="hover:text-[#c5a880] transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/products/luxury-barber-service-package" className="hover:text-[#c5a880] transition-colors">
                  Luxury Barber Package ($65)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Service Areas & Legal */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-[0.2em] text-[#f4f2ee] uppercase">
              San Diego Areas
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICE_AREAS.slice(0, 6).map((area) => (
                <li key={area.slug}>
                  <Link to={`/areas/${area.slug}`} className="hover:text-[#c5a880] transition-colors">
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/areas" className="text-[#c5a880] hover:underline transition-colors block mt-1">
                  View All Service Areas &rarr;
                </Link>
              </li>
            </ul>

            <div className="pt-4 border-t border-[#1b1c21] space-y-1.5">
              <h5 className="text-[11px] font-medium text-[#c5a880] uppercase tracking-wider">
                Legal & Policies
              </h5>
              <div>
                <Link to="/policies" className="text-xs hover:text-[#c5a880] transition-colors block">
                  Barbershop Policies & Terms
                </Link>
              </div>
              <div>
                <Link to="/contractor-agreement" className="text-xs hover:text-[#c5a880] transition-colors block">
                  Independent Contractor Agreement
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Socials & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6e727a]">
          <div className="flex items-center gap-6">
            <a
              href={BUSINESS_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c5a880] transition-colors"
            >
              Instagram
            </a>
            <a
              href={BUSINESS_INFO.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c5a880] transition-colors"
            >
              Facebook
            </a>
            <a
              href={BUSINESS_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c5a880] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={BUSINESS_INFO.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c5a880] transition-colors"
            >
              YouTube
            </a>
          </div>

          <div>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. 1401 Sixth Ave, San Diego, CA 92101. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
