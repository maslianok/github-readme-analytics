import * as radixColors from "@radix-ui/colors";

import type { Rank as IRank } from "../types";

const getColors = (rank: IRank) => {
  switch (rank) {
    default:
      return {
        bgColor: radixColors.greenDark.green10,
        textColor: radixColors.grayDark.gray12,
        circleColor: radixColors.grayDark.gray12,
      };
  }
};

interface RankProps {
  rank: IRank;
}

const Rank: React.FC<RankProps> = ({ rank }) => {
  const { bgColor, circleColor, textColor } = getColors(rank);

  const strokeDasharray = 2 * Math.PI * 45;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="120"
      width="120"
      viewBox="0 0 120 120"
    >
      <circle cx="50%" cy="50%" r="60" fill={bgColor} />
      
      <circle
        cx="50%"
        cy="50%"
        r="45"
        fill="none"
        stroke={circleColor}
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={strokeDasharray}
        strokeDashoffset={0.13 * strokeDasharray}
      />

      <text
        x="50%"
        y="50%"
        alignment-baseline="central"
        dominant-baseline="central"
        text-anchor="middle"
        fontSize="32"
        fontWeight="bold"
        fill={textColor}
      >
        {rank}
      </text>
    </svg>
  );
};

export default Rank;
