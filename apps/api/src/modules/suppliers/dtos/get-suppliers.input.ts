import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class GetSuppliersInput {
  @Field(() => Int)
  consumption: number;
}
