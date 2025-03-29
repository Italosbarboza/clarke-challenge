import { Injectable } from '@nestjs/common';
import { SuppliersRepository } from '../repositories/suppliers.repository';
import { Supplier } from '../entities/supplier.entity';

@Injectable()
export class GetSuppliersUseCase {
  constructor(private readonly repository: SuppliersRepository) {}

  execute(consumption: number): Promise<Supplier[]> {
    return this.repository.findByConsumption(consumption);
  }
}
