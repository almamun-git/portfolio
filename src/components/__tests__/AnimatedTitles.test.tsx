import '@testing-library/jest-dom/vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { AnimatedTitles } from '../AnimatedTitles';

// Mock window.matchMedia for prefers-reduced-motion tests
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

describe('AnimatedTitles', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the animated titles component', () => {
    render(<AnimatedTitles />);
    
    const titleElement = screen.getByLabelText(/currently showing|full-stack developer/i);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass('text-lg', 'md:text-xl');
  });

  it('displays initial text content', () => {
    render(<AnimatedTitles />);
    
    const titleElement = screen.getByLabelText(/currently showing|full-stack developer/i);
    expect(titleElement).toBeInTheDocument();
    
    // Should have some content (either typing animation started or reduced motion fallback)
    expect(titleElement.textContent).toBeTruthy();
  });

  it('has proper ARIA attributes for accessibility', () => {
    render(<AnimatedTitles />);
    
    const titleElement = screen.getByLabelText(/currently showing|full-stack developer/i);
    expect(titleElement).toHaveAttribute('aria-live');
    expect(titleElement).toHaveAttribute('aria-label');
  });

  it('respects reduced motion preferences', () => {
    // Mock prefers-reduced-motion: reduce
    window.matchMedia = vi.fn().mockImplementation(query => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    render(<AnimatedTitles />);
    
    const titleElement = screen.getByLabelText('Full-Stack Developer');
    expect(titleElement).toHaveAttribute('aria-live', 'off');
    
    // Should not have the animated cursor when reduced motion is preferred
    const cursor = titleElement.querySelector('span[class*="animate-pulse"]');
    expect(cursor).not.toBeInTheDocument();
  });

  it('shows animated cursor for users who prefer motion', async () => {
    // Mock prefers-reduced-motion: no-preference
    window.matchMedia = vi.fn().mockImplementation(query => ({
      matches: query !== '(prefers-reduced-motion: reduce)',
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    render(<AnimatedTitles />);
    
    const titleElement = screen.getByLabelText(/currently showing/i);
    expect(titleElement).toHaveAttribute('aria-live', 'polite');
    
    // Wait for potential cursor element to appear
    await waitFor(() => {
      const cursor = titleElement.querySelector('span[class*="animate-pulse"]');
      // Cursor might not be immediately visible due to timing, but component should support it
      expect(cursor).toBeInTheDocument();
    }, { timeout: 1000 });
  });

  it('has gradient text styling', () => {
    render(<AnimatedTitles />);
    
    const titleElement = screen.getByLabelText(/currently showing|full-stack developer/i);
    const gradientSpan = titleElement.querySelector('span[class*="bg-gradient-to-r"]');
    
    expect(gradientSpan).toBeInTheDocument();
    expect(gradientSpan).toHaveClass('text-transparent', 'bg-clip-text');
  });

  it('maintains minimum height for layout stability', () => {
    render(<AnimatedTitles />);
    
    const titleElement = screen.getByLabelText(/currently showing|full-stack developer/i);
    expect(titleElement).toHaveClass('min-h-[2.5rem]', 'md:min-h-[2.5rem]');
  });
});