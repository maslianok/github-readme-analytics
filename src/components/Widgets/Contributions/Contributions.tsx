import Card from "@/widgets/common/Card";
import { tw } from "@/widgets/utils";
import { themes } from "@/widgets/themes";
import type { WidgetProps } from "@/widgets/types";

const Illustartion = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 141 127"
    {...tw("flex-none")}
  >
    <rect width="93" height="8" x="24" y="15.5" fill="#30A14E" rx="4" />
    <rect width="45" height="8" x="24" y="37.5" fill="#40C463" rx="4" />
    <rect width="20" height="8" x="24" y="59.5" fill="#9BE9A8" rx="4" />
    <rect width="11" height="8" x="24" y="81.5" fill="#9BE9A8" rx="4" />
    <rect width="6" height="8" x="24" y="103.5" fill="#9BE9A8" rx="3" />
  </svg>
);

interface ContributionsProps extends WidgetProps {}

const Contributions: React.FC<ContributionsProps> = ({
  githubProfile,
  size = "small",
  theme = "gray",
  rounded = true,
  border = true,
}) => {
  return (
    <Card size={size} theme={theme} rounded={rounded} border={border}>
      <div {...tw("flex gap-6 w-full")}>
        <div {...tw("flex flex-col gap-1.5 text-xs text-left flex-auto")}>
          <h2 {...tw("text-base font-bold")}>
            <div {...tw("text-4xl mb-2")}>6</div>
            Contributions
          </h2>
          <p {...tw("font-medium transition")} style={{ color: themes[theme][11] }}>
            Oct 20 - Present
          </p>
        </div>

        {size === "wide" && <Illustartion />}
      </div>
    </Card>
  );
};

export default Contributions;
