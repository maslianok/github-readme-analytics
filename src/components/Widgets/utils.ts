import {
  tileGap as defaultTileGap,
  tileSize as defaultTileSize,
} from "./constants";
import { themes } from "./themes";
import type { Size, Step, Theme } from "./types";

export const getCardSize = (
  size: Size,
  tileSize = defaultTileSize,
  tileGap = defaultTileGap
) => {
  const smallTileSize = tileSize;
  const largeTileSize = tileSize + tileGap + tileSize;

  switch (size) {
    // □
    case "small":
    default:
      return { height: smallTileSize, width: smallTileSize };

    // □ □
    case "wide":
      return { height: smallTileSize, width: largeTileSize };

    // □
    // □
    case "narrow":
      return { height: largeTileSize, width: smallTileSize };

    // □ □
    // □ □
    case "large":
      return { height: largeTileSize, width: largeTileSize };
  }
};

// TODO: Maybe, there is an easier way?
export const getColor = (theme: Theme, step: Step): string => {
  const colors = themes[theme];
  const key = `${theme.replace(/Dark&/gm, "")}${step}` as keyof typeof colors;
  return colors[key] as string;
};

export const formatRating = (num: number) =>
  "#" +
  new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num);

export const formatPercent = (num: number) =>
  new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(num / 100);
