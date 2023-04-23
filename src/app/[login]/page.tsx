"use client";

import { trpc } from "@/utils/trpc";

interface ProfileProps {
  params: { login: string };
}

const Profile = async ({ params }: ProfileProps) => {
  const { login } = params;

  const profile = trpc.github.getProfile.useQuery(
    { login },
    {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
    }
  );

  return <div>Profile: {login}</div>;
};

export default Profile;
