import React from 'react';
import { AccentColor } from '../../types';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  accent?: AccentColor;
  onClick?: () => void;
}

export const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = '',
  accent = 'cyan',
  onClick
}) => {
  const getAccentStyles = () => {
    switch (accent) {
      case 'indigo':
      case 'violet':
        return {
          hoverBorder: 'hover:border-[#818cf8]/40',
          hoverShadow: 'hover:shadow-[0_0_35px_-5px_rgba(129,140,248,0.2)]',
          gradient: 'from-[#818cf8]/12 via-transparent to-transparent'
        };
      case 'emerald':
        return {
          hoverBorder: 'hover:border-[#34d399]/40',
          hoverShadow: 'hover:shadow-[0_0_35px_-5px_rgba(52,211,153,0.2)]',
          gradient: 'from-[#34d399]/12 via-transparent to-transparent'
        };
      case 'amber':
        return {
          hoverBorder: 'hover:border-[#fbbf24]/40',
          hoverShadow: 'hover:shadow-[0_0_35px_-5px_rgba(251,191,36,0.2)]',
          gradient: 'from-[#fbbf24]/12 via-transparent to-transparent'
        };
      case 'rose':
        return {
          hoverBorder: 'hover:border-[#f43f5e]/40',
          hoverShadow: 'hover:shadow-[0_0_35px_-5px_rgba(244,63,94,0.2)]',
          gradient: 'from-[#f43f5e]/12 via-transparent to-transparent'
        };
      case 'cyan':
      default:
        return {
          hoverBorder: 'hover:border-[#38bdf8]/40',
          hoverShadow: 'hover:shadow-[0_0_35px_-5px_rgba(56,189,248,0.2)]',
          gradient: 'from-[#38bdf8]/12 via-transparent to-transparent'
        };
    }
  };

  const { hoverBorder, hoverShadow, gradient } = getAccentStyles();

  return (
    <div
      onClick={onClick}
      className={`group relative rounded-2xl bg-[#08090e] border border-white/[0.08] p-6 sm:p-7 transition-all duration-300 ${hoverBorder} ${hoverShadow} ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {/* Dynamic Multi-Accent Top Ambient Sheen */}
      <div
        className={`pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-b ${gradient}`}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
