import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { SupplierList } from './SupplierList';

import { suppliers } from '../mocks/supplier.mock';

describe('SupplierList Component', () => {
  it('should render a list of suppliers', () => {
    render(<SupplierList suppliers={suppliers} />);
    expect(screen.getByText('Energia Solar BR')).toBeInTheDocument();
    expect(screen.getByText('Eólica Sul')).toBeInTheDocument();
  });

  it('should render logos for suppliers', () => {
    render(<SupplierList suppliers={suppliers} />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(2);
  });

  it('should render supplier details', () => {
    render(<SupplierList suppliers={suppliers} />);
    expect(screen.getByText(/Clients: 500/)).toBeInTheDocument();
    expect(screen.getByText(/Rating: 4.5/)).toBeInTheDocument();
    expect(screen.getByText(/Clients: 300/)).toBeInTheDocument();
    expect(screen.getByText(/Rating: 4.2/)).toBeInTheDocument();
  });
});
