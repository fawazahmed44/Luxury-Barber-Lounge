import React from 'react';
import { SERVICES } from '../data/barberData';
import { ServiceDetailLayout } from '../components/ServiceDetailLayout';
import { Sparkles } from 'lucide-react';

export const HairCutBeardPage: React.FC = () => {
  const service = SERVICES.find((s) => s.id === 'hair-cut-beard') || SERVICES[3];

  const journey = [
    { step: '01', title: 'Haircut Architecture', description: 'Choose your desired fade: high fade, mid fade, drop fade, taper fade, or gentleman cut with scissor texturing.' },
    { step: '02', title: 'Beard Trimming & Blend', description: 'Clipper length graduation and blending connecting sideburns smoothly into the beard body.' },
    { step: '03', title: 'Straight Razor Sharpening', description: 'Cheek lines, neckline, and mustache lines carved with single-blade straight razor precision.' },
    { step: '04', title: 'Hair Fiber Enhancement', description: 'Micro-fine natural hair fibers applied along the edges and beard perimeter for razor-sharp definition.' },
    { step: '05', title: 'Nourishing Hydration', description: 'Finishing with conditioning beard oils, balms, and styling product for a polished look.' }
  ];

  return (
    <ServiceDetailLayout
      service={service}
      badge="Complete Grooming Transformation • $55"
      ritualSteps={journey}
      ctaLabel="Book This Service"
      customCallout={
        <div className="p-5 bg-[#14161b] border border-[#262831] space-y-2 text-xs text-[#9aa0ae]">
          <div className="flex items-center gap-2 text-[#c5a880] font-medium uppercase tracking-wider text-[10px]">
            <Sparkles className="w-3.5 h-3.5" />
            Edge Definition With Hair Fibers
          </div>
          <p>
            To achieve high-definition contrast, our barbers apply cosmetic hair fibers around your perimeter and beard boundaries, locking in symmetry and crisp lines that stand out in photography and daily life.
          </p>
        </div>
      }
    />
  );
};
