import { t } from "@/trpc/trpc";

import { getProfileProcedure } from "./getProfile";

export const githubRouter = t.router({
  getProfile: getProfileProcedure,
});

export type GithubRouter = typeof githubRouter;
