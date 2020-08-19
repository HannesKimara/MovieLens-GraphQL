import { ApolloServer, gql } from 'apollo-server-express';
import { readFileSync } from 'fs';
import * as path from 'path';

import { PORT, MONGO_URL } from './config/config';
import { resolvers } from './resolvers'
import { DocumentNode } from 'graphql';
import { app } from './server/server';

const mongoose = require('mongoose');
const morgan = require('morgan');

mongoose.connect(MONGO_URL, 
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then((db:any) => console.log('Connected to db'))
    .catch((err:any) => console.error(err))

const rawSchema: string = readFileSync(path.join(__dirname, 'schema/schema.graphql'), {encoding: 'utf-8'});
const typeDefs: DocumentNode = gql(rawSchema);

const server: ApolloServer = new ApolloServer({ typeDefs, resolvers });

app.use(morgan('dev'));
server.applyMiddleware({
    app: app
});

app.listen(PORT, () => {
    console.log(`Server ready at ${PORT}`);
});