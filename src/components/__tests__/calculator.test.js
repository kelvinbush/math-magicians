import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Calculator from '../Calculator';

describe('Calculator Component test', () => {
  it('should render Calculator component correctly', () => {
    render(<Calculator />);
    const h3Element = screen.getByText(/Let's do some math!/i);
    expect(h3Element.textContent).toBe("Let's do some math!");
  });

  it('should render Calculator Cell buttons in the correct order', () => {
    render(<Calculator />);
    const acButtonElement = screen.getByText(/AC/i);
    expect(acButtonElement).toHaveAttribute('data-id', '0');
  });
});
