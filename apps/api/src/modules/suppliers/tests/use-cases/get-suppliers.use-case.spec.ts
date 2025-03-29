import { Test, TestingModule } from '@nestjs/testing';

import { createMockSuppliers } from '../mocks/supplier.mock';

import { SuppliersRepository } from '../../repositories/suppliers.repository';
import { GetSuppliersUseCase } from '../../use-cases/get-suppliers.use-case';

describe('GetSuppliersUseCase', () => {
  let useCase: GetSuppliersUseCase;
  let repo: Partial<Record<keyof SuppliersRepository, jest.Mock>>;

  beforeEach(async () => {
    repo = { findByConsumption: jest.fn() };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetSuppliersUseCase,
        { provide: SuppliersRepository, useValue: repo },
      ],
    }).compile();

    useCase = module.get(GetSuppliersUseCase);
  });

  it('should return suppliers from repository', async () => {
    const mock = createMockSuppliers();
    repo.findByConsumption.mockResolvedValue(mock);

    const result = await useCase.execute(2500);
    expect(result).toEqual(mock);
    expect(repo.findByConsumption).toHaveBeenCalledWith(2500);
  });
});
