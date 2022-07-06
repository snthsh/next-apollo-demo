const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    persons(
      """
      The number of results to show. Must be  >=1. Default = 20
      """
      pageSize: Int
      """
      If you add a cursor here, it will only return results _after_ this cursor
      """
      after: String
    ): PersonConnection!
  }

  type Person {
    id: ID!
    name: String!
    address: String
    email: String
    phoneNumber: String
  }

  """
  Simple wrapper around list of persons that contains a cursor to the
  last item in the list.
  """
  type PersonConnection {
    cursor: String!
    hasMore: Boolean!
    persons: [Person]!
  }
`;

module.exports = typeDefs;
