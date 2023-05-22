import { getBaseUrl } from "@/utils/utils";
import {
  tileGap as defaultTileGap,
  tileSize as defaultTileSize,
} from "./constants";
import type { Size, WidgetProps } from "./types";

// Satori requires `tw` to render styles, so we need to duplicate className to tw
export const tw = (className: string) => ({
  tw: className,
  className,
});

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

export const formatLargeNumber = (number: number): string => {
  const abbreviations = ["", "k", "m", "b", "t"];
  const sign = Math.sign(number);
  let absNumber = Math.abs(number);
  let abbreviationIndex = 0;

  while (absNumber >= 1000 && abbreviationIndex < abbreviations.length - 1) {
    absNumber /= 1000;
    abbreviationIndex++;
  }

  const formattedNumber = absNumber.toFixed(1).replace(/\.?0+$/, ""); // Trim trailing zeros
  const signPrefix = sign === -1 ? "-" : "";

  return signPrefix + formattedNumber + abbreviations[abbreviationIndex];
};

export const textStrokeShadow = (width: number, color: string) =>
  `0 0 ${width}px ${color},
 0 0 ${width}px ${color},
 0 0 ${width}px ${color},
 0 0 ${width}px ${color}`;

export const getWidgetUrl = (
  widget: string,
  options?: { username: string } & Omit<WidgetProps, "githubProfile">
): string => {
  const widgetUrl = new URL("/api/widgets/" + widget, getBaseUrl());
  if (options) {
    Object.entries(options).forEach(([key, value]) =>
      widgetUrl.searchParams.set(key, String(value))
    );
  }
  return widgetUrl.href;
};
