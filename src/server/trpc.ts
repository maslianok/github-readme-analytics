import superjson from "superjson";
import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import { createContext } from "./context";

const t = initTRPC
  .context<inferAsyncReturnType<typeof createContext>>()
  .create({
    transformer: superjson,
  });

export const router = t.router;

export const publicProcedure = t.procedure;
