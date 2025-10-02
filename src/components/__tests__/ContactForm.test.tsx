import { render, screen, fireEvent, waitFor } from '@testing-library/react';
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
    render(<ContactForm />);
    
    expect(screen.getByText(/tip: provide an api endpoint/i)).toBeInTheDocument();
    expect(screen.getByText(/VITE_CONTACT_ENDPOINT/)).toBeInTheDocument();
  });
});
