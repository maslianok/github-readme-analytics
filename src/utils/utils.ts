import type { AppRouter } from "@/server/routers";
import { TRPCClientError } from "@trpc/client";
import { env } from "@/env.mjs";

export const isTRPCClientError = (
  cause: unknown
): cause is TRPCClientError<AppRouter> => cause instanceof TRPCClientError;

export const getBaseUrl = () => {
  // SSR should use site url
  if (env.NEXT_PUBLIC_SITE_URL) {
    return `https://${env.NEXT_PUBLIC_SITE_URL}`;
  }
  // dev SSR should use localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
};
