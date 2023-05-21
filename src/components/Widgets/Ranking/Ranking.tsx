import Card from "@/widgets/common/Card";
import { formatPercent, formatRating, tw } from "@/widgets/utils";
import type { WidgetProps } from "@/widgets/types";
import Flag from "@/widgets/common/Flag";

interface RankingProps extends WidgetProps {}

const Ranking: React.FC<RankingProps> = ({
  githubProfile,
  size = "small",
  theme = "gray",
  rounded = true,
  border = true,
}) => {
  const { countryRanks } = githubProfile;

  const {
    rating,
    beats,
    country: { code, name },
  } = {
    rating: 93578,
    beats: 93.7,
    country: {
      code: "ua",
      name: "Ukraine",
    },
  };

  return (
    <Card size={size} theme={theme} rounded={rounded} border={border}>
      <div {...tw("flex flex-col gap-2 text-xs")}>
        <Flag code={code} name={name} />
        <h2>Rating in {name}</h2>
        <h3 {...tw("text-[22px] font-bold")}>{formatRating(rating)}</h3>
        <p>Beats {formatPercent(beats)}</p>
      </div>
    </Card>
  );
};

export default Ranking;
