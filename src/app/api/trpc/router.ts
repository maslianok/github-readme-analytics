import { t } from "./trpc";

import { githubRouter } from "./procedures/github";
import { getJWTProcedure } from "./procedures/jwt";

export const appRouter = t.router({
  github: githubRouter,
  getJWT: getJWTProcedure,
});

export type AppRouter = typeof appRouter;
