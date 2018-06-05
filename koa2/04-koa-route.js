const route = require('koa-route')
const Koa = require('koa');
const app = new Koa();

const about = ctx => {
    ctx.response.body = "<a href='/'>Index page</a>";
};

const main = ctx => {
    ctx.response.body = 'Hello world222';
};

app.use(route.get('/about', about));
app.use(route.get('/', main))
app.listen(3000);