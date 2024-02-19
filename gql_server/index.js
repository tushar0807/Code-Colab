import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema/type-defs.js";
import { resolvers } from "./schema/resolvers.js";
import express from 'express'

import cors from 'cors'

const app = express()


const server = new ApolloServer({
    typeDefs,
    resolvers,
    graphiql : true
});

app.use('/',
cors(),
)

server.listen(process.env.GQL_PORT).then(({ url }) => {
    console.log(`GQL server is running at : ${url} `);
});