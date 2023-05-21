"use server";

import superjson from "superjson";
import { headers } from "next/headers";
import { httpBatchLink, loggerLink } from "@trpc/client";
import { experimental_createTRPCNextAppDirServer } from "@trpc/next/app-dir/server";

import type { AppRouter } from "@/server/routers";

import { getUrl } from "./shared";

export const api = experimental_createTRPCNextAppDirServer<AppRouter>({
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
            // Forward headers from the browser to the API
            return {
              ...Object.fromEntries(headers()),
              "x-trpc-source": "rsc",
            };
          },
        }),
      ],
    };
  },
});
