import { gql } from 'graphql-request';

export default gql`
  query profileByLogin($login: String!) {
    profile(where: { login: { _eq: $login } }) {
      id
      name
      location
    }
  }
`;
