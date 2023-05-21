import { formatLargeNumber, tw } from "@/widgets/utils";
import type { Theme } from "@/widgets/types";
import { grays, themes, toDarkTheme } from "@/widgets/themes";

export interface ListItem {
  icon: JSX.Element;
  label: string;
  value: number;
}

interface ListProps {
  theme: Theme;
  items: ListItem[];
}

const List: React.FC<ListProps> = ({ theme = "gray", items }) => {
  if (grays.includes(theme)) {
    theme = "indigo";
  } else if (grays.map(toDarkTheme).includes(theme)) {
    theme = "indigoDark";
  }

  return (
    <ul {...tw("flex flex-col gap-1.5 text-left")}>
      {items.map((item) => (
        <li {...tw("flex gap-2.5 ")} key={item.label}>
          <span {...tw("flex gap-2 w-40 flex-none")}>
            <span
              {...tw(
                "flex items-center justify-center w-4 h-4 shrin-0 whitespace-nowrap text-ellipsis transition"
              )}
              style={{ color: themes[theme][11] }}
            >
              {item.icon}
            </span>
            <span {...tw("whitespace-nowrap text-ellipsis")}>{item.label}</span>
          </span>
          <span>{formatLargeNumber(item.value)}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
