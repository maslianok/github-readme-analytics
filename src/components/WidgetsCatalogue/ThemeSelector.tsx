"use client";

import React from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";

import {
  colors,
  brightColors,
  grays,
  metals,
  toDarkTheme,
} from "@/widgets/themes";
import type { LightTheme, Step, Theme } from "@/widgets/types";
import ThemesGroup from "./ThemesGroup";

const groups: {
  label: string;
  themes: readonly LightTheme[];
  steps?: [Step, Step, Step];
}[] = [
  { label: "Grays", themes: grays, steps: [4, 7, 12] },
  { label: "Colors", themes: colors },
  { label: "Bright Colors", themes: brightColors },
  { label: "Metals", themes: metals, steps: [4, 7, 12] },
];

const darkGroups = groups.map((group) => ({
  ...group,
  themes: group.themes.map(toDarkTheme),
}));

interface GroupProps {
  label: string;
  groups: {
    label: string;
    themes: readonly Theme[];
    steps?: [Step, Step, Step];
  }[];
}

const Group: React.FC<GroupProps> = ({ label, groups }) => (
  <div>
    <h4 className="text-2xl font-bold mb-6">{label}</h4>
    <div className="flex flex-col gap-4 items-start">
      {groups.map((group) => (
        <ThemesGroup {...group} key={group.label} />
      ))}
    </div>
  </div>
);

interface ThemeSelectorProps {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ theme, setTheme }) => {
  return (
    <RadioGroup.Root
      defaultValue="gray"
      value={theme}
      onValueChange={(newTheme: Theme) => setTheme(newTheme)}
      aria-label="Select Widgets Theme"
      className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left"
    >
      <Group label="Light" groups={groups} />
      <Group label="Dark" groups={darkGroups} />
    </RadioGroup.Root>
  );
};

export default React.memo(ThemeSelector);
