import type { ReactNode } from 'react';

interface SectionProps { id?: string; title?: string; subtitle?: string; children: ReactNode; className?: string }
export function Section({ id, title, subtitle, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`container-section scroll-mt-24 ${className}`}>
      {(title || subtitle) && (
        <header className="mb-10">
          {subtitle && <p className="text-xs uppercase tracking-wider text-primary-600 dark:text-primary-400 font-semibold mb-2">{subtitle}</p>}
          {title && <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-balance">{title}</h2>}
        </header>
      )}
      {children}
    </section>
  );
}
