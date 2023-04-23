"use client";

import { useParams } from "next/navigation";
import { trpc } from "@/utils/trpc";
import ProfileCard from "@/components/ProfileCard";

const Skeleton = () => (
  <div className="aspect-video animate-pulse relative bg-slate-50 rounded-xl overflow-hidden w-full p-4 border border-black/5" />
);

const Profile = () => {
  const { login } = useParams();

  const { data: profile, isLoading } = trpc.github.getProfile.useQuery(
    { login },
    {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading || !profile) return <Skeleton />;

  return <ProfileCard profile={profile} />;
};

export default Profile;
