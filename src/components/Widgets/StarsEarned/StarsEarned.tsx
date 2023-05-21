import Card from "@/widgets/common/Card";
import { textStrokeShadow, tw } from "@/widgets/utils";
import { themes } from "@/widgets/themes";
import type { WidgetProps } from "@/widgets/types";

import { StarIcon } from "@heroicons/react/24/solid";

interface StarsEarnedProps extends WidgetProps {}

const StarsEarned: React.FC<StarsEarnedProps> = ({
  githubProfile,
  size = "small",
  theme = "gray",
  rounded = true,
  border = true,
}) => {
  const { ownedRepoStar: stars } = githubProfile;

  const starColor = stars > 0 ? themes["yellow"][10] : themes[theme][6];

  if (size === "wide") {
    return (
      <Card size={size} theme={theme} rounded={rounded} border={border}>
        <div {...tw("flex gap-6 w-full")}>
          <div
            {...tw(
              "flex flex-col justify-center gap-1.5 text-xs text-left flex-auto"
            )}
          >
            <h2 {...tw("text-xl font-bold")}>Total Stars Earned</h2>
            <p
              {...tw("text-base font-medium transition")}
              style={{ color: themes[theme][11] }}
            >
              {stars > 0 ? "Beats 98.7%" : "So Empty..."}
            </p>
          </div>

          <div {...tw("flex items-center justify-center flex-none")}>
            <div {...tw("flex relative w-28 h-28")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 112 114"
                {...tw("absolute inset-0")}
              >
                <path
                  fill={starColor}
                  d="M34.5 11a4.7 4.7 0 0 0-6.6-2.2 56 56 0 1 0 57.8.9 4.7 4.7 0 0 0-6.7 2 5.5 5.5 0 0 0 2.1 7 46 46 0 1 1-49-.8 5.5 5.5 0 0 0 2.4-7Z"
                />
              </svg>

              <StarIcon
                width={32}
                height={32}
                color={starColor}
                {...tw("absolute -top-2.5 left-1/2 -translate-x-1/2")}
              />

              <div
                {...tw(
                  "absolute inset-0 flex text-center items-center justify-center"
                )}
              >
                <p
                  {...tw("text-4xl font-bold")}
                  style={{
                    textShadow: textStrokeShadow(3, themes[theme][1]),
                  }}
                >
                  {stars}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card size={size} theme={theme} rounded={rounded} border={border}>
      <div {...tw("flex gap-6 w-full")}>
        <div {...tw("flex flex-col gap-1.5 text-xs text-left flex-auto")}>
          <h2 {...tw("text-base font-bold")}>
            <div {...tw("text-4xl mb-2 flex gap-1.5 items-center")}>
              {stars} <StarIcon width={32} height={32} color={starColor} />
            </div>
            Stars Earned
          </h2>
          <p
            {...tw("font-medium transition")}
            style={{ color: themes[theme][11] }}
          >
            {stars > 0 ? "Beats 98.7%" : "So Empty..."}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default StarsEarned;
