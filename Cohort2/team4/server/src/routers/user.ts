import { router, publicProcedure } from '../trpc.js';
import Users from '../models/User.js';
import { z } from 'zod';

export const userRouter = router({
  getAll: publicProcedure.query((opts) => {
    return Users.findAll();
  }),
  byId: publicProcedure
    .input(z.number())
    .query((opts) => {
      return Users.findByPk(opts.input);
    }),
  byEmail: publicProcedure.input(z.string()).query((opts) => {
    return Users.findOne({ where: { email: opts.input } });
  }),
  byAuth: publicProcedure.input(z.string()).query((opts) => {
    return Users.findOne({ where: { auth_key: opts.input } });
  }),
  create: publicProcedure
    .input(z.object({ email: z.string(), firstName: z.string(), lastName:z.string(), auth_key:z.string() }))
    .mutation((opts) => {
      const { email, firstName, lastName } = opts.input;
      const newUser = { email, first_name: firstName, last_name: lastName, auth_key:'test_key' };
      Users.create(newUser);
      return Users.findAll();
    }),
});
