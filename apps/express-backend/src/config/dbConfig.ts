// src/config/dbConfig.ts

import { ConnectionOptions } from 'typeorm';
import { User } from '../models/User';

const dbConfig: ConnectionOptions = {
  type: 'sqlite',
  database: 'database.sqlite',
  synchronize: true,
  logging: true,
  entities: [User],
};

export default dbConfig;
