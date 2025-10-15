import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Background } from '../Background';

describe('Background', () => {
  it('renders background container with proper accessibility and positioning', () => {
    const { container } = render(<Background />);

    const backgroundDiv = container.firstChild as HTMLElement;
    expect(backgroundDiv).toBeInTheDocument();
    expect(backgroundDiv).toHaveAttribute('aria-hidden', '');
    expect(backgroundDiv).toHaveClass('pointer-events-none', 'fixed', 'inset-0', '-z-10', 'overflow-hidden');
  });

  it('renders animated gradient background layer', () => {
    const { container } = render(<Background />);

    const gradientLayer = container.querySelector('.bg-radial-fx');
    expect(gradientLayer).toBeInTheDocument();
    expect(gradientLayer).toHaveClass('absolute', 'inset-0', 'bg-radial-fx', 'animate-gradient-float');
  });

  it('renders grid pattern overlay with proper opacity and blend mode', () => {
    const { container } = render(<Background />);

    const gridLayer = container.querySelector('.bg-grid-mask');
    expect(gridLayer).toBeInTheDocument();
    expect(gridLayer).toHaveClass('absolute', 'inset-0', 'bg-grid-mask', 'opacity-[0.25]', 'dark:opacity-[0.30]', 'mix-blend-overlay');
  });

  it('renders noise overlay with proper opacity and blend mode', () => {
    const { container } = render(<Background />);

    const noiseLayer = container.querySelector('.bg-noise');
    expect(noiseLayer).toBeInTheDocument();
    expect(noiseLayer).toHaveClass('absolute', 'inset-0', 'bg-noise', 'opacity-[0.22]', 'dark:opacity-[0.26]', 'mix-blend-soft-light');
  });

  it('renders top vignette gradient', () => {
    const { container } = render(<Background />);

    const vignetteLayer = container.querySelector('.bg-gradient-to-b');
    expect(vignetteLayer).toBeInTheDocument();
    expect(vignetteLayer).toHaveClass('absolute', 'inset-x-0', 'top-0', 'h-40', 'bg-gradient-to-b', 'from-white/70', 'dark:from-neutral-950/70', 'to-transparent');
  });

  it('contains exactly 5 background layers', () => {
    const { container } = render(<Background />);

    const backgroundDiv = container.firstChild as HTMLElement;
    const layers = backgroundDiv?.querySelectorAll('div');
    expect(layers).toHaveLength(5);
  });

  it('all layers have absolute positioning', () => {
    const { container } = render(<Background />);

    const backgroundDiv = container.firstChild as HTMLElement;
    const layers = backgroundDiv?.querySelectorAll('div');

    layers?.forEach(layer => {
      expect(layer).toHaveClass('absolute');
    });
  });

  it('renders decorative comment in JSX', () => {
    // This test verifies the component structure matches the comment
    const { container } = render(<Background />);

    // Verify we have the expected layers in order
    const layers = container.querySelectorAll('div.absolute');
    expect(layers).toHaveLength(5); // gradient, grid, noise, vignette

    // Check specific classes that match the comment description
    expect(layers[0]).toHaveClass('bg-radial-fx', 'animate-gradient-float'); // Animated gradient blobs
    expect(layers[1]).toHaveClass('bg-grid-mask'); // Grid pattern
    expect(layers[2]).toHaveClass('bg-noise'); // Noise overlay
    expect(layers[3]).toHaveClass('bg-gradient-to-b'); // Top vignette
  });
});