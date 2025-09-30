// @ts-nocheck
import { render, screen } from '@testing-library/react';
import { TechIcon } from '../TechIcon';

describe('TechIcon', () => {
  it('renders known icon with title', () => {
    render(<TechIcon name="React" size={24} />);
    const svg = screen.getByRole('img', { name: /react/i });
    expect(svg).toBeInTheDocument();
  });

  it('falls back to default icon for unknown name', () => {
    render(<TechIcon name="UnknownTech" size={24} />);
    const svg = screen.getByRole('img');
    expect(svg).toBeInTheDocument();
  });
});
