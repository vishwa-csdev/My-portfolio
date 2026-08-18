import React from 'react';
import { AccentColor } from '../../types';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'outline' | 'mono';
  accent?: AccentColor;
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  accent = 'cyan',
  size = 'md',
  className = ''
}) => {
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs';

  let variantClasses = '';

  if (variant === 'accent') {
    switch (accent) {
      case 'indigo':
      case 'violet':
        variantClasses = 'bg-[#818cf8]/12 text-[#a5b4fc] border border-[#818cf8]/30 font-medium';
        break;
      case 'emerald':
        variantClasses = 'bg-[#34d399]/12 text-[#6ee7b7] border border-[#34d399]/30 font-medium';
        break;
      case 'amber':
        variantClasses = 'bg-[#fbbf24]/12 text-[#fcd34d] border border-[#fbbf24]/30 font-medium';
        break;
      case 'rose':
        variantClasses = 'bg-[#f43f5e]/12 text-[#fda4af] border border-[#f43f5e]/30 font-medium';
        break;
      case 'cyan':
      default:
        variantClasses = 'bg-[#38bdf8]/12 text-[#7dd3fc] border border-[#38bdf8]/30 font-medium';
    }
  } else if (variant === 'mono') {
    variantClasses = 'bg-[#0e1018] text-slate-300 border border-white/[0.08] font-mono text-[11px]';
  } else if (variant === 'outline') {
    variantClasses = 'bg-transparent text-slate-300 border border-white/[0.12]';
  } else {
    variantClasses = 'bg-[#0f1118] text-slate-300 border border-white/[0.06]';
  }

  return (
    <span
      className={`inline-flex items-center rounded-lg tracking-wide transition-all ${sizeClasses} ${variantClasses} ${className}`}
    >
      {children}
    </span>
  );
};
