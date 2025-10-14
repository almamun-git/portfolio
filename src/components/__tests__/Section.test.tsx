import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Section } from '../Section';

describe('Section', () => {
  it('renders section with basic content', () => {
    render(<Section>Test content</Section>);

    const section = screen.getByText('Test content').closest('section');
    expect(section).toBeInTheDocument();
    expect(section).toHaveTextContent('Test content');
  });

  it('renders section with id and proper accessibility', () => {
    render(<Section id="test-section">Content</Section>);

    const section = screen.getByText('Content').closest('section');
    expect(section).toHaveAttribute('id', 'test-section');
  });

  it('renders title with default h2 level', () => {
    render(<Section id="test-section" title="Test Title">Content</Section>);

    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toHaveTextContent('Test Title');
    expect(title).toHaveAttribute('id', 'test-section-title');
  });

  it('renders title with custom heading level', () => {
    render(<Section title="Test Title" titleLevel="h3">Content</Section>);

    const title = screen.getByRole('heading', { level: 3 });
    expect(title).toHaveTextContent('Test Title');
  });

  it('renders subtitle when provided', () => {
    render(<Section subtitle="Test Subtitle" title="Test Title">Content</Section>);

    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('applies aria-labelledby when title is present', () => {
    render(<Section id="test" title="Test Title">Content</Section>);

    const section = screen.getByText('Content').closest('section');
    expect(section).toHaveAttribute('aria-labelledby', 'test-title');
  });

  it('does not apply aria-labelledby when no title', () => {
    render(<Section id="test">Content</Section>);

    const section = screen.getByText('Content').closest('section');
    expect(section).not.toHaveAttribute('aria-labelledby');
  });

  it('applies custom className', () => {
    render(<Section className="custom-class">Content</Section>);

    const section = screen.getByText('Content').closest('section');
    expect(section).toHaveClass('custom-class');
  });

  it('applies header custom className', () => {
    render(<Section title="Title" headerClassName="header-custom">Content</Section>);

    const header = screen.getByRole('heading', { level: 2 }).closest('header');
    expect(header).toHaveClass('header-custom');
  });

  it('centers content when centered prop is true', () => {
    render(<Section title="Title" centered>Content</Section>);

    const header = screen.getByRole('heading', { level: 2 }).closest('header');
    expect(header).toHaveClass('text-center');

    // Find the content wrapper div (the one after header)
    const section = screen.getByText('Content').closest('section');
    const contentDiv = section?.querySelector('div:not(header)');
    expect(contentDiv).toHaveClass('mx-auto');
  });

  it('applies max-width classes correctly', () => {
    const { rerender } = render(<Section maxWidth="screen-lg">Content</Section>);

    let section = screen.getByText('Content').closest('section');
    expect(section).toHaveClass('max-w-screen-lg', 'mx-auto');

    rerender(<Section maxWidth="prose">Content</Section>);
    section = screen.getByText('Content').closest('section');
    expect(section).toHaveClass('max-w-prose', 'mx-auto');

    rerender(<Section maxWidth="none">Content</Section>);
    section = screen.getByText('Content').closest('section');
    expect(section).not.toHaveClass('max-w-prose', 'max-w-screen-lg', 'mx-auto');
  });

  it('has default scroll margin for anchor navigation', () => {
    render(<Section>Content</Section>);

    const section = screen.getByText('Content').closest('section');
    expect(section).toHaveClass('scroll-mt-24');
  });

  it('renders header only when title or subtitle is provided', () => {
    const { rerender } = render(<Section>Content</Section>);

    expect(screen.queryByRole('heading')).not.toBeInTheDocument();

    rerender(<Section title="Title">Content</Section>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('renders children in correct container structure', () => {
    render(
      <Section title="Title">
        <div>Child 1</div>
        <div>Child 2</div>
      </Section>
    );

    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });
});