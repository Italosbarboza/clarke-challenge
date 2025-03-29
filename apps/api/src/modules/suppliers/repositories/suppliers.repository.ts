import { Injectable } from '@nestjs/common';
import { Repository, DataSource, LessThanOrEqual } from 'typeorm';
import { Supplier } from '../entities/supplier.entity';

@Injectable()
export class SuppliersRepository extends Repository<Supplier> {
  constructor(dataSource: DataSource) {
    super(Supplier, dataSource.createEntityManager());
  }

  async findByConsumption(consumption: number): Promise<Supplier[]> {
    return this.find({
      where: {
        minKwh: LessThanOrEqual(consumption),
      },
    });
  }
}
