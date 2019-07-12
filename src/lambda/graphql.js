import { ApolloServer, gql } from 'apollo-server-lambda';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: (root, args, context) => {
      return 'Hello, world!';
    }
  }
};

const server = new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs,
  resolvers
});

exports.handler = server.createHandler();
