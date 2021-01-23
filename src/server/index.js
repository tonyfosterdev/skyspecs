const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const {
  schema: helloSchema,
  resolver: helloResolver,
} = require('./hello/graphql');

const app = express();
const port = process.env.PORT || 5000;
const graphqlPath = '/graphql';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const schema = buildSchema([helloSchema].join('\n'));
const rootResolver = {
  ...helloResolver,
};

app.use(graphqlPath, graphqlHTTP({
  schema: schema,
  rootValue: rootResolver,
  graphiql: true,
}));

app.listen(port, () => console.log(`Listening on port ${port}. GraphiQL may be accessed here at http://localhost:${port}${graphqlPath}`));