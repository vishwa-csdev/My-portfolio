import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'outline' | 'mono';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = ''
}) => {
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs';

  let variantClasses = '';
  switch (variant) {
    case 'accent':
      variantClasses = 'bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20';
      break;
    case 'outline':
      variantClasses = 'bg-transparent text-slate-300 border border-white/10';
      break;
    case 'mono':
      variantClasses = 'bg-[#151824] text-slate-300 border border-white/10 font-mono';
      break;
    default:
      variantClasses = 'bg-[#161924] text-slate-300 border border-white/5';
  }

  return (
    <span className={`inline-flex items-center rounded-md font-medium tracking-wide transition-colors ${sizeClasses} ${variantClasses} ${className}`}>
      {children}
    </span>
  );
};
