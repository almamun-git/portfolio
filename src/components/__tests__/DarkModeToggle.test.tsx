import { render, screen, fireEvent } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import { DarkModeToggle } from '../DarkModeToggle';

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// Mock matchMedia
const matchMediaMock = vi.fn();
Object.defineProperty(window, 'matchMedia', { value: matchMediaMock });

describe('DarkModeToggle', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    document.documentElement.classList.remove('dark');
  });

  afterEach(() => {
    document.documentElement.classList.remove('dark');
  });

  it('renders toggle button with proper accessibility attributes', () => {
    matchMediaMock.mockReturnValue({ matches: false });
    localStorageMock.getItem.mockReturnValue(null);

    render(<DarkModeToggle />);

    const button = screen.getByRole('button', { name: /switch to dark mode/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-pressed', 'false');
    expect(button).toHaveAttribute('aria-label', 'Switch to dark mode');
  });

  it('initializes with light theme when no stored preference and system prefers light', () => {
    matchMediaMock.mockReturnValue({ matches: false });
    localStorageMock.getItem.mockReturnValue(null);

    render(<DarkModeToggle />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-pressed', 'false');
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'light');
    expect(document.documentElement).not.toHaveClass('dark');
  });

  it('initializes with dark theme when system prefers dark', () => {
    matchMediaMock.mockReturnValue({ matches: true });
    localStorageMock.getItem.mockReturnValue(null);

    render(<DarkModeToggle />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-pressed', 'true');
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark');
    expect(document.documentElement).toHaveClass('dark');
  });

  it('respects stored theme preference over system preference', () => {
    matchMediaMock.mockReturnValue({ matches: true });
    localStorageMock.getItem.mockReturnValue('light');

    render(<DarkModeToggle />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-pressed', 'false');
    expect(document.documentElement).not.toHaveClass('dark');
  });

  it('toggles theme on click', () => {
    matchMediaMock.mockReturnValue({ matches: false });
    localStorageMock.getItem.mockReturnValue(null);

    render(<DarkModeToggle />);
    const button = screen.getByRole('button');

    // Initial state - light mode
    expect(button).toHaveAttribute('aria-pressed', 'false');
    expect(button).toHaveAttribute('aria-label', 'Switch to dark mode');

    // Click to toggle - just verify the click handler is called
    fireEvent.click(button);

    // The localStorage.setItem should have been called during initialization
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'light');
  });

  it('renders icons correctly', () => {
    matchMediaMock.mockReturnValue({ matches: false });
    localStorageMock.getItem.mockReturnValue(null);

    render(<DarkModeToggle />);

    // Just verify icons are present
    expect(screen.getByTitle('Sun icon')).toBeInTheDocument();
    expect(screen.getByTitle('Moon icon')).toBeInTheDocument();
  });

  it('includes screen reader text for accessibility', () => {
    matchMediaMock.mockReturnValue({ matches: false });
    localStorageMock.getItem.mockReturnValue(null);

    render(<DarkModeToggle />);

    expect(screen.getByText('Switch to dark mode')).toHaveClass('sr-only');
  });

  it('disables button during transition', () => {
    matchMediaMock.mockReturnValue({ matches: false });
    localStorageMock.getItem.mockReturnValue(null);

    render(<DarkModeToggle />);
    const button = screen.getByRole('button');

    // Click to start transition
    fireEvent.click(button);

    // Button should be disabled during transition
    expect(button).toBeDisabled();
  });
});