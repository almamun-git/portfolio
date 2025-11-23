import { useState, useEffect, useCallback } from 'react';

const titles = [
  'Full-Stack Developer',
  'Mobile App Developer (React Native)',
  'Frontend Developer (React / Next.js)',
  'Backend Developer (Django, Java / Spring Boot)',
  'Software Engineer',
] as const;

export const AnimatedTitles = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  // Check for reduced motion preference (guard window for SSR/test environments)
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const updateText = useCallback(() => {
    const currentTitle = titles[currentIndex];
    
    if (prefersReducedMotion) {
      // For users who prefer reduced motion, just show static text
      setDisplayedText(currentTitle);
      return;
    }

    const typingSpeed = isDeleting ? 30 : 70; 

    if (isWaiting) return;

    const timeout = setTimeout(() => {
      if (!isDeleting && !isWaiting) {
        // Typing
        if (displayedText.length < currentTitle.length) {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        } else {
          // Finished typing, wait before deleting
          setIsWaiting(true);
          setTimeout(() => {
            setIsWaiting(false);
            setIsDeleting(true);
          }, 1500); // Shorter pause after typing
        }
      } else if (isDeleting) {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          // Finished deleting, wait before next title
          setIsWaiting(true);
          setTimeout(() => {
            setIsWaiting(false);
            setIsDeleting(false);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
          }, 300); // Even shorter pause before starting next title
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentIndex, displayedText, isDeleting, isWaiting, prefersReducedMotion]);

  useEffect(() => {
    const cleanup = updateText();
    return cleanup;
  }, [updateText]);

  return (
    <p 
      className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 min-h-[2.5rem] md:min-h-[2.5rem] leading-relaxed"
      aria-live={prefersReducedMotion ? 'off' : 'polite'}
      aria-label={prefersReducedMotion ? titles[currentIndex] : `Currently showing: ${displayedText}`}
    >
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-300 font-medium">
        {displayedText}
      </span>
      {!isWaiting && !prefersReducedMotion && (
        <span className="animate-pulse text-primary-500 dark:text-primary-400">|</span>
      )}
    </p>
  );
};