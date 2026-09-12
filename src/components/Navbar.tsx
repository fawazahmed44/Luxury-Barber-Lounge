import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ShoppingBag, Clock, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/barberData';
import { useCart } from '../context/CartContext';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [barbersOpen, setBarbersOpen] = useState(false);
  const { totalCount, setIsCartOpen } = useCart();
  const location = useLocation();

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const barbersTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setBarbersOpen(false);
  }, [location.pathname]);

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesOpen(true);
  };
  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  const handleBarbersEnter = () => {
    if (barbersTimeoutRef.current) clearTimeout(barbersTimeoutRef.current);
    setBarbersOpen(true);
  };
  const handleBarbersLeave = () => {
    barbersTimeoutRef.current = setTimeout(() => {
      setBarbersOpen(false);
    }, 150);
  };

  return (
    <>
      {/* Top micro-bar for prestige info */}
      <div className="hidden lg:block bg-[#090a0b] text-[#9b9ea6] text-[11px] border-b border-[#1b1c20] px-6 py-1.5 font-sans tracking-wider">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#c5a880]" />
              {BUSINESS_INFO.address.street}, San Diego, CA 92101
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-[#c5a880]" />
              Open Daily: 7:00 AM – 9:00 PM
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="hover:text-[#c5a880] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-[#c5a880]" />
              {BUSINESS_INFO.phone}
            </a>
            <span className="text-[#3a3c42]">|</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Concierge
            </Link>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0c0d0e]/95 backdrop-blur-md border-b border-[#202227] shadow-xl py-3.5'
            : 'bg-[#0c0d0e]/80 backdrop-blur-sm border-b border-[#18191d] py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link to="/" className="group flex items-center transition-opacity hover:opacity-95" aria-label="Luxury Barber Lounge Home">
            <Logo size="md" variant="header" showTagline={true} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-widest text-[#cfd2d9]">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button
                id="nav-services-toggle"
                className={`flex items-center gap-1.5 py-2 hover:text-[#c5a880] transition-colors font-medium ${
                  location.pathname.startsWith('/services') ? 'text-[#c5a880]' : ''
                }`}
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesOpen ? 'rotate-180 text-[#c5a880]' : ''
                  }`}
                />
              </button>

              {/* Services Mega Dropdown */}
              {servicesOpen && (
                <div className="absolute left-0 top-full mt-1 w-[540px] bg-[#121316] border border-[#26282e] shadow-2xl p-6 rounded-sm animate-in fade-in duration-200">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#22242a]">
                    <span className="text-[10px] tracking-[0.2em] text-[#c5a880] uppercase font-semibold">
                      Grooming Menu & Rituals
                    </span>
                    <Link
                      to="/services"
                      className="text-[11px] text-[#8e929a] hover:text-white flex items-center gap-1 lowercase"
                    >
                      all services & pricing <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      to="/services"
                      className="p-3 bg-[#18191e] hover:bg-[#202228] border border-transparent hover:border-[#353842] rounded transition-all group/item"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-serif text-sm font-medium text-white group-hover/item:text-[#c5a880] normal-case">
                          Services & Pricing
                        </span>
                        <span className="text-[10px] text-[#c5a880] font-mono">Overview</span>
                      </div>
                      <p className="text-[11px] text-[#7d818a] normal-case mt-1">
                        Complete listing of haircuts, beard care, lineups & rates.
                      </p>
                    </Link>

                    {SERVICES.map((srv) => (
                      <Link
                        key={srv.id}
                        to={`/services/${srv.slug}`}
                        className="p-3 bg-[#18191e] hover:bg-[#202228] border border-transparent hover:border-[#353842] rounded transition-all group/item"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-serif text-sm font-medium text-white group-hover/item:text-[#c5a880] normal-case">
                            {srv.title}
                          </span>
                          <span className="text-[11px] text-[#c5a880] font-mono">{srv.priceDisplay}</span>
                        </div>
                        <p className="text-[11px] text-[#7d818a] normal-case mt-1 line-clamp-1">
                          {srv.shortDescription}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Barbers Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleBarbersEnter}
              onMouseLeave={handleBarbersLeave}
            >
              <button
                id="nav-barbers-toggle"
                className={`flex items-center gap-1.5 py-2 hover:text-[#c5a880] transition-colors font-medium ${
                  location.pathname === '/barbers' || location.pathname === '/become-a-barber'
                    ? 'text-[#c5a880]'
                    : ''
                }`}
                aria-expanded={barbersOpen}
              >
                Barbers
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    barbersOpen ? 'rotate-180 text-[#c5a880]' : ''
                  }`}
                />
              </button>

              {barbersOpen && (
                <div className="absolute left-0 top-full mt-1 w-56 bg-[#121316] border border-[#26282e] shadow-2xl p-2 rounded-sm animate-in fade-in duration-200">
                  <Link
                    to="/barbers"
                    className="block px-3 py-2.5 rounded text-[11px] hover:bg-[#1c1e24] hover:text-[#c5a880] transition-colors"
                  >
                    Our Barbers
                  </Link>
                  <Link
                    to="/become-a-barber"
                    className="block px-3 py-2.5 rounded text-[11px] hover:bg-[#1c1e24] hover:text-[#c5a880] transition-colors"
                  >
                    Become a Barber
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/gallery"
              className={`py-2 hover:text-[#c5a880] transition-colors font-medium ${
                location.pathname === '/gallery' ? 'text-[#c5a880]' : ''
              }`}
            >
              Gallery
            </Link>

            <Link
              to="/products"
              className={`py-2 hover:text-[#c5a880] transition-colors font-medium ${
                location.pathname.startsWith('/products') ? 'text-[#c5a880]' : ''
              }`}
            >
              Products
            </Link>

            <Link
              to="/about"
              className={`py-2 hover:text-[#c5a880] transition-colors font-medium ${
                location.pathname === '/about' ? 'text-[#c5a880]' : ''
              }`}
            >
              About
            </Link>

            <Link
              to="/hiring"
              className={`py-2 hover:text-[#c5a880] transition-colors font-medium ${
                location.pathname === '/hiring' ? 'text-[#c5a880]' : ''
              }`}
            >
              We Are Hiring
            </Link>

            <Link
              to="/contact"
              className={`py-2 hover:text-[#c5a880] transition-colors font-medium ${
                location.pathname === '/contact' ? 'text-[#c5a880]' : ''
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-4">
            {/* Cart toggle */}
            <button
              id="cart-drawer-trigger"
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 text-[#cfd2d9] hover:text-[#c5a880] transition-colors"
              aria-label="View selected items"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#c5a880] text-[#0c0d0e] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalCount}
                </span>
              )}
            </button>

            {/* Direct Booking CTA */}
            <Link
              id="nav-book-cta"
              to="/book"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-[#c5a880] hover:bg-[#d4b992] text-[#0c0d0e] text-xs font-semibold uppercase tracking-widest transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Book Appointment
            </Link>

            {/* Mobile Hamburger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#cfd2d9] hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-30 bg-[#0c0d0e] pt-24 px-6 pb-10 overflow-y-auto flex flex-col justify-between animate-in fade-in duration-200">
          <div className="space-y-6">
            <div className="pb-4 border-b border-[#202227]">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                <Logo size="sm" variant="header" showTagline={true} />
              </Link>
            </div>

            <div className="border-b border-[#202227] pb-4">
              <span className="text-[10px] tracking-[0.25em] text-[#c5a880] uppercase font-semibold block mb-2">
                Services
              </span>
              <div className="space-y-2 pl-2">
                <Link
                  to="/services"
                  className="block py-1 text-sm font-serif text-[#e4e6ea] hover:text-[#c5a880]"
                >
                  Services & Pricing Overview
                </Link>
                {SERVICES.map((s) => (
                  <Link
                    key={s.id}
                    to={`/services/${s.slug}`}
                    className="block py-1 text-sm font-serif text-[#9fa2ab] hover:text-white"
                  >
                    {s.title} <span className="text-xs text-[#c5a880] font-mono">({s.priceDisplay})</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-b border-[#202227] pb-4 space-y-2">
              <span className="text-[10px] tracking-[0.25em] text-[#c5a880] uppercase font-semibold block mb-2">
                Barbers
              </span>
              <div className="pl-2 space-y-2">
                <Link
                  to="/barbers"
                  className="block py-1 text-sm font-serif text-[#e4e6ea] hover:text-[#c5a880]"
                >
                  Our Barbers (Flix, Antony, Ivan, Ali)
                </Link>
                <Link
                  to="/become-a-barber"
                  className="block py-1 text-sm font-serif text-[#9fa2ab] hover:text-white"
                >
                  Become a Barber (Application)
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm tracking-wider uppercase font-medium">
              <Link to="/gallery" className="py-2 text-[#cfd2d9] hover:text-[#c5a880]">
                Gallery
              </Link>
              <Link to="/products" className="py-2 text-[#cfd2d9] hover:text-[#c5a880]">
                Products
              </Link>
              <Link to="/about" className="py-2 text-[#cfd2d9] hover:text-[#c5a880]">
                About Us
              </Link>
              <Link to="/hiring" className="py-2 text-[#cfd2d9] hover:text-[#c5a880]">
                We Are Hiring
              </Link>
              <Link to="/contact" className="py-2 text-[#cfd2d9] hover:text-[#c5a880]">
                Contact
              </Link>
              <Link to="/areas" className="py-2 text-[#cfd2d9] hover:text-[#c5a880]">
                Areas Served
              </Link>
            </div>
          </div>

          <div className="pt-8 border-t border-[#202227] space-y-4">
            <Link
              to="/book"
              className="w-full block py-3.5 text-center bg-[#c5a880] text-[#0c0d0e] font-semibold text-xs tracking-widest uppercase"
            >
              Book Appointment Now
            </Link>
            <div className="text-center text-xs text-[#8a8d94]">
              <p>1401 Sixth Ave, San Diego, CA 92101</p>
              <p className="mt-1">Daily 7:00 AM – 9:00 PM • 619-310-5783</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
