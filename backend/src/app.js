import 'dotenv/config';

import express from 'express';
import path from 'path';
import cors from 'cors';
import Youch from 'youch';
import * as Sentry from '@sentry/node';

/** Esta importação deve vir antes das rotas para possibilitar a integração. */
import 'express-async-errors';

import routes from './routes';
import sentryConfig from './config/sentry';

import './database';

// Classe executada apenas uma vez.
class App {
  // Método executado sempre que a classe é chamada.
  constructor() {
    this.server = express();

    Sentry.init(sentryConfig);

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(Sentry.Handlers.requestHandler());
    /** Em ambiente de produção setar:
     *  this.server.use(cors({ origin: 'https://www.gobarber.com.br' }));
     */
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    // Funciona como um middleware
    this.server.use(routes);
    this.server.use(Sentry.Handlers.errorHandler());
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();

        return res.status(500).json(errors);
      }

      return res
        .status(500)
        .json({ error: `Internal server error, it's not a development.` });
    });
  }
}

export default new App().server;
