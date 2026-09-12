import React from 'react';
import { SERVICES } from '../data/barberData';
import { ServiceDetailLayout } from '../components/ServiceDetailLayout';
import { Beer, Scissors, Check } from 'lucide-react';

export const FadesPage: React.FC = () => {
  const service = SERVICES.find((s) => s.id === 'fades') || SERVICES[1];

  const fadeJourney = [
    { step: '01', title: 'Fade Mapping', description: 'Assessing bone contours and natural hair growth patterns to map the optimal transition line.' },
    { step: '02', title: 'Razor Fade Graduation', description: 'Micro-lever adjustments creating a seamless gradient from raw skin to desired top density.' },
    { step: '03', title: 'Perimeter & Lineup', description: 'Cleaning excess hair around the lineup and etching a surgically fine straight-razor edge.' },
    { step: '04', title: 'Cold Beer & Polish', description: 'Complimentary cold beer served while your barber executes eyebrow cleanup and tailored hair finishing.' }
  ];

  return (
    <ServiceDetailLayout
      service={service}
      badge="Fades & Precision Hair Cuts • $45"
      ritualSteps={fadeJourney}
      ctaLabel="Book Appointment"
      customCallout={
        <div className="p-4 bg-[#15171d] border border-[#262a34] flex items-center gap-3 text-xs text-[#a2a6b2]">
          <div className="w-8 h-8 rounded-full bg-[#1e222a] border border-[#373b45] flex items-center justify-center flex-shrink-0 text-[#c5a880]">
            <Beer className="w-4 h-4" />
          </div>
          <div>
            <strong className="text-white font-medium">Complimentary Cold Beer:</strong> Enjoy a cold beer on the house during your fade and lineup service at Luxury Barber Lounge.
          </div>
        </div>
      }
    />
  );
};
