import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

import type { Profile } from "@/trpc/procedures/github/getProfile/types";
import GithubAvatar from "./Avatar";

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  if (!profile) return null;

  const {
    login,
    name,
    avatar,
    location,
    ownedRepoStar,
    collaboratedRepoStar,
    orgRepoStar,
    countryRanks,
  } = profile;

  return (
    <div className="aspect-video relative rounded-xl overflow-hidden w-full min-w-[300px] max-w-[640px] p-8 border border-black/5 flex gap-6 items-center">
      <GithubAvatar avatar={avatar} alt={name || login} />

      <div className="text-base text-left">
        <h1 className="text-2xl font-bold">{name}</h1>
        <div>@{login}</div>
        <div>{location}</div>
      </div>

      <a
        href={`https://github.com/${login}`}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 h-12 w-12 flex items-center justify-center rounded-lg hover:bg-slate-50"
      >
        <HiOutlineArrowTopRightOnSquare size={24} />
      </a>
    </div>
  );
};

export default ProfileCard;
