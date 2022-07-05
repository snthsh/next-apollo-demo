const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    personsForHome: [Person!]!
  }

  type Person {
    id: ID!
    name: String!
    address: String
    email: String
    phoneNumber: String
  }
`;

module.exports = typeDefs;
