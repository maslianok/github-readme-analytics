import { WidgetProps } from "./types";

import Contributions from "./Contributions";
import Ranking from "./Ranking";
import Rating from "./Rating";
import StarsEarned from "./StarsEarned";
import Stats from "./Stats";
import Streak from "./Streak";

const widgets: Record<string, React.FC<WidgetProps>> = {
  stats: Stats,
  contributions: Contributions,
  ranking: Ranking,
  rating: Rating,
  "stars-earned": StarsEarned,
  streak: Streak,
};

export default widgets;
