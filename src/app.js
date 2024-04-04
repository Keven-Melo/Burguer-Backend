import express from 'express';
import { resolve } from 'path';
import routes from './routes.js';
import './database/index.js';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());

    // Define o caminho absoluto da pasta de uploads usando process.cwd()
    const uploadDir = resolve(process.cwd(), 'uploads');

    // Usa o caminho da pasta de uploads para servir os arquivos estáticos
    this.app.use('/product-file', express.static(uploadDir));
  }

  routes() {
    this.app.use(routes);
  }
}

// Exporta uma nova instância da classe App
export default new App().app;
