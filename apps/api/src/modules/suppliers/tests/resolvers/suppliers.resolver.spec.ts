import { Test, TestingModule } from '@nestjs/testing';

import { createMockSuppliers } from '../mocks/supplier.mock';

import { SuppliersResolver } from '../../resolvers/suppliers.resolver';
import { GetSuppliersUseCase } from '../../use-cases/get-suppliers.use-case';

describe('SuppliersResolver', () => {
  let resolver: SuppliersResolver;
  let useCase: Partial<Record<keyof GetSuppliersUseCase, jest.Mock>>;

  beforeEach(async () => {
    useCase = { execute: jest.fn() };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SuppliersResolver,
        { provide: GetSuppliersUseCase, useValue: useCase },
      ],
    }).compile();

    resolver = module.get(SuppliersResolver);
  });

  it('should return suppliers using the use case', async () => {
    const mock = createMockSuppliers();
    useCase.execute.mockResolvedValue(mock);

    const result = await resolver.suppliers({ consumption: 1500 });
    expect(result).toEqual(mock);
    expect(useCase.execute).toHaveBeenCalledWith(1500);
  });
});
