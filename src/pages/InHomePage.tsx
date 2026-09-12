import React from 'react';
import { SERVICES } from '../data/barberData';
import { ServiceDetailLayout } from '../components/ServiceDetailLayout';
import { Home, Beer, Check, Sparkles } from 'lucide-react';

export const InHomePage: React.FC = () => {
  const service = SERVICES.find((s) => s.id === 'in-home-service') || SERVICES[5];

  const inHomeJourney = [
    { step: '01', title: 'Arrival & Station Setup', description: 'Your master barber arrives at your home, hotel suite, or private office with sterilized mobile equipment and floor protection.' },
    { step: '02', title: 'Personal Consultation', description: 'Private consultation in the comfort and discretion of your own residence.' },
    { step: '03', title: 'Precision Cut & Razor Fade', description: 'Bespoke scissor or fade work executed to the exacting standards of our Downtown lounge.' },
    { step: '04', title: 'Razor Detailing & Eyebrow Cleanup', description: 'Clean line work, straight razor edging, and eyebrow grooming upon request.' },
    { step: '05', title: 'Hairstyle & Pristine Cleanup', description: 'Finishing product application, complimentary cold beer, and leave-no-trace cleanup.' }
  ];

  return (
    <ServiceDetailLayout
      service={service}
      badge="Private Concierge Grooming • $325"
      ritualSteps={inHomeJourney}
      ctaLabel="Request In-Home Service"
      customCallout={
        <div className="space-y-4">
          <div className="p-5 bg-[#14151a] border border-[#252832] flex items-start gap-3.5 text-xs text-[#9ba0ad]">
            <div className="w-8 h-8 rounded-full bg-[#1e2129] border border-[#353844] flex items-center justify-center flex-shrink-0 text-[#c5a880]">
              <Home className="w-4 h-4" />
            </div>
            <div>
              <strong className="text-white font-medium block text-sm">We Come To You</strong>
              Enjoy maximum convenience, total privacy, and executive focus without fighting traffic or sitting in waiting rooms. We travel throughout Downtown San Diego, La Jolla, Bankers Hill, and neighboring areas.
            </div>
          </div>

          <div className="p-4 bg-[#111317] border border-[#202228] text-xs text-[#7d818c]">
            <span className="text-[#c5a880] font-medium block mb-1">Pricing Context:</span>
            While introductory overview tables reference baseline services from $85, our full dedicated private mobile barber travel experience is $325 to reflect white-glove equipment transit, dedicated travel time, and private 1-on-1 concierge attention.
          </div>
        </div>
      }
    />
  );
};
