import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  username: 'Socialmedia.user',
  port: 5434,
  password: 'socialmediaDb',
  database: 'socialmedia',
  entities: ['./../src/modules/*/.entity.ts'],
  migrations: ['./migration/*.ts'],
});


// DB_HOST=localhost
// DB_PORT=5434
// DB_NAME=socialmedia
// DB_USER=Socialmedia.user
// DB_PASSWORD=socialmediaDb
