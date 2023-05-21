"use client";

import React from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";

import { themes } from "@/widgets/themes";
import type { Step, Theme } from "@/widgets/types";

import styles from "./styles.module.scss";

const format = (input: string) =>
  input
    .replace("Dark", "")
    .split(/(?=[A-Z])/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

interface ThemesGroupProps {
  label: string;
  themes: readonly Theme[];
  steps?: [Step, Step, Step];
}

const ThemesGroup: React.FC<ThemesGroupProps> = ({
  label,
  themes: themesGroup,
  steps = [4, 7, 11],
}) => (
  <div>
    <h4 className="text-lg font-semibold mb-4">{label}</h4>
    <ul className="flex flex-wrap items-start gap-2">
      {themesGroup.map((theme) => (
        <li key={theme}>
          <RadioGroup.Item
            className={styles.item}
            style={{
              background: themes[theme][steps[0]],
              borderColor: themes[theme][steps[1]],
              color: themes[theme][steps[2]],
            }}
            value={theme}
          >
            {format(theme)}
          </RadioGroup.Item>
        </li>
      ))}
    </ul>
  </div>
);

export default React.memo(ThemesGroup);
