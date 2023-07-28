import { router, publicProcedure } from '../trpc.js';
import { Sequelize } from 'sequelize-typescript';
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

const EVENTS: Event[] = [
        {
          name: "Summer Music Festival",
          short_description: "A weekend of music, food, and fun!",
          long_description: "Join us for a fantastic weekend filled with live music from top bands, delicious food vendors, and exciting activities for all ages.",
          city: "Los Angeles",
          state: "California",
          country: "United States",
          address: "123 Main Street",
          start_time: new Date("2023-08-18T12:00:00"),
          end_time: new Date("2023-08-20T22:00:00"),
          host: 1,
        },
        {
          name: "Art Exhibition",
          short_description: "Discover inspiring art from local artists.",
          long_description: "Experience a diverse range of artworks, including paintings, sculptures, and photography, created by talented local artists.",
          city: "New York City",
          state: "New York",
          country: "United States",
          address: "456 Art Avenue",
          start_time: new Date("2023-09-15T10:00:00"),
          end_time: new Date("2023-09-30T18:00:00"),
          host: 2,
        },
        {
          name: "Tech Conference",
          short_description: "Stay up-to-date with the latest tech trends.",
          long_description: "Attend presentations and workshops led by industry experts covering topics like AI, blockchain, and cybersecurity.",
          city: "San Francisco",
          state: "California",
          country: "United States",
          address: "789 Tech Road",
          start_time: new Date("2023-10-25T09:00:00"),
          end_time: new Date("2023-10-27T17:00:00"),
          host: 3,
        },
];

//

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
