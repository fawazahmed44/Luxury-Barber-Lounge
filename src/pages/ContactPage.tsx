import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/barberData';
import { PageHeader } from '../components/PageHeader';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#f4f2ee]">
      <PageHeader
        badge="Concierge & Location"
        title="Contact Luxury Barber Lounge"
        subtitle="Conveniently situated at 1401 Sixth Ave in Downtown San Diego. Open seven days a week from 7:00 AM to 9:00 PM."
        breadcrumbs={[{ label: 'Contact' }]}
        action={{ label: 'Book Online', to: '/book' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact details & Hours */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
                Studio Inquiries
              </span>
              <h2 className="font-serif text-3xl font-medium text-white">
                Get In Touch
              </h2>
              <p className="text-xs sm:text-sm text-[#8f93a0] leading-relaxed">
                Whether you have questions about our haircut rituals, private in-home barber travel, or career opportunities, our concierge team is at your service.
              </p>
            </div>

            <div className="space-y-4 text-xs text-[#a2a6b2]">
              {/* Address card */}
              <div className="p-5 bg-[#131418] border border-[#22242a] rounded-sm space-y-2">
                <div className="flex items-center gap-2 text-[#c5a880] uppercase tracking-wider text-[11px] font-medium">
                  <MapPin className="w-4 h-4" /> Location
                </div>
                <p className="text-sm font-medium text-white">{BUSINESS_INFO.address.street}</p>
                <p>{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}</p>
                <p className="text-[11px] text-[#787b84] pt-1">
                  Downtown San Diego • Cortez Hill corridor
                </p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent('1401 Sixth Ave, San Diego, CA 92101')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#c5a880] hover:underline pt-2"
                >
                  Open in Google Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Phone & Email card */}
              <div className="p-5 bg-[#131418] border border-[#22242a] rounded-sm space-y-3">
                <div className="flex items-center gap-2 text-[#c5a880] uppercase tracking-wider text-[11px] font-medium">
                  <Phone className="w-4 h-4" /> Direct Communication
                </div>
                <div>
                  <span className="text-[10px] uppercase text-[#73767f] block">Telephone</span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="text-sm font-serif font-medium text-white hover:text-[#c5a880] transition-colors"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-[#73767f] block">Email</span>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-sm text-white hover:text-[#c5a880] transition-colors break-all"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="p-5 bg-[#131418] border border-[#22242a] rounded-sm space-y-3">
                <div className="flex items-center gap-2 text-[#c5a880] uppercase tracking-wider text-[11px] font-medium">
                  <Clock className="w-4 h-4" /> Business Hours
                </div>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between border-b border-[#1c1e23] pb-1">
                    <span className="text-[#848792]">Monday – Friday</span>
                    <span className="text-white font-mono">{BUSINESS_INFO.hours.weekdays}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#1c1e23] pb-1">
                    <span className="text-[#848792]">Saturday</span>
                    <span className="text-white font-mono">{BUSINESS_INFO.hours.saturday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#848792]">Sunday</span>
                    <span className="text-white font-mono">{BUSINESS_INFO.hours.sunday}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form & Map Area */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-[#121316] border border-[#24262d] p-6 sm:p-10 rounded-sm">
              <div className="border-b border-[#1f2127] pb-4 mb-6">
                <h3 className="font-serif text-2xl font-medium text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-[#80848f] mt-1">
                  We respond to all online inquiries within business hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center space-y-4 bg-[#16181d] border border-[#272932]">
                  <CheckCircle2 className="w-12 h-12 text-[#c5a880] mx-auto" />
                  <h4 className="font-serif text-2xl text-white font-medium">
                    Message Transmitted
                  </h4>
                  <p className="text-xs text-[#8e929d] max-w-sm mx-auto">
                    Thank you. A member of our Downtown San Diego lounge team will review your note and contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 bg-[#1e2026] hover:bg-[#272a33] text-[#c5a880] text-xs uppercase tracking-wider font-semibold border border-[#323640]"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a0a4b0] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Christian Vance"
                      className="w-full bg-[#17191e] border border-[#2b2e37] focus:border-[#c5a880] px-4 py-3 text-sm text-white outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#a0a4b0] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="vance@example.com"
                        className="w-full bg-[#17191e] border border-[#2b2e37] focus:border-[#c5a880] px-4 py-3 text-sm text-white outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#a0a4b0] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(619) 000-0000"
                        className="w-full bg-[#17191e] border border-[#2b2e37] focus:border-[#c5a880] px-4 py-3 text-sm text-white outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a0a4b0] mb-2">
                      Your Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us how we can assist you..."
                      className="w-full bg-[#17191e] border border-[#2b2e37] focus:border-[#c5a880] px-4 py-3 text-sm text-white outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0c0d0e] font-semibold text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Map Area */}
            <div className="bg-[#121316] border border-[#24262d] rounded-sm overflow-hidden">
              <div className="p-4 border-b border-[#202228] flex justify-between items-center text-xs">
                <span className="font-serif text-base text-white">1401 Sixth Ave, Downtown San Diego</span>
                <span className="text-[#c5a880]">Street & Garage Parking Nearby</span>
              </div>
              <div className="h-64 w-full bg-[#16181d] relative flex items-center justify-center">
                <iframe
                  title="Luxury Barber Lounge Location Map"
                  src="https://maps.google.com/maps?q=1401+Sixth+Ave,+San+Diego,+CA+92101&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
