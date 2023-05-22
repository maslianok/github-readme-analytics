"use client";

import React, { useState } from "react";
import widgets from "@/widgets/widgets";
import { sizes } from "@/widgets/types";
import type { Theme } from "@/widgets/types";
import { getWidgetUrl } from "@/widgets/utils";
import type { Profile } from "@/server/routers/github/getProfile/types";

import ThemeSelector from "./ThemeSelector";
import CopyToClipboard from "./CopyToClipboard";

import styles from "./styles.module.scss";

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
        {Object.entries(widgets).map(([key, Widget]) => (
          <React.Fragment key={key}>
            {sizes.map((size) => {
              const widgetUrl = getWidgetUrl(key, {
                username: githubProfile.login,
                theme,
                size,
              });
              return (
                <li key={size}>
                  <CopyToClipboard url={widgetUrl}>
                    <Widget
                      githubProfile={githubProfile}
                      size={size}
                      theme={theme}
                    />
                  </CopyToClipboard>
                </li>
              );
            })}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(WidgetsCatalogue);
