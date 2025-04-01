import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { SearchForm } from './SearchForm';

describe('SearchForm Component', () => {
  it('should render input and buttons', () => {
    render(<SearchForm onSubmit={() => {}} onClear={() => {}} />);

    expect(screen.getByRole('spinbutton')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /clear/i })).toBeInTheDocument();
  });

  it('should call onSubmit with the correct value when the form is submitted', () => {
    const handleSubmit = jest.fn();

    render(<SearchForm onSubmit={handleSubmit} onClear={() => {}} />);

    fireEvent.change(screen.getByRole('spinbutton'), { target: { value: '5000' } });
    fireEvent.click(screen.getByRole('button', { name: /search/i }));

    expect(handleSubmit).toHaveBeenCalledWith(5000);
  });

  it('should not call onSubmit with invalid value (negative or non-numeric)', () => {
    const handleSubmit = jest.fn();

    render(<SearchForm onSubmit={handleSubmit} onClear={() => {}} />);

    fireEvent.change(screen.getByRole('spinbutton'), { target: { value: '-500' } });
    fireEvent.click(screen.getByRole('button', { name: /search/i }));

    expect(handleSubmit).not.toHaveBeenCalled();

    fireEvent.change(screen.getByRole('spinbutton'), { target: { value: 'abc' } });
    fireEvent.click(screen.getByRole('button', { name: /search/i }));

    expect(handleSubmit).not.toHaveBeenCalled();
  });
});
