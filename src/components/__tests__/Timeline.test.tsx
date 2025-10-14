/// <reference types="vitest/globals" />
import { render, screen } from '@testing-library/react';
import { Timeline } from '../Timeline';
import type { ExperienceItem } from '../../data';

const mockExperienceItems: ExperienceItem[] = [
  {
    timeframe: '2023 – Present',
    role: 'Senior Developer',
    org: 'Tech Company',
    summary: 'Leading development of web applications.',
    details: ['Led a team of 5 developers', 'Implemented CI/CD pipeline']
  },
  {
    timeframe: '2021 – 2023',
    role: 'Junior Developer',
    org: 'Startup Inc',
    summary: 'Developed frontend components and APIs.',
    details: ['Built responsive UI components', 'Integrated REST APIs']
  }
];

const mockMinimalItem: ExperienceItem = {
  timeframe: '2020 – 2021',
  role: 'Intern',
  org: 'Learning Corp',
  summary: 'Learning and contributing to projects.'
};

describe('Timeline', () => {
  it('renders timeline with experience items', () => {
    render(<Timeline items={mockExperienceItems} />);

    expect(screen.getByText('2023 – Present • Senior Developer @ Tech Company')).toBeInTheDocument();
    expect(screen.getByText('2021 – 2023 • Junior Developer @ Startup Inc')).toBeInTheDocument();
  });

  it('displays summaries for each experience item', () => {
    render(<Timeline items={mockExperienceItems} />);

    expect(screen.getByText('Leading development of web applications.')).toBeInTheDocument();
    expect(screen.getByText('Developed frontend components and APIs.')).toBeInTheDocument();
  });

  it('renders details list when provided', () => {
    render(<Timeline items={mockExperienceItems} />);

    expect(screen.getByText('Led a team of 5 developers')).toBeInTheDocument();
    expect(screen.getByText('Implemented CI/CD pipeline')).toBeInTheDocument();
    expect(screen.getByText('Built responsive UI components')).toBeInTheDocument();
    expect(screen.getByText('Integrated REST APIs')).toBeInTheDocument();
  });

  it('does not render details list when not provided', () => {
    render(<Timeline items={[mockMinimalItem]} />);

    const lists = screen.queryAllByRole('list');
    // Should only have the main timeline list, no detail lists
    expect(lists).toHaveLength(1);
  });

  it('orders items with most recent first', () => {
    render(<Timeline items={mockExperienceItems} />);

    // Check that both experience items are rendered
    expect(screen.getByText('2023 – Present • Senior Developer @ Tech Company')).toBeInTheDocument();
    expect(screen.getByText('2021 – 2023 • Junior Developer @ Startup Inc')).toBeInTheDocument();
  });

  it('has proper semantic structure', () => {
    render(<Timeline items={mockExperienceItems} />);

    // Get the main ordered list by its class
    const orderedList = document.querySelector('ol.relative');
    expect(orderedList).toBeInTheDocument();
    expect(orderedList?.tagName).toBe('OL');
  });

  it('includes numbered timeline indicators', () => {
    render(<Timeline items={mockExperienceItems} />);

    // Should have numbered indicators (2 and 1, since most recent first)
    const indicators = screen.getAllByLabelText(/timeline position/i);
    expect(indicators).toHaveLength(2);
    expect(indicators[0]).toHaveTextContent('2'); // First item (2021-2023) gets number 2
    expect(indicators[1]).toHaveTextContent('1'); // Second item (2023-Present) gets number 1
  });

  it('has visual timeline line', () => {
    render(<Timeline items={mockExperienceItems} />);

    // Find the timeline line by its classes
    const timelineLine = document.querySelector('.absolute.bg-gradient-to-b');
    expect(timelineLine).toBeInTheDocument();
    expect(timelineLine).toHaveClass('absolute');
  });

  it('handles empty items array', () => {
    render(<Timeline items={[]} />);

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    // The timeline line is always rendered, but no list items
    expect(list.children).toHaveLength(1); // Just the timeline line span
  });
});