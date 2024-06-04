import { gql } from 'graphql-request';

export const GET_PROJECTS = gql`
query Projects {
  personalProjects {
    id
    name
    desc
    thumbnail {
      id
      url
    }
  }
}
`;
