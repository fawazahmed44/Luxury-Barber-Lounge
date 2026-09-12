import React from 'react';
import { SERVICES } from '../data/barberData';
import { ServiceDetailLayout } from '../components/ServiceDetailLayout';
import { Wine, Cigarette, Sparkles } from 'lucide-react';

export const GodfatherCutPage: React.FC = () => {
  const service = SERVICES.find((s) => s.id === 'godfather-cut') || SERVICES[4];

  const godfatherJourney = [
    { step: '01', title: 'The Welcome Pour', description: 'Begin your appointment with your choice of a fine shot of whiskey or tequila, accompanied by a chilled beer and a hand-selected cigar.' },
    { step: '02', title: 'Scalp Therapy & Wash', description: 'Deep cleansing hair wash and therapeutic scalp massage at the wash basin.' },
    { step: '03', title: 'Master Haircut', description: 'Tailored haircut architecture and razor work crafted by senior barber hands without hurry.' },
    { step: '04', title: 'Hot Towel Shave', description: 'Full traditional hot towel shave with steamed towels, rich lather, and straight razor passes.' },
    { step: '05', title: 'Bespoke Hair Styling', description: 'Final blow-dry sculpting and styling with premium pomade, matte clay, or Papi Style powder.' }
  ];

  return (
    <ServiceDetailLayout
      service={service}
      badge="The VIP Indulgence • $150"
      ritualSteps={godfatherJourney}
      accentTone="cinematic"
      ctaLabel="Book the Godfather Cut"
      customCallout={
        <div className="p-6 bg-[#101114] border border-[#2d2f38] space-y-3 text-xs text-[#a0a4b0]">
          <div className="flex items-center gap-3 text-[#c5a880] font-medium uppercase tracking-wider text-[11px]">
            <Wine className="w-4 h-4" />
            <Cigarette className="w-4 h-4" />
            Exclusive Lounge Amenities Included
          </div>
          <p className="leading-relaxed">
            The Godfather Cut is reserved for gentlemen desiring an unhurried, all-inclusive grooming sanctuary. The package factually includes a haircut, hair wash, traditional hot towel shave, hairstyling, complimentary beer, a shot of premium whiskey or aged tequila, and a fine cigar to enjoy.
          </p>
        </div>
      }
    />
  );
};
