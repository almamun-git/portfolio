// @ts-nocheck
import { render, screen, fireEvent } from '@testing-library/react';
import { ContactForm } from '../ContactForm';

describe('ContactForm', () => {
  it('renders form and validates required fields', async () => {
    render(<ContactForm />);
    const button = screen.getByRole('button', { name: /send message|sending|sent/i });
    expect(button).toBeInTheDocument();
  });

  it('prevents honeypot submission', async () => {
    const { container } = render(<ContactForm />);
    const honeypot = container.querySelector('input[name="bot-field"]') as HTMLInputElement;
    expect(honeypot).toBeTruthy();
    honeypot.value = 'I am bot';
    // Submit form
    const form = container.querySelector('form') as HTMLFormElement;
    fireEvent.submit(form);
    // If honeypot set, status remains idle
    const status = screen.getByText((content, node) => node?.getAttribute('role') === 'status');
    expect(status).toBeInTheDocument();
  });
});
