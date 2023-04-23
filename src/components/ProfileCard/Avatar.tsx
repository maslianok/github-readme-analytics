import React from "react";
import * as Avatar from "@radix-ui/react-avatar";

interface GithubAvatarProps {
  avatar: string;
  alt?: string;
}

const GithubAvatar: React.FC<GithubAvatarProps> = ({ avatar, alt = "" }) => (
  <Avatar.Root className="bg-blackA3 inline-flex h-[120px] w-[120px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
    <Avatar.Image
      className="h-full w-full rounded-[inherit] object-cover"
      src={avatar}
      alt={alt}
    />
    <Avatar.Fallback
      className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
      delayMs={600}
    >
      {alt}
    </Avatar.Fallback>
  </Avatar.Root>
);

export default GithubAvatar;
