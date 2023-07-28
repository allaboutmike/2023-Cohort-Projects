import { router } from '../trpc.js';
import { z } from 'zod';

import { userRouter } from './user.js';
import { eventRouter } from './event.js';

export const appRouter = router({
  user: userRouter, // put procedures under "user" namespace
  event: eventRouter
});

// You can then access the merged route with
// http://localhost:3000/trpc/.

export type AppRouter = typeof appRouter;
