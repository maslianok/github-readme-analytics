import type { Size, Theme } from "@/widgets/types";
import { getCardSize, tw } from "@/widgets/utils";
import { themes } from "@/widgets/themes";

interface CardProps {
  size?: Size;
  theme?: Theme;
  children?: React.ReactNode;
  rounded?: boolean;
  border?: boolean;
}

const Widget: React.FC<CardProps> = ({
  size = "small",
  theme = "gray",
  children,
  rounded = true,
  border = true,
}) => {
  const { height, width } = getCardSize(size);

  let className = "flex relative p-6 text-left leading-tight transition";

  if (rounded) className += " rounded-3xl";
  if (border) className += " border";

  return (
    <div
      {...tw(className)}
      data-size={size}
      style={{
        backgroundColor: themes[theme][1],
        borderColor: themes[theme][6],
        color: themes[theme][12],
        height,
        width,
      }}
    >
      {children}
    </div>
  );
};

export default Widget;
