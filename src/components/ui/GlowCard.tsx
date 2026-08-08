import React from 'react';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  onClick?: () => void;
}

export const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = '',
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={`group relative rounded-xl bg-[#101219] border border-white/10 p-6 transition-all duration-300 hover:border-[#38bdf8]/40 hover:shadow-[0_0_25px_-5px_rgba(56,189,248,0.15)] ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Subtle Ambient Light Gradient on Card Top */}
      <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-b from-[#38bdf8]/10 via-transparent to-transparent" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
