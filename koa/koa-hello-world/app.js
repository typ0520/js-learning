const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello world';
});

// Constants
const PORT = process.env.PORT || 8080;

console.log(process.env.NODE_ENV + ' , ' + process.env.PORT)

app.listen(PORT, () => {
	console.log(`Running on http://127.0.0.1:${PORT}`);
});