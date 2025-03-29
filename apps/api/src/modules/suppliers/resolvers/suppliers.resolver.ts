import { Resolver, Query, Args } from '@nestjs/graphql';
import { Supplier } from '../entities/supplier.entity';
import { GetSuppliersUseCase } from '../use-cases/get-suppliers.use-case';
import { GetSuppliersInput } from '../dtos/get-suppliers.input';

@Resolver(() => Supplier)
export class SuppliersResolver {
  constructor(private readonly getSuppliers: GetSuppliersUseCase) {}

  @Query(() => [Supplier])
  suppliers(@Args('input') input: GetSuppliersInput) {
    return this.getSuppliers.execute(input.consumption);
  }
}
