import type { AppRouter } from "@/server/routers";
import { TRPCClientError } from "@trpc/client";

export const isTRPCClientError = (
  cause: unknown
): cause is TRPCClientError<AppRouter> => cause instanceof TRPCClientError;
