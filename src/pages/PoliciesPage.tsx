import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ShieldCheck, Clock, FileText, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barberData';

export const PoliciesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#f4f2ee]">
      <PageHeader
        badge="Governance & Standards"
        title="Studio Policies & Guidelines"
        subtitle="Our shared commitment to punctuality, hygiene, respect, and exceptional grooming hospitality."
        breadcrumbs={[{ label: 'Policies' }]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 text-xs sm:text-sm text-[#9da1ad] leading-relaxed">
        <div className="bg-[#121316] border border-[#23252c] p-8 sm:p-10 rounded-sm space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-semibold">
              Appointment Integrity
            </span>
            <h2 className="font-serif text-2xl text-white font-medium">
              Cancellation & Punctuality Policy
            </h2>
            <p>
              We reserve our chair and barber time exclusively for you. Because each service includes unhurried consultations and precision razor work, we request a minimum of 24 hours advance notice for any rescheduling or cancellations. Late arrivals exceeding 15 minutes may require rescheduling to preserve subsequent appointments.
            </p>
          </div>

          <div className="space-y-2 pt-6 border-t border-[#1e2025]">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-semibold">
              Health & Safety
            </span>
            <h2 className="font-serif text-2xl text-white font-medium">
              Sanitation Standards
            </h2>
            <p>
              Luxury Barber Lounge adheres strictly to California Board of Barbering and Cosmetology guidelines. All straight razor blades are single-use disposable surgical steel, unwrapped in front of each guest. All clipper guards, shears, and brushes undergo hospital-grade Barbicide sterilization between every client.
            </p>
          </div>

          <div className="space-y-2 pt-6 border-t border-[#1e2025]">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-semibold">
              Lounge Atmosphere
            </span>
            <h2 className="font-serif text-2xl text-white font-medium">
              Guest Etiquette & Amenities
            </h2>
            <p>
              To maintain our calm, executive sanctuary, guests are asked to keep phone calls courteous and discreet. Complimentary beverages (including cold beer and refreshments) are served responsibly in accordance with local regulations to guests of legal drinking age.
            </p>
          </div>

          <div className="space-y-2 pt-6 border-t border-[#1e2025]">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-semibold">
              Employment Standards
            </span>
            <h2 className="font-serif text-2xl text-white font-medium">
              Barber Employee Handbook Summary
            </h2>
            <p>
              Our internal handbook mandates equal opportunity employment, strict anti-harassment safeguards, adherence to shop cleanliness checklists, continuous professional development, and respectful collaboration under the leadership of owner Antony.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
