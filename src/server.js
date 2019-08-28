const Koa = require('koa');

const app = new Koa();
const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');
const schema = require('./graphql/schema')
app.listen(9000);

app.on('error', err => {
  log.error('server error', err)
});
app.use(mount('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
})))