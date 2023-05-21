import { tw } from "@/widgets/utils";
import Card from "@/widgets/common/Card";
import Avatar from "@/widgets/common/Avatar";
import List, { ListItem } from "@/widgets/common/List";
import type { WidgetProps } from "@/widgets/types";
import { themes } from "@/widgets/themes";

import {
  StarIcon,
  BookOpenIcon,
  ShareIcon,
  RocketLaunchIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

interface StatsProps extends WidgetProps {}

const Stats: React.FC<StatsProps> = ({
  githubProfile,
  size = "small",
  theme = "gray",
  rounded = true,
  border = true,
}) => {
  const items: ListItem[] = [
    { icon: <BookOpenIcon />, label: "Total Repo", value: 52 },
    { icon: <StarIcon />, label: "Stars Earned", value: 58130 },
    { icon: <RocketLaunchIcon />, label: "2023 Commits", value: 99 },
    { icon: <ShareIcon />, label: "Total PRs", value: 727 },
    { icon: <InformationCircleIcon />, label: "Total Issues", value: 147 },
  ];

  return (
    <Card size={size} theme={theme} rounded={rounded} border={border}>
      <div {...tw("flex flex-row gap-6 text-sm font-semibold")}>
        <div {...tw("flex flex-col items-center justify-center gap-1")}>
          <Avatar theme={theme} avatar={githubProfile.avatar} size={64} />
          <div
            {...tw(
              "flex flex-col items-center justify-center gap-0.5 text-center"
            )}
          >
            <h4 {...tw("font-bold")}>{githubProfile.name}</h4>
            <h5 {...tw("text-xs transition")} style={{ color: themes[theme][11] }}>
              {githubProfile.login}
            </h5>
          </div>
        </div>

        <List theme={theme} items={items} />
      </div>
    </Card>
  );
};

export default Stats;
