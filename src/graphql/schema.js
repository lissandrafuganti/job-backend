const { buildSchema } = require('graphql');
const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

module.exports = schema;