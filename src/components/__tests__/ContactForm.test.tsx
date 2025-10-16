import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ContactForm } from '../ContactForm';

describe('ContactForm', () => {
  it('renders form with all required fields and submit button', async () => {
    render(<ContactForm />);
    
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    
    const button = screen.getByRole('button', { name: /send message/i });
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });

  it('prevents honeypot bot submissions', async () => {
    const { container } = render(<ContactForm />);
    const honeypot = container.querySelector('input[name="bot-field"]') as HTMLInputElement;
    
    expect(honeypot).toBeTruthy();
    expect(honeypot).toHaveClass('hidden');
    
    // Simulate bot filling honeypot
    honeypot.value = 'I am a bot';
    
    const form = container.querySelector('form') as HTMLFormElement;
    fireEvent.submit(form);
    
    // Form should not process (status remains idle)
    const status = screen.getByRole('status');
    expect(status).toBeInTheDocument();
    expect(status).toBeEmptyDOMElement();
  });

  it('displays helpful tip when no endpoint is configured', () => {
    // Mock environment to ensure no endpoint is set
    const originalEnv = import.meta.env.VITE_CONTACT_ENDPOINT;
    delete (import.meta.env as Record<string, unknown>).VITE_CONTACT_ENDPOINT;
    
    render(<ContactForm />);
    
    expect(screen.getByText(/tip: provide an api endpoint/i)).toBeInTheDocument();
    expect(screen.getByText(/VITE_CONTACT_ENDPOINT/)).toBeInTheDocument();
    
    // Restore original environment
    if (originalEnv !== undefined) {
      (import.meta.env as Record<string, unknown>).VITE_CONTACT_ENDPOINT = originalEnv;
    }
  });
});
