import { useEffect, useState } from 'react';

export function DarkModeToggle() {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    setIsTransitioning(true);
    
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    // Reset transition state after a short delay
    const timer = setTimeout(() => setIsTransitioning(false), 150);
    return () => clearTimeout(timer);
  }, [dark]);

  const toggleTheme = () => {
    setDark(d => !d);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}
      aria-pressed={dark}
      className={`
        h-9 w-9 inline-flex items-center justify-center rounded-md border 
        border-neutral-300 dark:border-neutral-700 
        hover:bg-neutral-100 dark:hover:bg-neutral-800 
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        transition-all duration-200 ease-in-out
        ${isTransitioning ? 'scale-95' : 'scale-100'}
      `}
      disabled={isTransitioning}
    >
      <span className="sr-only">{dark ? 'Switch to light mode' : 'Switch to dark mode'}</span>
      <div className="relative w-5 h-5">
        <svg 
          aria-hidden="true" 
          focusable="false" 
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            dark ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
          }`} 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <title>Sun icon</title>
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.071 6.071-1.414-1.414M8.343 9.657 6.929 8.243m0 7.314 1.414-1.414M15.657 8.343l1.414-1.414"/>
        </svg>
        <svg 
          aria-hidden="true" 
          focusable="false" 
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            dark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
          }`} 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <title>Moon icon</title>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      </div>
    </button>
  );
}
