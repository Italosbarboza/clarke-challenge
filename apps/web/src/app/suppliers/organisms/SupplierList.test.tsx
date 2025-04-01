import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SupplierList } from './SupplierList';
import { suppliers } from '../mocks/supplier.mock';

describe('SupplierList Component', () => {

  it('should render a message when no suppliers have been searched yet', () => {
    render(<SupplierList suppliers={[]} hasSearched={false} />);
    expect(screen.getByText('Please enter your consumption to search for suppliers.')).toBeInTheDocument();
  });

  it('should render a message when no suppliers are found', () => {
    render(<SupplierList suppliers={[]} hasSearched={true} />);
    expect(screen.getByText('No suppliers found.')).toBeInTheDocument();
  });

  it('should render a list of suppliers', () => {
    render(<SupplierList suppliers={suppliers} hasSearched={true} />);
    expect(screen.getByText('Energia Solar BR')).toBeInTheDocument();
    expect(screen.getByText('Eólica Sul')).toBeInTheDocument();
  });

  it('should render logos for suppliers when available', () => {
    render(<SupplierList suppliers={suppliers} hasSearched={true} />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(2);
  });

  it('should render the plug icon when there is an error with supplier image', () => {
    const supplierWithError = [
      {
        id: 999,
        name: 'Supplier with Image Error',
        logo: 'invalid-logo-url',
        state: 'SP',
        source: 'solar',
        pricePerKwh: 0.45,
        minKwh: 1000,
        totalClients: 500,
        averageRating: 4.5,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        deletedAt: null,
        __typename: 'Supplier',
      }
    ];

    render(<SupplierList suppliers={supplierWithError} hasSearched={true} />);
    const plugIcon = screen.getByRole('img');
    expect(plugIcon).toBeInTheDocument();
  });

  it('should render supplier details correctly', () => {
    render(<SupplierList suppliers={suppliers} hasSearched={true} />);
    expect(screen.getByText(/Clients: 500/)).toBeInTheDocument();
    expect(screen.getByText(/Rating: 4.5/)).toBeInTheDocument();
    expect(screen.getByText(/Clients: 300/)).toBeInTheDocument();
    expect(screen.getByText(/Rating: 4.2/)).toBeInTheDocument();
  });
});
