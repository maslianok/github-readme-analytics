"use client";

import { useState } from "react";
import superjson from "superjson";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink, getFetch, loggerLink } from "@trpc/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { env } from "@/env.mjs";

import { trpc } from "./trpc";

const getQueryClient = () =>
  new QueryClient({
    defaultOptions: { queries: { staleTime: 5000 } },
  });

const getBaseUrl = () => {
  // browser should use relative url
  if (typeof window !== "undefined") return "";
  // SSR should use vercel url
  if (env.DOMAIN) {
    return `https://${env.DOMAIN}`;
  }
  // dev SSR should use localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
};

interface TrpcProviderProps {
  children: React.ReactNode;
}

export const TrpcProvider: React.FC<TrpcProviderProps> = ({ children }) => {
  const [queryClient] = useState(getQueryClient);

  const url = `${getBaseUrl()}/api/trpc`;

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === "development" ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),
        httpBatchLink({
          url,
          fetch: async (input, init?) => {
            const fetch = getFetch();
            return fetch(input, {
              ...init,
              credentials: "include",
            });
          },
        }),
      ],
      transformer: superjson,
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </trpc.Provider>
  );
};
