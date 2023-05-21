import z from "zod";
import { size as zSize, theme as zTheme } from "@/widgets/types";

const toBoolean = (param: unknown, defaultValue = true) => {
  switch (param) {
    case "true":
      return true;
    case "false":
      return false;
    default:
      return defaultValue;
  }
};

export const getWidgetParams = (searchParams: URLSearchParams) => {
  // GitHub Username
  const username = z
    .string()
    .min(1)
    .parse(searchParams.get("username")?.trim());

  // Image params
  const size = zSize.parse(searchParams.get("size") ?? "small");
  const theme = zTheme.parse(searchParams.get("theme") ?? "gray");
  const rounded = toBoolean(searchParams.get("rounded"));
  const border = toBoolean(searchParams.get("border"));

  return {
    username,
    size,
    theme,
    rounded,
    border,
  };
};
