import React from 'react';

interface LogoProps {
  variant?: 'header' | 'light' | 'dark' | 'gold' | 'emblem-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
  id?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'header',
  size = 'md',
  showTagline = true,
  className = '',
  id = 'brand-logo',
}) => {
  // Dimensions for emblem
  const emblemSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10 sm:w-11 sm:h-11',
    lg: 'w-14 h-14 sm:w-16 sm:h-16',
    xl: 'w-20 h-20 sm:w-24 sm:h-24',
  };

  const titleSizes = {
    sm: 'text-sm sm:text-base tracking-[0.08em]',
    md: 'text-lg sm:text-xl tracking-[0.1em]',
    lg: 'text-2xl sm:text-3xl tracking-[0.12em]',
    xl: 'text-3xl sm:text-4xl tracking-[0.14em]',
  };

  const taglineSizes = {
    sm: 'text-[7.5px] sm:text-[8px] tracking-[0.24em]',
    md: 'text-[9px] sm:text-[10px] tracking-[0.28em]',
    lg: 'text-[11px] sm:text-xs tracking-[0.32em]',
    xl: 'text-xs sm:text-sm tracking-[0.36em]',
  };

  const titleColor =
    variant === 'light'
      ? 'text-[#111827]'
      : variant === 'gold'
      ? 'text-[#e6cfa8]'
      : 'text-[#f4f2ee]';

  const taglineColor =
    variant === 'light'
      ? 'text-[#374151]'
      : variant === 'gold'
      ? 'text-[#c5a880]'
      : 'text-[#a7aab2]';

  // SVG unique gradient IDs
  const gradId = React.useId().replace(/:/g, '');

  return (
    <div id={id} className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Medallion Emblem with Barber Pole */}
      <div className={`relative flex-shrink-0 ${emblemSizes[size]}`}>
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          <defs>
            <linearGradient id={`silverRing_${gradId}`} x1="15%" y1="10%" x2="85%" y2="95%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="25%" stopColor="#e5e7eb" />
              <stop offset="50%" stopColor="#9ca3af" />
              <stop offset="75%" stopColor="#d1d5db" />
              <stop offset="100%" stopColor="#4b5563" />
            </linearGradient>

            <linearGradient id={`silverCap_${gradId}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#374151" />
              <stop offset="30%" stopColor="#d1d5db" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="70%" stopColor="#9ca3af" />
              <stop offset="100%" stopColor="#1f2937" />
            </linearGradient>

            <clipPath id={`poleClip_${gradId}`}>
              <rect x="52" y="38" width="16" height="44" rx="2" />
            </clipPath>
          </defs>

          {/* Outer Metallic Ring */}
          <circle
            cx="60"
            cy="60"
            r="48"
            stroke={`url(#silverRing_${gradId})`}
            strokeWidth="5"
            fill="none"
          />
          <circle
            cx="60"
            cy="60"
            r="44"
            stroke="#9ca3af"
            strokeWidth="0.8"
            fill="none"
            opacity="0.6"
          />

          {/* Barber Pole Art */}
          {/* Top Sphere Finial */}
          <circle
            cx="60"
            cy="23"
            r="3.5"
            fill={`url(#silverCap_${gradId})`}
            stroke="#111827"
            strokeWidth="0.7"
          />

          {/* Top Tier 1 */}
          <path
            d="M57 26.2 C57 25 63 25 63 26.2 L64 29 L56 29 Z"
            fill={`url(#silverCap_${gradId})`}
            stroke="#111827"
            strokeWidth="0.6"
          />

          {/* Top Main Flared Crown */}
          <path
            d="M54 29 L66 29 L67 34 L53 34 Z"
            fill={`url(#silverCap_${gradId})`}
            stroke="#111827"
            strokeWidth="0.7"
          />
          <rect
            x="51"
            y="34"
            width="18"
            height="4"
            rx="1"
            fill={`url(#silverCap_${gradId})`}
            stroke="#111827"
            strokeWidth="0.7"
          />

          {/* Glass Cylinder with clipped spiral stripes */}
          <rect
            x="52"
            y="38"
            width="16"
            height="44"
            rx="1"
            fill="#ffffff"
            stroke="#111827"
            strokeWidth="1.2"
          />

          <g clipPath={`url(#poleClip_${gradId})`}>
            <rect x="52" y="38" width="16" height="44" fill="#ffffff" />
            {/* Diagonal black/dark stripes */}
            <polygon points="48,36 60,36 74,52 74,57" fill="#111827" />
            <polygon points="48,46 60,46 74,62 74,67" fill="#111827" />
            <polygon points="48,56 60,56 74,72 74,77" fill="#111827" />
            <polygon points="48,66 60,66 74,82 74,87" fill="#111827" />
            <polygon points="48,76 60,76 74,92 74,97" fill="#111827" />
            {/* Glass reflection sheen */}
            <rect x="54" y="38" width="2" height="44" fill="#ffffff" opacity="0.6" />
          </g>

          {/* Bottom Collar */}
          <rect
            x="51"
            y="82"
            width="18"
            height="4"
            rx="1"
            fill={`url(#silverCap_${gradId})`}
            stroke="#111827"
            strokeWidth="0.7"
          />

          {/* Bottom Flared Cup */}
          <path
            d="M53 86 L67 86 L65 91 L55 91 Z"
            fill={`url(#silverCap_${gradId})`}
            stroke="#111827"
            strokeWidth="0.7"
          />

          {/* Bottom Finial Base & Ball */}
          <path
            d="M56 91 L64 91 L62 94 L58 94 Z"
            fill={`url(#silverCap_${gradId})`}
            stroke="#111827"
            strokeWidth="0.6"
          />
          <circle
            cx="60"
            cy="96.5"
            r="3"
            fill={`url(#silverCap_${gradId})`}
            stroke="#111827"
            strokeWidth="0.7"
          />
        </svg>
      </div>

      {/* Typography: LUXURY BARBER LOUNGE / A LAVISH HAIRCUT EXPERIENCE */}
      {variant !== 'emblem-only' && (
        <div className="flex flex-col justify-center">
          <span
            className={`font-sans font-bold uppercase leading-none transition-colors ${titleSizes[size]} ${titleColor}`}
          >
            Luxury Barber Lounge
          </span>
          {showTagline && (
            <span
              className={`font-sans uppercase font-medium mt-1 leading-none ${taglineSizes[size]} ${taglineColor}`}
            >
              A Lavish Haircut Experience
            </span>
          )}
        </div>
      )}
    </div>
  );
};
