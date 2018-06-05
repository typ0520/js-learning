const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello world';
});

console.log(process.env.HOST);
console.log(process.env.PORT);
console.log(process.env.NODE_ENV);
app.listen(process.env.PORT);