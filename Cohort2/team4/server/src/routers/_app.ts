import { router } from '../trpc';
import { z } from 'zod';

import { userRouter } from './user';

const appRouter = router({
  user: userRouter, // put procedures under "user" namespace
});

// You can then access the merged route with
// http://localhost:3000/trpc/.

export type AppRouter = typeof appRouter;