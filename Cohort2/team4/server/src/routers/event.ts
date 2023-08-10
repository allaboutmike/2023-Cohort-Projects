import { router, publicProcedure } from '../trpc.js';
import sequelize from '../config/connection.js';
import Events from '../models/Event.js';
import { z } from 'zod';
import { randomUUID } from 'crypto';


export const eventRouter = router({
  getAll: publicProcedure.query((req) => {
    return Events.findAll();
  }),
  byId: publicProcedure.input(z.string()).query(req =>{
    return Events.findByPk(req.input);
  }),
  byHost: publicProcedure.input(z.string()).query(req => {
    return Events.findAll({
      where: {
        host: req.input
      }
    });
  }),
  byName: publicProcedure.input(z.string()).query(req => {
    return Events.findOne({
      where: {
        name: req.input
      }
    });
  }),
  byState: publicProcedure.input(z.string()).query(req => {
    return Events.findOne({
      where: {
        state: req.input
      }
    });
  }),
  byCity: publicProcedure.input(z.string()).query(req => {
    return Events.findOne({
      where: {
        city: req.input
      }
    });
  }),
  create: publicProcedure
    .input(z.object({ name: z.string(), short_description: z.string(), long_description: z.string(), city: z.string(), state: z.string(), country: z.string(), address: z.string(), start_time: z.date(), end_time: z.date(), host: z.number() }))
    .mutation(req => {
      const { name, short_description, long_description, city, state, country, address, start_time, end_time, host } = req.input;
      const newEvent = { name, short_description, long_description, city, state, country, address, start_time, end_time, host }
      Events.create(newEvent);
      return newEvent;
    }),
});
