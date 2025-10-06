import type { ReactNode } from 'react';

interface SectionProps { 
  id?: string; 
  title?: string; 
  subtitle?: string; 
  children: ReactNode; 
  className?: string;
  headerClassName?: string;
  titleLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  centered?: boolean;
  maxWidth?: 'none' | 'prose' | 'screen-sm' | 'screen-md' | 'screen-lg' | 'screen-xl';
}

export function Section({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '', 
  headerClassName = '',
  titleLevel = 'h2',
  centered = false,
  maxWidth = 'none'
}: SectionProps) {
  const TitleComponent = titleLevel;
  
  const maxWidthClasses = {
    'none': '',
    'prose': 'max-w-prose mx-auto',
    'screen-sm': 'max-w-screen-sm mx-auto',
    'screen-md': 'max-w-screen-md mx-auto', 
    'screen-lg': 'max-w-screen-lg mx-auto',
    'screen-xl': 'max-w-screen-xl mx-auto',
  };

  return (
    <section 
      id={id} 
      className={`container-section scroll-mt-24 ${maxWidthClasses[maxWidth]} ${className}`}
      aria-labelledby={title ? `${id}-title` : undefined}
    >
      {(title || subtitle) && (
        <header className={`mb-10 ${centered ? 'text-center' : ''} ${headerClassName}`}>
          {subtitle && (
            <p className="text-xs uppercase tracking-wider text-primary-600 dark:text-primary-400 font-semibold mb-2">
              {subtitle}
            </p>
          )}
          {title && (
            <TitleComponent 
              id={`${id}-title`}
              className="text-2xl md:text-3xl font-bold tracking-tight text-balance"
            >
              {title}
            </TitleComponent>
          )}
        </header>
      )}
      <div className={centered ? 'mx-auto' : ''}>
        {children}
      </div>
    </section>
  );
}
