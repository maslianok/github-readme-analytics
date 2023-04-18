import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

import { env } from "@/env.mjs";

export function GET() {
  const token = jwt.sign(
    {
      "https://hasura.io/jwt/claims": {
        "x-hasura-default-role": "github-analytics",
        "x-hasura-allowed-roles": ["github-analytics"],
      },
    },
    env.JWT_SECRET
  );

  return NextResponse.json({ token });
}
