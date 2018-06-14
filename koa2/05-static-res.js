//处理静态资源

const path = require('path');
const Koa = require('koa');
const serve = require('koa-static');
const app = new Koa();

const main = serve(path.join(__dirname));
app.use(main);
app.listen(3000);

//curl -i http://localhost:3000/koa-docker/app.js