import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import type { AppRouter } from '../../server/src/routers/_app.js';
import dotenv from 'dotenv'

dotenv.config();

function getBaseUrl() {
  return `http://localhost:5000`;
}

export const trpc = createTRPCNext<AppRouter>({
    config(opts) {
      return {
        links: [
          httpBatchLink({
            url: `${getBaseUrl()}/trpc`,
            async headers() {
              return {
                // authorization: getAuthCookie(),
              };
            },
          }),
        ],
      };
    },
    ssr: false,
  });
