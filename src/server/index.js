if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const {
  schema: gistSchema,
  resolver: gistResolver,
} = require('./gists/graphql');
const { setupApplicationDatabase } = require('./setup');

function setupExpress() {
  const app = express();
  const port = process.env.PORT || 5000;
  const graphqlPath = '/graphql';

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // If needing to add more schemas, need to properly stitch
  const schema = buildSchema(gistSchema);

  // Resolvers may be added here
  const rootResolver = {
    ...gistResolver,
  };

  app.use(graphqlPath, graphqlHTTP({
    schema: schema,
    rootValue: rootResolver,
    graphiql: true,
  }));

  app.listen(port, () => console.log(`Listening on port ${port}. GraphiQL may be accessed here at http://localhost:${port}${graphqlPath}`));
}

// Ensure the database is ready before launching express
setupApplicationDatabase()
  .then(() => setupExpress())

