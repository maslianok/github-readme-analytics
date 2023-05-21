import z from "zod";
import type { Profile } from "@/server/routers/github/getProfile/types";

export const lightTheme = z.enum([
  "gray",
  "mauve",
  "slate",
  "sage",
  "olive",
  "sand",
  "tomato",
  "red",
  "crimson",
  "pink",
  "plum",
  "purple",
  "violet",
  "indigo",
  "blue",
  "cyan",
  "teal",
  "green",
  "grass",
  "brown",
  "orange",
  "sky",
  "mint",
  "lime",
  "yellow",
  "amber",
  "gold",
  "bronze",
]);

export type LightTheme = z.infer<typeof lightTheme>;

export const darkTheme = z.enum([
  "grayDark",
  "mauveDark",
  "slateDark",
  "sageDark",
  "oliveDark",
  "sandDark",
  "tomatoDark",
  "redDark",
  "crimsonDark",
  "pinkDark",
  "plumDark",
  "purpleDark",
  "violetDark",
  "indigoDark",
  "blueDark",
  "cyanDark",
  "tealDark",
  "greenDark",
  "grassDark",
  "brownDark",
  "orangeDark",
  "skyDark",
  "mintDark",
  "limeDark",
  "yellowDark",
  "amberDark",
  "goldDark",
  "bronzeDark",
]);

export type DarkTheme = z.infer<typeof darkTheme>;

export const theme = z.enum([
  ...lightTheme.options,
  ...darkTheme.options,
] as const);

export type Theme = z.infer<typeof theme>;

export const size = z.enum(["small", "wide", "narrow", "large"]);

export type Size = z.infer<typeof size>;

export const step = z.number().min(1).max(12);

export type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type ThemeColors = Record<Step, string>;

export const rank = z.enum(["S+", "S", "A++", "A+", "A", "B+", "B", "C"]);

export type Rank = z.infer<typeof rank>;

export interface WidgetProps {
  githubProfile: Profile;
  size?: Size;
  theme?: Theme;
  rounded?: boolean;
  border?: boolean;
}
