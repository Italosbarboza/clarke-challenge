import { Supplier } from '../../entities/supplier.entity';

export const createMockSupplier = (
  overrides: Partial<Supplier> = {},
): Supplier => ({
  id: 1,
  name: 'Fornecedor Padrão',
  logo: 'https://example.com/logo.png',
  state: 'SP',
  source: 'solar',
  pricePerKwh: 0.5,
  minKwh: 1000,
  totalClients: 500,
  averageRating: 4.5,
  ...overrides,
});

export const createMockSuppliers = (): Supplier[] => [
  createMockSupplier(),
  createMockSupplier({
    id: 2,
    name: 'Fornecedor B',
    state: 'RS',
    pricePerKwh: 0.6,
    minKwh: 2000,
  }),
];
