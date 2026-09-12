import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
  price?: string;
  action?: {
    label: string;
    to: string;
  };
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  subtitle,
  breadcrumbs,
  price,
  action
}) => {
  return (
    <div className="relative border-b border-[#1f2126] bg-[#0f1013] py-14 sm:py-20 overflow-hidden">
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {breadcrumbs && (
          <nav className="flex items-center gap-1.5 text-xs text-[#787c87] mb-6">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {breadcrumbs.map((bc, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5 text-[#4a4d55]" />
                {bc.href ? (
                  <Link to={bc.href} className="hover:text-white transition-colors">
                    {bc.label}
                  </Link>
                ) : (
                  <span className="text-[#c5a880]">{bc.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            {badge && (
              <span className="inline-block text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a880]">
                {badge}
              </span>
            )}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#f4f2ee] leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-sm sm:text-base text-[#9195a0] max-w-2xl leading-relaxed font-light">
                {subtitle}
              </p>
            )}
          </div>

          {(price || action) && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-shrink-0">
              {price && (
                <div className="text-left sm:text-right">
                  <span className="text-[10px] uppercase tracking-widest text-[#787c87] block">
                    Investment
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl text-[#c5a880] font-medium">
                    {price}
                  </span>
                </div>
              )}
              {action && (
                <Link
                  to={action.to}
                  className="px-6 py-3.5 bg-[#c5a880] hover:bg-[#d4b992] text-[#0c0d0e] text-xs font-semibold uppercase tracking-widest transition-all duration-200 shadow-md"
                >
                  {action.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
