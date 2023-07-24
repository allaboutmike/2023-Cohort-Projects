import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import sequelize from './config/connection';
import { ParamsDictionary } from 'express-serve-static-core';
import Users from './models/Users';

import * as middlewares from './middlewares';
import MessageResponse from './interfaces/MessageResponse';
import { any } from 'zod';


require('dotenv').config();

const app = express();

app.use(morgan('dev')); 
app.use(helmet());
app.use(cors());
app.use(express.json());


//TRPC INIT TESTING

import { inferAsyncReturnType } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from './routers/_app';

// created for each request
const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({}); // no context
type Context = inferAsyncReturnType<typeof createContext>;

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);



app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
 
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};



testConnection();

//Test Route Find All


export default app;
