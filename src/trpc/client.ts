"use client";

import superjson from "superjson";
import { httpBatchLink, loggerLink } from "@trpc/client";
import { experimental_createTRPCNextAppDirClient } from "@trpc/next/app-dir/client";

import type { AppRouter } from "@/server/routers";

import { getUrl } from "./shared";

export const api = experimental_createTRPCNextAppDirClient<AppRouter>({
  config() {
    return {
      transformer: superjson,
      links: [
        loggerLink({
          enabled: (op) =>
            process.env.NODE_ENV === "development" ||
            (op.direction === "down" && op.result instanceof Error),
        }),
        httpBatchLink({
          url: getUrl(),
          headers() {
            return {
              "x-trpc-source": "client",
            };
          },
        }),
      ],
    };
  },
});
