import { ApolloServer, gql } from 'apollo-server';
import { readFileSync } from 'fs';
import * as path from 'path';

import { PORT } from './config/config';
import { resolvers } from './resolvers'
import { DocumentNode } from 'graphql';


const rawSchema: string = readFileSync(path.join(__dirname, 'schema/schema.graphql'), {encoding: 'utf-8'});
const typeDefs: DocumentNode = gql(rawSchema);

const server: ApolloServer = new ApolloServer({typeDefs, resolvers});

server.listen({port: PORT}).then(({url}) => {
    console.log(`Server listening at ${url}`);
});
