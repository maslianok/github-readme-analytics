import { router } from "@/server/trpc";

import { getProfileProcedure } from "./getProfile";

export const githubRouter = router({
  getProfile: getProfileProcedure,
});

export type GithubRouter = typeof githubRouter;
