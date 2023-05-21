"use client";

import React, { useState } from "react";
import type { Size, Theme, WidgetProps } from "@/widgets/types";
import type { Profile } from "@/server/routers/github/getProfile/types";

import Contributions from "@/widgets/Contributions";
import Ranking from "@/widgets/Ranking";
import Rating from "@/widgets/Rating";
import StarsEarned from "@/widgets/StarsEarned";
import Stats from "@/widgets/Stats";
import Streak from "@/widgets/Streak";

import ThemeSelector from "./ThemeSelector";

import styles from "./styles.module.scss";

const widgets: {
  id: string;
  widget: React.FC<WidgetProps>;
  size: Size;
  href: string;
}[] = [
  { id: "stats", widget: Stats, size: "wide", href: "" },

  { id: "contributions-1", widget: Contributions, size: "small", href: "" },
  { id: "contributions-2", widget: Contributions, size: "wide", href: "" },

  { id: "ranking", widget: Ranking, size: "small", href: "" },
  // { id: "Ranking", widget: Ranking, size: "wide", href: "" },
  // { id: "Ranking", widget: Ranking, size: "narrow", href: "" },
  // { id: "Ranking", widget: Ranking, size: "large", href: "" },

  { id: "rating", widget: Rating, size: "small", href: "" },

  { id: "stars-earned-1", widget: StarsEarned, size: "small", href: "" },
  { id: "stars-earned-2", widget: StarsEarned, size: "wide", href: "" },

  // { id: "Streak", widget: Streak, size: "small", href: "" },
  // { id: "Streak", widget: Streak, size: "wide", href: "" },
];

interface WidgetsCatalogueProps {
  githubProfile: Profile;
}

const WidgetsCatalogue: React.FC<WidgetsCatalogueProps> = ({
  githubProfile,
}) => {
  const [theme, setTheme] = useState<Theme>("gray");

  return (
    <div className={styles.container}>
      <ThemeSelector theme={theme} setTheme={setTheme} />

      <hr />

      <ul className={styles.grid}>
        {widgets.map((widget) => (
          <li key={widget.id}>
            <widget.widget
              githubProfile={githubProfile}
              size={widget.size}
              theme={theme}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(WidgetsCatalogue);
