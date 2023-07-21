import { t } from '..//app';
// import { Sequelize } from 'sequelize-typescript';
// import Users from '../models/User';
import { z } from 'zod';
import { randomUUID } from "crypto";


type User = {
  user_id: string
  email: string
  first_name: string
  last_name: string
  auth_key: string
}

const USERS: User[] = [
  { user_id: "1", email: "kyle@test.com", first_name: "Kyle", last_name: "Flob", auth_key:"test1"},
  { user_id: "2", email: "julie@test.com", first_name: "Julie", last_name: "Bob", auth_key: "test2" },
]

export const usersRouter = t.router({
  byId: t.procedure.input(z.string()).query(req => {
    return USERS.find(user => user.user_id === req.input)
  }),
  byEmail: t.procedure.input(z.string()).query(req => {
    return USERS.find(user => user.email === req.input)
  }),
  byAuth: t.procedure.input(z.string()).query(req => {
    return USERS.find(user => user.auth_key === req.input)
  }),
  create: t.procedure
    .input(z.object({ email: z.string(), first_name: z.string(), last_name:z.string(), auth_key:z.string() }))
    .mutation(req => {
      const { email, first_name, last_name } = req.input
      const user: User = { user_id: randomUUID(), email, first_name, last_name, auth_key:"testkey"}
      USERS.push(user)
      return user
    }),
})