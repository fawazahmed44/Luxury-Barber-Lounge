import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SERVICES, BARBERS, BUSINESS_INFO } from '../data/barberData';
import { Check, ArrowRight, ArrowLeft, Calendar, Clock, User, Scissors, Sparkles, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Logo } from '../components/Logo';

export const BookPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service');
  const initialBarber = searchParams.get('barber');

  const [step, setStep] = useState(1);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialService || 'full-service');
  const [selectedBarberId, setSelectedBarberId] = useState<string>(initialBarber || 'any');
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  });
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM');
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
    agreeTerms: true
  });
  const [confirmationCode, setConfirmationCode] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialService) setSelectedServiceId(initialService);
    if (initialBarber) setSelectedBarberId(initialBarber);
  }, [initialService, initialBarber]);

  const selectedService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];
  const selectedBarber = selectedBarberId === 'any'
    ? { name: 'Any Available Master Barber', role: 'First Available Professional', image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=400&q=80', avatarImage: undefined as string | undefined }
    : BARBERS.find((b) => b.id === selectedBarberId) || BARBERS[0];

  // Generates 7 upcoming dates
  const availableDates = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return {
      iso: d.toISOString().split('T')[0],
      dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
      monthDay: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    };
  });

  const timeSlots = [
    '7:30 AM', '8:15 AM', '9:00 AM', '9:45 AM',
    '10:30 AM', '11:15 AM', '12:00 PM', '1:00 PM',
    '1:45 PM', '2:30 PM', '3:15 PM', '4:00 PM',
    '5:00 PM', '5:45 PM', '6:30 PM', '7:15 PM', '8:00 PM'
  ];

  const handleNextStep = () => {
    if (step === 5) {
      const newErrors: Record<string, string> = {};
      if (!customer.name.trim()) newErrors.name = 'Please enter your full name.';
      if (!customer.email.trim() || !customer.email.includes('@')) newErrors.email = 'Valid email is required.';
      if (!customer.phone.trim() || customer.phone.length < 7) newErrors.phone = 'Valid phone number is required.';
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
      setErrors({});
    }

    if (step === 6) {
      // Generate confirmation
      const code = 'LBL-' + Math.floor(100000 + Math.random() * 900000);
      setConfirmationCode(code);
      setStep(7);
      window.scrollTo({ top: 100, behavior: 'smooth' });
      return;
    }

    setStep((prev) => Math.min(prev + 1, 7));
    window.scrollTo({ top: 150, behavior: 'smooth' });
  };

  const handlePrevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 150, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#f4f2ee]">
      <PageHeader
        badge="Online Reservation"
        title="Book Your Appointment"
        subtitle="Select your preferred grooming ritual, dedicated barber, and reservation time in Downtown San Diego."
        breadcrumbs={[{ label: 'Book Appointment' }]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress indicator */}
        {step < 7 && (
          <div className="mb-10">
            <div className="flex items-center justify-between text-xs uppercase tracking-widest text-[#787c86] mb-3">
              <span className="text-[#c5a880] font-medium">Step 0{step} of 06</span>
              <span>
                {step === 1 && 'Select Grooming Service'}
                {step === 2 && 'Select Barber'}
                {step === 3 && 'Choose Date'}
                {step === 4 && 'Choose Appointment Time'}
                {step === 5 && 'Guest Details'}
                {step === 6 && 'Review & Confirm'}
              </span>
            </div>
            <div className="w-full bg-[#181a1f] h-1.5 rounded-full overflow-hidden border border-[#26282e]">
              <div
                className="bg-[#c5a880] h-full transition-all duration-300"
                style={{ width: `${(step / 6) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Step 1: Choose Service */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                Choose Your Service
              </h2>
              <p className="text-xs text-[#8d9098]">
                Every haircut is delivered with uncompromised precision and hot lather detailing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SERVICES.map((srv) => (
                <div
                  key={srv.id}
                  onClick={() => setSelectedServiceId(srv.id)}
                  className={`cursor-pointer p-5 rounded-sm border transition-all duration-200 relative ${
                    selectedServiceId === srv.id
                      ? 'bg-[#191b20] border-[#c5a880] ring-1 ring-[#c5a880]'
                      : 'bg-[#121316] border-[#24262c] hover:border-[#3a3d46]'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <h3 className="font-serif text-lg font-medium text-white">{srv.title}</h3>
                      <span className="text-xs text-[#8a8d97] block">{srv.duration}</span>
                    </div>
                    <span className="font-serif text-xl text-[#c5a880] font-medium">
                      {srv.priceDisplay}
                    </span>
                  </div>
                  <p className="text-xs text-[#90949f] mt-3 leading-relaxed">
                    {srv.shortDescription}
                  </p>
                  {selectedServiceId === srv.id && (
                    <div className="absolute top-4 right-4 bg-[#c5a880] text-[#0c0d0e] p-0.5 rounded-full">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Choose Barber */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                Select Your Barber
              </h2>
              <p className="text-xs text-[#8d9098]">
                Request a specific master craftsman or select first available.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Any barber option */}
              <div
                onClick={() => setSelectedBarberId('any')}
                className={`cursor-pointer p-5 rounded-sm border transition-all duration-200 relative ${
                  selectedBarberId === 'any'
                    ? 'bg-[#191b20] border-[#c5a880] ring-1 ring-[#c5a880]'
                    : 'bg-[#121316] border-[#24262c] hover:border-[#3a3d46]'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#202227] border border-[#33363f] flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-7 h-7 text-[#c5a880]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-white">First Available</h3>
                    <p className="text-xs text-[#c5a880]">Shortest wait time</p>
                    <p className="text-[11px] text-[#7a7d86] mt-1">Matched with an experienced craftsman</p>
                  </div>
                </div>
                {selectedBarberId === 'any' && (
                  <div className="absolute top-4 right-4 bg-[#c5a880] text-[#0c0d0e] p-0.5 rounded-full">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>

              {BARBERS.map((barber) => (
                <div
                  key={barber.id}
                  onClick={() => setSelectedBarberId(barber.id)}
                  className={`cursor-pointer p-5 rounded-sm border transition-all duration-200 relative ${
                    selectedBarberId === barber.id
                      ? 'bg-[#191b20] border-[#c5a880] ring-1 ring-[#c5a880]'
                      : 'bg-[#121316] border-[#24262c] hover:border-[#3a3d46]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={barber.avatarImage || barber.image}
                      alt={barber.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#32353e] flex-shrink-0 bg-[#1a1c22]"
                    />
                    <div>
                      <h3 className="font-serif text-lg font-medium text-white">{barber.name}</h3>
                      <p className="text-xs text-[#c5a880]">{barber.role}</p>
                      <p className="text-[11px] text-[#7a7d86] mt-1 line-clamp-2">
                        {barber.experienceDescription}
                      </p>
                    </div>
                  </div>
                  {selectedBarberId === barber.id && (
                    <div className="absolute top-4 right-4 bg-[#c5a880] text-[#0c0d0e] p-0.5 rounded-full">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Choose Date */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                Choose Reservation Date
              </h2>
              <p className="text-xs text-[#8d9098]">
                Open 7 days a week: Monday – Sunday, 7:00 AM – 9:00 PM.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
              {availableDates.map((item) => {
                const isSelected = selectedDate === item.iso;
                return (
                  <button
                    key={item.iso}
                    onClick={() => setSelectedDate(item.iso)}
                    className={`p-4 text-center rounded-sm border transition-all duration-200 ${
                      isSelected
                        ? 'bg-[#1e2026] border-[#c5a880] text-white ring-1 ring-[#c5a880]'
                        : 'bg-[#121316] border-[#24262c] text-[#8e929d] hover:border-[#3a3d46] hover:text-white'
                    }`}
                  >
                    <span className="block text-[11px] uppercase tracking-wider text-[#a0a3ac]">
                      {item.dayName}
                    </span>
                    <span className="block font-serif text-xl font-medium my-1 text-[#f4f2ee]">
                      {item.monthDay.split(' ')[1]}
                    </span>
                    <span className="block text-[10px] text-[#c5a880]">
                      {item.monthDay.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="p-4 bg-[#141519] border border-[#25272e] flex items-center gap-3 text-xs text-[#8a8e98]">
              <Calendar className="w-4 h-4 text-[#c5a880] flex-shrink-0" />
              <span>
                Looking for an appointment beyond next week? You can also contact our Downtown concierge directly at (619) 310-5783.
              </span>
            </div>
          </div>
        )}

        {/* Step 4: Choose Available Time */}
        {step === 4 && (
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                Select Time Window
              </h2>
              <p className="text-xs text-[#8d9098]">
                Showing available times for {selectedDate} with {selectedBarber.name}.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {timeSlots.map((time) => {
                const isSelected = selectedTime === time;
                return (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-3 px-2 rounded-sm border text-xs font-mono transition-all duration-200 ${
                      isSelected
                        ? 'bg-[#c5a880] text-[#0c0d0e] font-semibold border-[#c5a880]'
                        : 'bg-[#121316] border-[#24262c] text-[#a1a4ad] hover:border-[#383b44] hover:text-white'
                    }`}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 5: Enter Customer Details */}
        {step === 5 && (
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                Guest Contact Details
              </h2>
              <p className="text-xs text-[#8d9098]">
                We send instant SMS & email confirmations with calendar reminders.
              </p>
            </div>

            <div className="bg-[#121316] border border-[#24262c] p-6 sm:p-8 rounded-sm space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#a0a4ad] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={customer.name}
                  onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                  placeholder="e.g. Julian Montgomery"
                  className="w-full bg-[#181a1f] border border-[#2c2f37] focus:border-[#c5a880] px-4 py-3 text-sm text-[#f4f2ee] outline-none"
                />
                {errors.name && <p className="text-xs text-[#d65f5f] mt-1">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a0a4ad] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={customer.email}
                    onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                    placeholder="julian@example.com"
                    className="w-full bg-[#181a1f] border border-[#2c2f37] focus:border-[#c5a880] px-4 py-3 text-sm text-[#f4f2ee] outline-none"
                  />
                  {errors.email && <p className="text-xs text-[#d65f5f] mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a0a4ad] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={customer.phone}
                    onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                    placeholder="(619) 000-0000"
                    className="w-full bg-[#181a1f] border border-[#2c2f37] focus:border-[#c5a880] px-4 py-3 text-sm text-[#f4f2ee] outline-none"
                  />
                  {errors.phone && <p className="text-xs text-[#d65f5f] mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#a0a4ad] mb-2">
                  Special Requests / Haircut Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  value={customer.notes}
                  onChange={(e) => setCustomer({ ...customer, notes: e.target.value })}
                  placeholder="e.g. Skin taper fade on sides, textured top, beard shaping..."
                  className="w-full bg-[#181a1f] border border-[#2c2f37] focus:border-[#c5a880] px-4 py-3 text-sm text-[#f4f2ee] outline-none"
                />
              </div>

              <div className="pt-2 flex items-start gap-2.5 text-xs text-[#848792]">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  checked={customer.agreeTerms}
                  onChange={(e) => setCustomer({ ...customer, agreeTerms: e.target.checked })}
                  className="mt-0.5 accent-[#c5a880]"
                />
                <label htmlFor="agreeTerms">
                  I agree to Luxury Barber Lounge's appointment policies and understand cancellations within 2 hours may require rescheduling.
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Step 6: Review Appointment */}
        {step === 6 && (
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                Review Appointment
              </h2>
              <p className="text-xs text-[#8d9098]">
                Please verify your details before confirming your studio booking.
              </p>
            </div>

            <div className="bg-[#121316] border border-[#252830] rounded-sm p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-[#21232a]">
                <div className="space-y-3">
                  <span className="text-[10px] uppercase tracking-widest text-[#c5a880] font-semibold">
                    Selected Ritual
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-white">
                    {selectedService.title}
                  </h3>
                  <p className="text-xs text-[#8e929c] leading-relaxed">
                    {selectedService.shortDescription}
                  </p>
                  <div className="flex gap-4 text-xs font-mono text-[#a2a5b0] pt-1">
                    <span>Duration: {selectedService.duration}</span>
                    <span>Rate: {selectedService.priceDisplay}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="text-[10px] uppercase tracking-widest text-[#c5a880] font-semibold">
                    Scheduled Barber
                  </span>
                  <div className="flex items-center gap-3">
                    <img
                      src={selectedBarber.avatarImage || selectedBarber.image}
                      alt={selectedBarber.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-full object-cover border border-[#343741] bg-[#1a1c22]"
                    />
                    <div>
                      <h4 className="font-serif text-lg text-white font-medium">
                        {selectedBarber.name}
                      </h4>
                      <p className="text-xs text-[#8a8e97]">{selectedBarber.role}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-[#21232a] text-xs">
                <div>
                  <span className="text-[#6f737d] block mb-1 uppercase tracking-wider">Date</span>
                  <span className="text-sm font-medium text-white font-mono">{selectedDate}</span>
                </div>
                <div>
                  <span className="text-[#6f737d] block mb-1 uppercase tracking-wider">Time</span>
                  <span className="text-sm font-medium text-white font-mono">{selectedTime}</span>
                </div>
                <div>
                  <span className="text-[#6f737d] block mb-1 uppercase tracking-wider">Location</span>
                  <span className="text-sm font-medium text-white">
                    1401 Sixth Ave, San Diego, CA
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <span className="text-[#6f737d] block uppercase tracking-wider">Guest Information</span>
                <p className="text-sm text-white">{customer.name}</p>
                <p className="text-[#9ea1aa]">{customer.email} • {customer.phone}</p>
                {customer.notes && (
                  <p className="text-[#848892] italic pt-1">Notes: "{customer.notes}"</p>
                )}
              </div>

              <div className="p-4 bg-[#181a1f] border border-[#262830] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#8b8f99]">Estimated Service Total</span>
                  <p className="text-[11px] text-[#696d78]">Payment collected in studio upon completion</p>
                </div>
                <span className="font-serif text-3xl font-semibold text-[#c5a880]">
                  {selectedService.priceDisplay}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Step 7: Confirmation */}
        {step === 7 && (
          <div className="bg-[#121417] border border-[#282a32] rounded-sm p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-6">
            <div className="flex justify-center pb-2">
              <Logo size="md" variant="header" showTagline={true} />
            </div>

            <div className="w-16 h-16 bg-[#1f2229] border border-[#c5a880] text-[#c5a880] rounded-full flex items-center justify-center mx-auto shadow-lg">
              <Check className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
                Appointment Confirmed
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium">
                We Look Forward to Seeing You
              </h2>
              <p className="text-xs text-[#8e929c] max-w-md mx-auto">
                A confirmation has been prepared for <strong className="text-white">{customer.email}</strong>.
              </p>
            </div>

            <div className="p-4 bg-[#181a1f] border border-[#2a2c34] rounded max-w-md mx-auto text-left space-y-2 text-xs">
              <div className="flex justify-between border-b border-[#252830] pb-2">
                <span className="text-[#727680]">Confirmation ID</span>
                <span className="font-mono font-bold text-[#c5a880]">{confirmationCode}</span>
              </div>
              <div className="flex justify-between border-b border-[#252830] pb-2">
                <span className="text-[#727680]">Service</span>
                <span className="text-white">{selectedService.title}</span>
              </div>
              <div className="flex justify-between border-b border-[#252830] pb-2">
                <span className="text-[#727680]">Barber</span>
                <span className="text-white">{selectedBarber.name}</span>
              </div>
              <div className="flex justify-between border-b border-[#252830] pb-2">
                <span className="text-[#727680]">Date & Time</span>
                <span className="text-white font-mono">{selectedDate} @ {selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#727680]">Location</span>
                <span className="text-white">1401 Sixth Ave, San Diego</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/"
                className="px-6 py-3 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0c0d0e] font-semibold text-xs tracking-widest uppercase transition-all"
              >
                Return to Home
              </Link>
              <Link
                to="/services"
                className="px-6 py-3 bg-[#1c1e24] hover:bg-[#252830] text-[#e1e4eb] border border-[#343842] font-semibold text-xs tracking-widest uppercase transition-all"
              >
                Explore Services
              </Link>
            </div>
          </div>
        )}

        {/* Step navigation buttons */}
        {step < 7 && (
          <div className="mt-8 pt-6 border-t border-[#1f2228] flex justify-between items-center">
            {step > 1 ? (
              <button
                type="button"
                onClick={handlePrevStep}
                className="px-5 py-3 border border-[#2d3038] hover:bg-[#181a1f] text-[#cfd3dd] text-xs uppercase tracking-widest flex items-center gap-2 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back
              </button>
            ) : (
              <div />
            )}

            <button
              type="button"
              onClick={handleNextStep}
              className="px-8 py-3.5 bg-[#c5a880] hover:bg-[#d4b992] text-[#0c0d0e] font-semibold text-xs uppercase tracking-widest flex items-center gap-2 transition-all shadow-md"
            >
              {step === 6 ? 'Confirm Appointment' : 'Continue'} <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
