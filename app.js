import express from 'express';
import {ApolloServer } from 'apollo-server-express';
import { typeDefs } from './schema/schema.js';
import { resolvers } from './resolver/resolver.js';

const app = express();

let server = null;
async function startServer(){
    server = new ApolloServer({
        typeDefs,
        resolvers
    });
    await server.start();
    server.applyMiddleware({app});
}
startServer()
app.listen({port: 4000}, ()=>{
    console.log(`Server ready at: http://localhost:3000${server.graphqlPath}`);
})