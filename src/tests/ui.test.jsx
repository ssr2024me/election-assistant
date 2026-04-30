import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SmartExpert from '../components/SmartExpert';
import { describe, it, expect } from 'vitest';

describe('SmartExpert UI Component', () => {
  const mockT = { smartAdvice: 'Smart Expert' };
  
  it('renders the expert header', () => {
    render(<SmartExpert t={mockT} lang="en" userContext={{}} />);
    expect(screen.getByText('Smart Expert')).toBeInTheDocument();
    expect(screen.getByText(/Powered by Google Gemini/i)).toBeInTheDocument();
  });

  it('renders the chat input', () => {
    render(<SmartExpert t={mockT} lang="en" userContext={{}} />);
    expect(screen.getByPlaceholderText(/Ask a question/i)).toBeInTheDocument();
  });
});
