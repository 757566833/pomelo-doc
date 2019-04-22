const path = require('path');
const Koa = require('koa');
const serve = require('koa-static');

const app = new Koa();

app.use(serve(path.join(__dirname, 'public'), {
  maxage: 24 * 60 * 60 * 1000
}));

app.listen(3001);