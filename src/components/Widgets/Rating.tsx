import Card from "./Card";
import Rank from "./Rank";
import { formatPercent, formatRating } from "./utils";
import type { Rank as IRank, Size, Theme } from "./types";
import Flag from "../Flag";

interface RatingProps {
  size?: Size;
  theme?: Theme;
  data: {
    rank: IRank;
    rating: number;
    beats: number;
    country: { code: string; name: string };
  };
}

const Rating: React.FC<RatingProps> = ({
  size = "small",
  theme = "gray",
  data,
}) => {
  const {
    rank,
    rating,
    beats,
    country: { code, name },
  } = data;

  return (
    <Card size={size} theme={theme}>
      <div className="flex flex-col gap-2">
        <Flag code={code} name={name} />
        <h2 className="text-xs">Rating in {name}</h2>
        <h3 className="text-[22px] font-bold">{formatRating(rating)}</h3>
        <p className="text-xs">Beats {formatPercent(beats)}</p>
      </div>

      {/* <Rank rank={rank} /> */}
    </Card>
  );
};

export default Rating;
