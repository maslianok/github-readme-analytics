import React from "react";
import { tw } from "@/widgets/utils";
import { themes } from "@/widgets/themes";
import type { Theme } from "@/widgets/types";

interface AvatarProps {
  avatar: string;
  theme: Theme;
  size?: number;
  alt?: string;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  avatar,
  theme,
  className,
  size = 64,
  alt = "",
}) => (
  <img
    {...tw(`rounded-full object-cover border transition ${className}`)}
    height={size}
    width={size}
    src={avatar}
    alt={alt}
    style={{
      borderColor: themes[theme][6],
    }}
  />
);

export default Avatar;
