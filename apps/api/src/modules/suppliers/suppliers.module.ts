import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Supplier } from './entities/supplier.entity';
import { SuppliersResolver } from './resolvers/suppliers.resolver';
import { GetSuppliersUseCase } from './use-cases/get-suppliers.use-case';
import { SuppliersRepository } from './repositories/suppliers.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Supplier])],
  providers: [SuppliersResolver, GetSuppliersUseCase, SuppliersRepository],
})
export class SuppliersModule {}
