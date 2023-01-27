import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './src/database';

import express from 'express';
import adminRoutes from './src/routes/adminRoutes';
import tokenRoutes from './src/routes/tokenRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/administrador/', adminRoutes);
    this.app.use('/auth/', tokenRoutes);
  }
}

export default new App().app;
