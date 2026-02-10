import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'dark' | 'gradient';
  containerClassName?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  background = 'white',
  containerClassName = '',
}) => {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-slate-50',
    dark: 'bg-slate-950 text-white',
    gradient: 'bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white',
  };

  return (
    <section id={id} className={`py-20 md:py-28 relative overflow-hidden ${bgClasses[background]} ${className}`}>
      <div className={`container mx-auto px-4 md:px-6 lg:px-8 max-w-screen-2xl relative z-10 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};