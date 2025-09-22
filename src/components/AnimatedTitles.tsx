import { useState, useEffect } from 'react';

const titles = [
  'Full-Stack Software Developer',
  'Frontend Developer (React / Next.js)',
  'Backend Developer (Django, Java / Spring Boot)',
  'Mobile App Developer (React Native)',
  'Software Engineer',
];

export const AnimatedTitles = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const typingSpeed = isDeleting ? 75 : 150; // Slower typing for smoother effect

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
          }, 2500); // Longer pause after typing
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
          }, 1000); // Pause before starting next title
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentIndex, isWaiting]);

  return (
    <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 min-h-[2.5rem] md:min-h-[2.5rem] leading-relaxed">
      {displayedText}
      {!isWaiting && <span className="animate-pulse">|</span>}
    </p>
  );
};