import { render, screen } from '@testing-library/react';
import { TechIcon } from '../TechIcon';

describe('TechIcon', () => {
  it('renders known icon with accessible label', () => {
    render(<TechIcon name="React" size={24} />);
    const svg = screen.getByRole('img', { name: /react/i });
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('width', '24');
    expect(svg).toHaveAttribute('height', '24');
  });

  it('falls back to default icon for unknown technology', () => {
    render(<TechIcon name="UnknownTech" size={24} />);
    const svg = screen.getByRole('img');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('aria-label', 'UnknownTech');
  });

  it('uses custom label when provided', () => {
    render(<TechIcon name="React" label="Custom React Label" size={20} />);
    const svg = screen.getByRole('img', { name: /custom react label/i });
    expect(svg).toBeInTheDocument();
  });
});
