import { env } from "@/env.mjs";

export const getBaseUrl = () => {
  // browser should use relative url
  if (typeof window !== "undefined") return "";
  // SSR should use site url
  if (env.DOMAIN) {
    return `https://${env.DOMAIN}`;
  }
  // dev SSR should use localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
};

export const getUrl = () => getBaseUrl() + "/api/trpc";
