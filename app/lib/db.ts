import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

const db = drizzle({ 
  connection: { 
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'moda',
    ssl: false
  }
});

export default db;