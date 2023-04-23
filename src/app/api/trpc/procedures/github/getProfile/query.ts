import { gql } from "graphql-request";

/** Returns the profile information of a given GitHub user by their login.
 *
 * The query will return the user's ID, login name, their actual name (if provided),
 * their location (if provided), as well as how many stars they have received for
 * repositories they own, collaborated on, and repositories owned by organizations.
 *
 * In addition, the query has a nested field called `countryRanks`, which provides
 * information about the user's position rankings for various contributions categories,
 * such as issue contributions, pull request contributions, etc.
 *
 * This information is broken down by country, so the query will also return the name
 * of the country where the user is contributing from, along with their ranking in each category.
 * The query also includes the date when the rankings were last updated.
 *
 * `$login` variable is required, which is a string representing the user's login name. */
const query = gql`
  query profileByLogin($login: String!) {
    profile(where: { login: { _eq: $login } }) {
      id
      login
      name
      avatar
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

export default query;
