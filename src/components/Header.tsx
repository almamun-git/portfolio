import { DarkModeToggle } from './DarkModeToggle';
import { profile } from '../data';

const NAV = ['About','Skills','Projects','Experience','Contact'];

export function Header() {
  return (
  <div className="sticky top-3 z-30 mx-2 sm:mx-4 mt-4 lg:mt-5">
    <header className="container-section flex items-center justify-between py-4 px-3 sm:px-4 gap-6 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-900/70 border border-neutral-200/60 dark:border-neutral-800 rounded-xl transition-all duration-300">
      <a href="#home" className="font-semibold tracking-tight text-lg whitespace-nowrap">
        {profile.name.split(' ')[0]} <span className="text-primary-600 dark:text-primary-400">Apu</span>
      </a>
      <nav className="hidden md:flex gap-6 text-sm font-medium">
        {NAV.map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            {item}
          </a>
        ))}
      </nav>
      <div className="ml-auto flex items-center gap-3">
        <DarkModeToggle />
        <a
          href="mailto:almamun.codes@gmail.com"
          className="hidden sm:inline-flex items-center rounded-md bg-primary-600 text-white px-3 py-2 text-sm font-medium shadow hover:bg-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"
        >
          Contact
        </a>
      </div>
    </header>
  </div>
  );
}
