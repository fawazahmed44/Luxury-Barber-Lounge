import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { FileText, ShieldCheck, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ContractorAgreementPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#f4f2ee]">
      <PageHeader
        badge="Legal & Professional Structure"
        title="Independent Contractor Agreement"
        subtitle="Transparent framework defining the professional partnership between Luxury Barber Lounge and licensed barber contractors."
        breadcrumbs={[
          { label: 'Careers', href: '/hiring' },
          { label: 'Contractor Agreement' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-xs sm:text-sm text-[#9da1ad] leading-relaxed">
        <div className="bg-[#121316] border border-[#23252c] p-8 sm:p-10 rounded-sm space-y-6">
          <div className="space-y-2">
            <h2 className="font-serif text-2xl text-white font-medium">
              1. Professional Independence & Schedule Autonomy
            </h2>
            <p>
              Licensed barbers engaged as independent contractors maintain sovereignty over their craft, booking preferences, and personalized client styling methods while adhering to the core quality and cleanliness standards of Luxury Barber Lounge at 1401 Sixth Ave.
            </p>
          </div>

          <div className="space-y-2 pt-6 border-t border-[#1e2025]">
            <h2 className="font-serif text-2xl text-white font-medium">
              2. Facility, Chair & Premium Amenities
            </h2>
            <p>
              Contractors receive access to premier barber stations, hydraulic vintage-inspired reclining chairs, high-velocity wash basins, towel steamers, laundry services, and high-end studio client waiting areas with complimentary guest beverages.
            </p>
          </div>

          <div className="space-y-2 pt-6 border-t border-[#1e2025]">
            <h2 className="font-serif text-2xl text-white font-medium">
              3. Licensing & Compliance
            </h2>
            <p>
              All barbers must maintain an active, valid Barber License issued by the California Board of Barbering and Cosmetology, as well as required local San Diego business licenses and professional liability insurance.
            </p>
          </div>

          <div className="pt-6 border-t border-[#1e2025] flex justify-between items-center">
            <span className="text-xs text-[#7e828e]">
              Ready to submit your barber application?
            </span>
            <Link
              to="/become-a-barber"
              className="px-6 py-2.5 bg-[#c5a880] text-[#0c0d0e] font-semibold text-xs uppercase tracking-wider"
            >
              Apply Online
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
