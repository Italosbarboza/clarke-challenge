import { DataSource } from 'typeorm';

import { Seeder } from 'typeorm-extension';

import { suppliers } from './mocks/suppliers.mock';

const TABLE_NAME = 'suppliers';

export default class SupplierSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    await dataSource.query(`DELETE FROM ${TABLE_NAME};`);

    for (const supplier of suppliers) {
      await dataSource.query(`
        INSERT INTO ${TABLE_NAME} 
        (name, logo, state, source, price_per_kwh, min_kwh, total_clients, average_rating) 
        VALUES 
        ('${supplier.name}', '${supplier.logo}', '${supplier.state}', '${supplier.source}', 
         ${supplier.pricePerKwh}, ${supplier.minKwh}, ${supplier.totalClients}, ${supplier.averageRating});
      `);
    }
  }
}
