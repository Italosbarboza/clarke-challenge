import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { SearchForm } from './SearchForm';

describe('SearchForm Component', () => {
  it('should render input and button', () => {
    render(<SearchForm onSubmit={() => {}} />);
    
    expect(screen.getByRole('spinbutton')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  it('should call onSubmit with the correct value when the form is submitted', () => {
    const handleSubmit = jest.fn();

    render(<SearchForm onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByRole('spinbutton'), { target: { value: '5000' } });

    fireEvent.click(screen.getByRole('button', { name: /search/i }));

    expect(handleSubmit).toHaveBeenCalledWith(5000);
  });
});
