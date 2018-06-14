const route = require('koa-route')
const Koa = require('koa');
const app = new Koa();

const logger = (ctx, next) => {
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`)
    next();
}

app.use(logger);

const redirect = ctx => {
    ctx.response.redirect('/');
    ctx.response.body = "<a href='/'>Index page</a>";
};

const main = ctx => {
    ctx.response.body = 'Hello world';
};

app.use(route.get('/redirect', redirect));
app.use(route.get('/', main));
app.listen(3000);

//curl -i http://localhost:3000/redirect