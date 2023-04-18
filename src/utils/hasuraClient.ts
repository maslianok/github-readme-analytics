import { GraphQLClient } from 'graphql-request';

const hasuraClient = new GraphQLClient('https://gql.ithub.app/v1/graphql', {
  fetch,
});

export default hasuraClient;
