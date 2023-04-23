import jwt from "jsonwebtoken";
import z from "zod";

import { t } from "@/trpc/trpc";
import { env } from "@/env.mjs";

export const getJWT = async () => {
  const res = jwt.sign(
    {
      "https://hasura.io/jwt/claims": {
        "x-hasura-default-role": "github-analytics",
        "x-hasura-allowed-roles": ["github-analytics"],
      },
    },
    env.JWT_SECRET
  );

  const token = z.string().parse(res);

  return { token };
};

export const getJWTProcedure = t.procedure.query(getJWT);
