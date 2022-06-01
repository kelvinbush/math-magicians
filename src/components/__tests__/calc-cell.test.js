import { render, screen } from '@testing-library/react';
import CalcCell from '../CalcCell';

const mockedHandleFunction = jest.fn();

describe('CalcCell', () => {
  it('should render same text passed into label prop', () => {
    render(
      <CalcCell
        label="My Label"
        code="AC"
        handleCalculate={mockedHandleFunction}
      />,
    );
    const buttonElement = screen.getByText(/my label/i);
    expect(buttonElement.textContent).toBe('My Label');
  });
});
