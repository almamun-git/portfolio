import { profile } from '../data';
import { TechIcon } from './TechIcon';

const navigation = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' }
] as const;

const keyTechnologies = [
  'React',
  'TypeScript',
  'Django/DRF',
  'PostgreSQL',
  'AWS (S3, CloudFront)',
  'Docker'
] as const;

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

export function Footer() {
  return (
    <footer className="relative sm:mt-24 lg:mt-32 border-t border-neutral-200/60 dark:border-neutral-800 pt-16 pb-10 overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-primary-600/10" />
      <div className="container-section relative z-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight">{profile.name}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xs">Full-Stack / Frontend Developer focused on performant, scalable, accessible applications.</p>
            <div className="flex gap-4 text-neutral-500 dark:text-neutral-400">
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors" aria-label="Visit GitHub profile">
                <TechIcon name="Git/GitHub" size={20} />
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors" aria-label="Visit LinkedIn profile">
                <svg className="h-5 w-5" role="img" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <title>LinkedIn</title>
                  <path d="M4.98 3.5a2.5 2.5 0 11-.02 5.001 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.71h.05c.53-.95 1.83-1.96 3.77-1.96 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.16c0-1.23-.02-2.81-1.71-2.81-1.71 0-1.97 1.34-1.97 2.72V21H9z"/>
                </svg>
              </a>
              <a href={`mailto:${profile.email}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors" aria-label="Send email">
                <svg className="h-5 w-5" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <title>Email</title>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z"/><path d="m22 6-10 7L2 6"/>
                </svg>
              </a>
            </div>
          </div>
          <nav className="md:mx-auto" aria-label="Footer navigation">
            <h4 className="text-sm font-semibold tracking-wide uppercase mb-4 text-neutral-700 dark:text-neutral-300">Navigate</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {navigation.map(item => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wide uppercase text-neutral-700 dark:text-neutral-300">Key Stack</h4>
            <ul className="flex flex-wrap gap-3 text-xs">
              {keyTechnologies.map(tech => (
                <li 
                  key={tech} 
                  className="flex items-center gap-1 px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                >
                  <TechIcon name={tech} size={14} /> 
                  {tech.replace(' (S3, CloudFront)', '')}
                </li>
              ))}
            </ul>
            <div className="pt-2 text-xs text-neutral-500 dark:text-neutral-500 leading-relaxed">
              <p>Built with React, TypeScript, Tailwind. Deployed as static assets.</p>
              <p className="mt-1">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between gap-4 border-t border-neutral-200/60 dark:border-neutral-800 pt-6 text-xs text-neutral-500">
          <p>Last update: {new Date().toISOString().split('T')[0]}</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 bg-neutral-900 text-white dark:bg-neutral-200 dark:text-neutral-900 text-xs font-medium hover:bg-primary-600 dark:hover:bg-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 transition-colors"
            aria-label="Scroll to top of page"
          >
            Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
