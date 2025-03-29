import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('suppliers')
export class Supplier {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  logo: string;

  @Column()
  @Field()
  state: string;

  @Column()
  @Field()
  source: string;

  @Column({ name: 'price_per_kwh', type: 'float' })
  @Field(() => Float)
  pricePerKwh: number;

  @Column({ name: 'min_kwh', type: 'int' })
  @Field(() => Int)
  minKwh: number;

  @Column({ name: 'total_clients', type: 'int' })
  @Field(() => Int)
  totalClients: number;

  @Column({ name: 'average_rating', type: 'float' })
  @Field(() => Float)
  averageRating: number;
}
