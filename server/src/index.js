require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const casual = require('casual');

const mocks = {
  Query: () => ({
    personsForHome: () => [...new Array(10)],
  }),
  Person: () => ({
    id: () => casual.integer(0, 1000000),
    name: () => casual.name,
    address: () => casual.address,
    email: () => casual.email,
    phoneNumber: () => casual.phone,
  }),
};

const server = new ApolloServer({ typeDefs, mocks });

server.listen().then(() => {
  console.log(`Server is running!
    Listening on port 4000 
    Explore at https://studio.apollographql.com/sandbox
  `);
});
