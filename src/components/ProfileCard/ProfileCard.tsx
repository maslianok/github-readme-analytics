import { Profile } from "@/trpc/procedures/github/getProfile/types";
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
    <div className="aspect-video relative rounded-xl overflow-hidden w-full min-w-[300px] max-w-[640px] p-4 border border-black/5 flex gap-4">
      <GithubAvatar avatar={avatar} alt={name || login} />

      <div className="text-base text-left">
        <h1 className="text-xl font-bold">{name}</h1>
        <div>@{login}</div>
        <div>{location}</div>
      </div>
    </div>
  );
};

export default ProfileCard;
