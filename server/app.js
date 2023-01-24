import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import express from 'express';

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
  }
}

export default new App().app;
