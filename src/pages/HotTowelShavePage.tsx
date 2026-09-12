import React from 'react';
import { SERVICES } from '../data/barberData';
import { ServiceDetailLayout } from '../components/ServiceDetailLayout';
import { Sparkles } from 'lucide-react';

export const HotTowelShavePage: React.FC = () => {
  const service = SERVICES.find((s) => s.id === 'hot-towel-shave') || SERVICES[2];

  const ritualSequence = [
    { step: '01', title: 'PREP', description: 'Facial oil massage to nourish skin, soften facial bristles, and create an irritation barrier.' },
    { step: '02', title: 'STEAM', description: 'Steamed hot towels wrapped gently around the face for deep follicle relaxation and skin softening.' },
    { step: '03', title: 'LATHER', description: 'Rich hot lather whipped and applied with traditional badger-hair brush to cushion every pass.' },
    { step: '04', title: 'SHAVE', description: 'Traditional straight razor shave executed with precision single-blade angles across all facial planes.' },
    { step: '05', title: 'FINISH', description: 'Cold towel compression to seal pores, accompanied by calming aftershave balm and invigorating splash.' }
  ];

  return (
    <ServiceDetailLayout
      service={service}
      badge="Traditional Shave Ritual • $35"
      ritualSteps={ritualSequence}
      accentTone="ritual"
      ctaLabel="Book Hot Towel Shave"
      customCallout={
        <div className="p-5 bg-[#14161b] border border-[#262831] space-y-2 text-xs text-[#9aa0ae]">
          <div className="flex items-center gap-2 text-[#c5a880] font-medium uppercase tracking-wider text-[10px]">
            <Sparkles className="w-3.5 h-3.5" />
            The Classical Straight-Razor Tradition
          </div>
          <p>
            Our straight razor hot towel shave is a restorative pause in your day. Using warmed botanical oils, freshly steamed towels, and rich whipped lather, we deliver ultra-smooth results that electric shavers simply cannot replicate.
          </p>
        </div>
      }
    />
  );
};
