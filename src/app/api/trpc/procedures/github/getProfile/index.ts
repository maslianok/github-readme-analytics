import z from "zod";

import { t } from "@/trpc/trpc";
import { getJWT } from "@/procedures/jwt";
import hasuraClient from "@/utils/hasuraClient";

import query from "./query";
import { Profile, profile } from "./types";

const input = z.object({
  login: z.string().min(0),
});

type Input = z.infer<typeof input>;

export const getProfile = async ({ login }: Input) => {
  const { token } = await getJWT();

  const result = await hasuraClient
    .setHeader("authorization", `Bearer ${token}`)
    .request<{ profile: Profile[] }>(query, {
      login,
    });

  const data = result?.profile?.[0];

  const profileData = profile.parse(data);

  return profileData;
};

export const getProfileProcedure = t.procedure
  .input(input)
  .query((res) => getProfile(res.input));
