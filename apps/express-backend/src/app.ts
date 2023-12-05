// src/app.ts

import express from 'express';
import bodyParser from 'body-parser';
import { createConnection } from 'typeorm';
import dbConfig from './config/dbConfig';
import authRoutes from './routes/authRoutes';

const app = express();

app.use(bodyParser.json());

// Connect to the database
createConnection(dbConfig)
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
  });

// Routes
app.use('/auth', authRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
