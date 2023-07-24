import { router, publicProcedure } from '../trpc';
// import { Sequelize } from 'sequelize-typescript';
// import Users from '../models/User';
import { z } from 'zod';
import { randomUUID } from 'crypto';


type User = {
  email: string
  first_name: string
  last_name: string
  auth_key: string
};

const USERS: User[] = [
  { email: 'kyle@test.com', first_name: 'Kyle', last_name: 'Flob', auth_key:'test1' },
  { email: 'julie@test.com', first_name: 'Julie', last_name: 'Bob', auth_key: 'test2' },
];

export const userRouter = router({
  byEmail: publicProcedure.input(z.string()).query(req => {
    return USERS.find(user => user.email === req.input);
  }),
  byAuth: publicProcedure.input(z.string()).query(req => {
    return USERS.find(user => user.auth_key === req.input);
  }),
  create: publicProcedure
    .input(z.object({ email: z.string(), firstName: z.string(), lastName:z.string(), auth_key:z.string() }))
    .mutation(req => {
      const { email, firstName, lastName } = req.input;
      const user: User = { email, first_name: firstName, last_name: lastName, auth_key:'test_key' };
      USERS.push(user);
      return user;
    }),
});