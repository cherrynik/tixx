import { appRouter } from '@tixx/api/trpc'
import * as trpcNext from '@trpc/server/adapters/next';

export default trpcNext.createNextApiHandler({
  router: appRouter,
  // TODO: Impl it
  // createContext
})