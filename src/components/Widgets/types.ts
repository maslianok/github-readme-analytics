import { themes } from "./themes";

export type Theme = keyof typeof themes;

export type Size = "small" | "wide" | "narrow" | "large";

export type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type Rank = "S+" | "S" | "A++" | "A+" | "A" | "B+" | "B" | "C";
