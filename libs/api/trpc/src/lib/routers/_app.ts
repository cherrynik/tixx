import { z } from 'zod';
import { procedure, router } from '../trpc';

export const appRouter = router({
  wassgud: procedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      return {
        yo: `wassgud ${opts.input.text}`,
      };
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;