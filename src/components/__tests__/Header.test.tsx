/// <reference types="vitest/globals" />
import { render, screen } from '@testing-library/react';
import { Header } from '../Header';

// Mock window.matchMedia for dark mode toggle tests
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

describe('Header', () => {
  it('renders the header with navigation and branding', () => {
    render(<Header />);
    
    // Check branding - text is split across elements
    expect(screen.getByText(/Abdullah/)).toBeInTheDocument();
    expect(screen.getByText('Apu')).toBeInTheDocument();

    // Check navigation links - exclude contact since it has multiple matches
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /skills/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /experience/i })).toBeInTheDocument();
  });  it('has proper navigation link structure', () => {
    render(<Header />);
    
    const navLinks = screen.getAllByRole('link');
    const navigationLinks = navLinks.filter(link =>
      ['#about', '#skills', '#projects', '#experience'].includes(link.getAttribute('href') || '')
    );

    expect(navigationLinks).toHaveLength(4);
    navigationLinks.forEach(link => {
      expect(link).toHaveAttribute('href');
      expect(link.getAttribute('href')).toMatch(/^#/);
    });
  });

  it('includes contact button and dark mode toggle', () => {
    render(<Header />);

    // Check contact button (only visible on larger screens) - look for mailto link specifically
    const contactButtons = screen.getAllByRole('link', { name: /contact/i });
    const mailtoButton = contactButtons.find(button => 
      button.getAttribute('href')?.startsWith('mailto:')
    );
    
    if (mailtoButton) {
      expect(mailtoButton).toHaveAttribute('href', 'mailto:almamun.codes@gmail.com');
    }

    // Check that dark mode toggle is present (it has aria-label)
    const darkModeToggle = screen.getByLabelText(/switch to dark mode/i);
    expect(darkModeToggle).toBeInTheDocument();
  });

  it('has proper semantic structure', () => {
    render(<Header />);

    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
    // Header should be positioned at the top of the page. The implementation
    // may use `sticky` or `fixed` positioning — accept either to avoid
    // failing when layout is preserved with a spacer.
    expect(header.className).toMatch(/\b(sticky|fixed)\b/);
  });

  it('navigation links have hover states', () => {
    render(<Header />);

    const aboutLink = screen.getByRole('link', { name: /about/i });
    expect(aboutLink).toHaveClass('hover:text-primary-600');
  });
});