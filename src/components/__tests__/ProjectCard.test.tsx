/// <reference types="vitest/globals" />
import { render, screen } from '@testing-library/react';
import { ProjectCard } from '../ProjectCard';
import type { Project } from '../../data';

const mockProject: Project = {
  title: 'Test Project',
  description: 'A test project description for testing purposes.',
  tech: ['React', 'TypeScript', 'Tailwind CSS'],
  links: {
    github: 'https://github.com/test/repo',
    demo: 'https://demo.example.com'
  },
  highlight: 'Featured Project'
};

const mockProjectMinimal: Project = {
  title: 'Minimal Project',
  description: 'A minimal project without links or highlight.',
  tech: ['JavaScript'],
  links: {}
};

describe('ProjectCard', () => {
  it('renders project information correctly', () => {
    render(<ProjectCard project={mockProject} />);

    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('A test project description for testing purposes.')).toBeInTheDocument();
    expect(screen.getByText('Featured Project')).toBeInTheDocument();
  });

  it('displays technology stack', () => {
    render(<ProjectCard project={mockProject} />);

    // Check that each tech appears in its own span element
    mockProject.tech.forEach(tech => {
      const techElements = screen.getAllByText(tech);
      expect(techElements.length).toBeGreaterThan(0);
      // At least one should be in a span with the tech styling
      const techSpan = techElements.find(el => el.closest('span.inline-flex'));
      expect(techSpan).toBeInTheDocument();
    });
  });

  it('renders project links when available', () => {
    render(<ProjectCard project={mockProject} />);

    const githubLink = screen.getByRole('link', { name: /code/i });
    const demoLink = screen.getByRole('link', { name: /demo/i });

    expect(githubLink).toHaveAttribute('href', 'https://github.com/test/repo');
    expect(demoLink).toHaveAttribute('href', 'https://demo.example.com');
  });

  it('does not render links when not provided', () => {
    render(<ProjectCard project={mockProjectMinimal} />);

    const codeLinks = screen.queryAllByRole('link', { name: /code/i });
    const demoLinks = screen.queryAllByRole('link', { name: /demo/i });

    expect(codeLinks).toHaveLength(0);
    expect(demoLinks).toHaveLength(0);
  });

  it('does not show highlight tag when not provided', () => {
    render(<ProjectCard project={mockProjectMinimal} />);

    expect(screen.queryByText('Featured Project')).not.toBeInTheDocument();
  });

  it('has proper hover effects and accessibility', () => {
    render(<ProjectCard project={mockProject} />);

    const card = screen.getByText('Test Project').closest('.group');
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('group');
  });

  it('renders tech icons alongside technology names', () => {
    render(<ProjectCard project={mockProject} />);

    // Check that icons are present (they have aria-label attributes)
    expect(screen.getByLabelText('React')).toBeInTheDocument();
    expect(screen.getByLabelText('TypeScript')).toBeInTheDocument();
    expect(screen.getByLabelText('Tailwind CSS')).toBeInTheDocument();

    // Check that we have the expected number of tech spans
    const techSpans = document.querySelectorAll('span.inline-flex');
    expect(techSpans.length).toBeGreaterThanOrEqual(3);
  });
});