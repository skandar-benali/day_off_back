import { ApolloServer } from "apollo-server";
import { runtimeVars } from "./configs";

import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import dbConnect from "./db";

const { NODE_ENV, PORT } = runtimeVars;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: NODE_ENV === "DEV",
  playground: NODE_ENV === "DEV"
});

// The `listen` method launches a web server.
server
  .listen(PORT)
  .then(async ({ url }) => {
    await dbConnect();
    console.log(`🚀  Server ready at ${url}`);
  })
  .catch((e) => console.error(e));
