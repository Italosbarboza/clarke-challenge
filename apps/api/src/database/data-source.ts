import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

const isTestEnvironment = process.env.ENV === 'test';

dotenvConfig({ path: isTestEnvironment ? '.env.test' : '.env' });

const dataSource = new DataSource({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT || '3306'),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [`${__dirname}/../src/**/entity/*.ts`],
  migrations: [`${__dirname}/migrations/**/*.ts`],
  seeds: [`${__dirname}/seeds/**/*.ts`],
  factories: [`${__dirname}/factories/**/*.ts`],
} as DataSourceOptions & SeederOptions);

export default dataSource;
