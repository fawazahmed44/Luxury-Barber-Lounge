import React from 'react';
import { SERVICES } from '../data/barberData';
import { ServiceDetailLayout } from '../components/ServiceDetailLayout';

export const FullServicePage: React.FC = () => {
  const service = SERVICES.find((s) => s.id === 'full-service') || SERVICES[0];

  const customJourney = [
    { step: '01', title: 'Consultation / Cut', description: 'Collaborative analysis of desired style: taper fade, drop fade, or classic gentleman cut tailored to head structure.' },
    { step: '02', title: 'Detail Work', description: 'Meticulous eyebrow cleanup, ear hair grooming, and fine razor outline perimeter finishing.' },
    { step: '03', title: 'Hot Towel Shave', description: 'Steamed infused towels, rich hot lather shaving cream, and razor beard shaping.' },
    { step: '04', title: 'Wash & Condition', description: 'Scalp cleansing shampoo and hydrating conditioning treatment at the wash basin.' },
    { step: '05', title: 'Styling', description: 'Blow-dry architecture with your choice of premium gel, dry matte clay, or Papi Style styling powder.' }
  ];

  return (
    <ServiceDetailLayout
      service={service}
      badge="Full Service Hair Cuts • $65"
      ritualSteps={customJourney}
      ctaLabel="Book This Service"
      customCallout={
        <div className="p-4 bg-[#16171d] border border-[#272a33] text-xs text-[#a5a9b5] space-y-1">
          <span className="text-[#c5a880] font-medium block">Choice of Finishing Product:</span>
          <span>Select between premium styling gel, natural dry clay, or our signature Papi Style hair styling powder for matte volume.</span>
        </div>
      }
    />
  );
};
