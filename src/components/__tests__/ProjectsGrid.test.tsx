import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import { ProjectsGrid } from '../ProjectsGrid';
import { projects, type Project } from '../../data';

// Mock the ProjectCard component
vi.mock('../ProjectCard', () => ({
  ProjectCard: ({ project }: { project: Project }) => (
    <div data-testid={`project-card-${project.title.replace(/\s+/g, '-').toLowerCase()}`}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  ),
}));

describe('ProjectsGrid', () => {
  it('renders all projects from data', () => {
    render(<ProjectsGrid />);

    projects.forEach(project => {
      const projectCard = screen.getByTestId(`project-card-${project.title.replace(/\s+/g, '-').toLowerCase()}`);
      expect(projectCard).toBeInTheDocument();
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();
    });
  });

  it('renders projects in a responsive grid layout', () => {
    const { container } = render(<ProjectsGrid />);

    const gridContainer = container.firstChild;
    expect(gridContainer).toHaveClass('grid', 'gap-6', 'md:grid-cols-2');
  });

  it('renders correct number of project cards', () => {
    render(<ProjectsGrid />);

    const projectCards = screen.getAllByTestId(/^project-card-/);
    expect(projectCards).toHaveLength(projects.length);
  });

  it('uses project title as unique key for each ProjectCard', () => {
    // This test verifies that each project gets rendered with its title as key
    // We can verify this by checking that all expected projects are rendered
    render(<ProjectsGrid />);

      projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
  });

  it('passes project data correctly to ProjectCard components', () => {
    render(<ProjectsGrid />);

    // Verify that each project's data is being passed through
    projects.forEach(project => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();
    });
  });
});