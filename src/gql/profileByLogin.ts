import { gql } from 'graphql-request';

export default gql`
  query profileByLogin($login: String!) {
    profile(where: { login: { _eq: $login } }) {
      id
      login
      name
      location
      ownedRepoStar
      collaboratedRepoStar
      orgRepoStar
      countryRanks {
        profileId
        countryInfo {
          name
        }
        positionOwnedRepoStar
        positionFollowersCount
        positionContributionsCount
        positionIssueContributions
        positionCommitContributions
        positionPullRequestContributions
        positionPullRequestReviewContributions
        positionRepositoriesWithContributedIssues
        positionRepositoriesWithContributedCommits
        positionRepositoriesWithContributedPullRequests
        positionRepositoriesWithContributedPullRequestReviews
        updatedAt
      }
    }
  }
`;
