import z from "zod";

// Country Info

export const countryInfo = z.object({
  name: z.string(),
});

export type CountryInfo = z.infer<typeof countryInfo>;

// Counrty Rank

export const counrtyRank = z.object({
  profileId: z.string(),
  countryInfo,
  positionOwnedRepoStar: z.number().min(0),
  positionFollowersCount: z.number().min(0),
  positionContributionsCount: z.number().min(0),
  positionIssueContributions: z.number().min(0),
  positionCommitContributions: z.number().min(0),
  positionPullRequestContributions: z.number().min(0),
  positionPullRequestReviewContributions: z.number().min(0),
  positionRepositoriesWithContributedIssues: z.number().min(0),
  positionRepositoriesWithContributedCommits: z.number().min(0),
  positionRepositoriesWithContributedPullRequests: z.number().min(0),
  positionRepositoriesWithContributedPullRequestReviews: z.number().min(0),
  updatedAt: z.string(),
});

export type CounrtyRank = z.infer<typeof counrtyRank>;

// Profile

export const profile = z.object({
  id: z.string(),
  login: z.string(),
  name: z.string(),
  avatar: z.string(),
  location: z.string(),
  ownedRepoStar: z.number().min(0),
  collaboratedRepoStar: z.number().min(0),
  orgRepoStar: z.number().min(0),
  countryRanks: counrtyRank.array(),
});

export type Profile = z.infer<typeof profile>;

// Input

export const input = z.object({
  username: z.string().min(0),
});

export type Input = z.infer<typeof input>;

// Output

export const output = profile;

export type Output = z.infer<typeof output>;
