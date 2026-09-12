import React from 'react';
import { SERVICES } from '../data/barberData';
import { ServiceDetailLayout } from '../components/ServiceDetailLayout';
import { Sparkles, ShieldCheck } from 'lucide-react';

export const HairColorPage: React.FC = () => {
  const service = SERVICES.find((s) => s.id === 'hair-color') || SERVICES[6];

  const colorJourney = [
    { step: '01', title: 'Color Assessment', description: 'Deep analysis of natural hair pigmentation, percentage of gray, undertones, and hair porosity.' },
    { step: '02', title: 'Formula Customization', description: 'Blending high-end salon conditioning formulas for gray blending, natural darkening, or fashion-forward creative colors.' },
    { step: '03', title: 'Targeted Application', description: 'Careful root or perimeter brush work ensuring natural diffusion without harsh demarcation lines.' },
    { step: '04', title: 'Nourishing Rinse & Bond Care', description: 'Cool water rinse, pH restoration shampoo, and intensive conditioning treatment.' },
    { step: '05', title: 'Cut & Style Harmonization', description: 'Blending the haircut to celebrate the newly restored tone and healthy shine.' }
  ];

  return (
    <ServiceDetailLayout
      service={service}
      badge="Custom Formulation • $250"
      ritualSteps={colorJourney}
      ctaLabel="Book Hair Color"
      customCallout={
        <div className="p-5 bg-[#14151a] border border-[#252832] space-y-3 text-xs text-[#9ba0ad]">
          <div className="flex items-center gap-2 text-[#c5a880] font-medium uppercase tracking-wider text-[10px]">
            <ShieldCheck className="w-4 h-4" />
            Commitment to Hair Health & Natural Blending
          </div>
          <p className="leading-relaxed">
            Our specialized color treatments prioritize hair health above all. We utilize gentle, ammonia-balanced formulations enriched with natural conditioning agents. Whether you are blending silver temples for an understated distinguished look or seeking a bold creative tone, results look refined and seamless.
          </p>
        </div>
      }
    />
  );
};
