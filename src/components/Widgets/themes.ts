import * as radixColors from "@radix-ui/colors";
import type { Step, LightTheme, DarkTheme, Theme, ThemeColors } from "./types";

/** Converts `{ 'gray1', 'gray2', 'gray3' }` to `{ '1', '2', '3' }` */
export const toUniversalScale = (
  theme: Record<string, string>
): ThemeColors => {
  const fixedTheme = {} as ThemeColors;

  Object.entries(theme).forEach(([color, value]) => {
    const step = Number(color.replace(/\D/g, "")) as Step;
    fixedTheme[step] = value;
  });

  return fixedTheme;
};

/** Converts light theme name to linked dark theme */
export const toDarkTheme = (theme: LightTheme): DarkTheme => `${theme}Dark`;

// Radix Colors:
// https://www.radix-ui.com/colors

export const colors = [
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
  "orange",
  "brown",
] as const;

export const brightColors = ["sky", "mint", "lime", "yellow", "amber"] as const;

export const grays = [
  "gray",
  "mauve",
  "slate",
  "sage",
  "olive",
  "sand",
] as const;

export const metals = ["bronze", "gold"] as const;

const radixThemes = [...grays, ...colors, ...brightColors, ...metals] as const;

// Light Theme

export const lightThemes = new Map<LightTheme, ThemeColors>(
  radixThemes.map((theme) => [theme, toUniversalScale(radixColors[theme])])
);

// Dark Theme

export const darkThemes = new Map<DarkTheme, ThemeColors>(
  radixThemes.map((theme) => {
    const darkTheme = toDarkTheme(theme);
    return [darkTheme, toUniversalScale(radixColors[darkTheme])];
  })
);

// Combined Themes

export const themes = Object.fromEntries([
  ...Array.from(lightThemes.entries()),
  ...Array.from(darkThemes.entries()),
]) as Record<Theme, ThemeColors>;
