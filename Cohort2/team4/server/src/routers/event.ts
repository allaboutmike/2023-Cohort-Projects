import { router, publicProcedure } from '../trpc.js';
import sequelize from '../config/connection.js';
import Events from '../models/Event.js';
import { z } from 'zod';
import { randomUUID } from 'crypto';


type Event = {
  name: String,
  short_description: String,
  long_description: String,
  city: String,
  state: String,
  country: String,
  address: String,
  start_time: Date,
  end_time: Date,
  host: number,
};


const EVENTS: Event[] = []

export const eventRouter = router({
  byName: publicProcedure.input(z.string()).query(req => {
    return EVENTS.find(event => event.name === req.input);
  }),
  byState: publicProcedure.input(z.string()).query(req => {
    return EVENTS.find(event => event.state === req.input);
  }),
  byCity: publicProcedure.input(z.string()).query(req => {
    return EVENTS.find(events => events.city === req.input )
  }),
  create: publicProcedure
    .input(z.object({ name: z.string(), short_description: z.string(), long_description: z.string(), city: z.string(), state: z.string(), country: z.string(), address: z.string(), start_time: z.date(), end_time: z.date(), host: z.number() }))
    .mutation(req => {
      const { name, short_description, long_description, city, state, country, address, start_time, end_time, host } = req.input;
      const event: Event = { name, short_description, long_description, city, state, country, address, start_time, end_time, host }
      EVENTS.push(event);
      return event;
    }),
});
