import { api } from "trpc-api";
import { notFound } from "next/navigation";

import WidgetsCatalogue from "@/components/WidgetsCatalogue";
import type { Profile } from "@/server/routers/github/getProfile/types";
import { isTRPCClientError } from "@/utils/utils";

interface WidgetsPageProps {
  params: { username: string };
}

const WidgetsPage = async ({ params }: WidgetsPageProps) => {
  const { username } = params;

  let githubProfile: Profile;

  try {
    githubProfile = await api.github.getProfile.query({ username });
  } catch (e) {
    if (isTRPCClientError(e)) {
      if (e.data?.code === "NOT_FOUND") return notFound();
    }

    throw e;
  }

  return (
    <>
      <WidgetsCatalogue githubProfile={githubProfile} />
    </>
  );
};

export default WidgetsPage;
