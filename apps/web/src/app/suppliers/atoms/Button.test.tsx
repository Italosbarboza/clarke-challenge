import '@testing-library/jest-dom'; 
import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from './Button';

describe('Button Component', () => {
  it('should render button with text "Click Me"', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('should call onClick event when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
