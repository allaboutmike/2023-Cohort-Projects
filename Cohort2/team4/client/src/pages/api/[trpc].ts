import * as trpcNext from '@trpc/server/adapters/next';
import { appRouter } from '../../../../server/src/routers/_app.js';

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});