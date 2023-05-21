import { TRPCError } from "@trpc/server";
import { publicProcedure } from "@/server/trpc";
import hasuraClient from "@/utils/hasuraClient";
import { getJWT } from "@/utils/jwt";

import query from "./query";
import { profile, input, output } from "./types";
import type { Profile, Input, Output } from "./types";

export const getProfile = async ({ username }: Input): Promise<Output> => {
  const { token } = await getJWT();

  const result = await hasuraClient
    .setHeader("authorization", `Bearer ${token}`)
    .request<{ profile: Profile[] }>(query, {
      login: username,
    });

  const data = result?.profile?.[0];

  // User with given username not found
  if (!data) throw new TRPCError({ code: "NOT_FOUND" });

  const profileData = profile.parse(data);

  return profileData;
};

export const getProfileProcedure = publicProcedure
  .input(input)
  .output(output)
  .query((res) => getProfile(res.input));
