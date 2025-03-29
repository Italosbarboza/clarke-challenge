import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSuppliersTable1722974000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'suppliers',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
            unsigned: true,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'logo',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'state',
            type: 'varchar',
            length: '2',
          },
          {
            name: 'source',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'price_per_kwh',
            type: 'float',
          },
          {
            name: 'min_kwh',
            type: 'int',
          },
          {
            name: 'total_clients',
            type: 'int',
          },
          {
            name: 'average_rating',
            type: 'float',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('suppliers');
  }
}
