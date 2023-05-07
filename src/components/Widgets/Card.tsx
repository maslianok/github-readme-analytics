import type { Size, Theme } from "./types";
import { getCardSize, getColor } from "./utils";

interface CardProps {
  size?: Size;
  theme?: Theme;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  size = "small",
  theme = "gray",
  children,
}) => {
  const { height, width } = getCardSize(size);

  return (
    <div
      className="relative rounded-3xl border p-6 text-left leading-tight"
      style={{
        backgroundColor: getColor(theme, 1),
        borderColor: getColor(theme, 6),
        color: getColor(theme, 12),
        height,
        width,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
