import { env } from "@/env.mjs";

export const getBaseUrl = () => {
  // browser should use relative url
  if (typeof window !== "undefined") return "";
  // SSR should use site url
  if (env.NEXT_PUBLIC_SITE_URL) {
    return `https://${env.NEXT_PUBLIC_SITE_URL}`;
  }
  // dev SSR should use localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
};

export const getUrl = () => getBaseUrl() + "/api/trpc";
