const Koa = require('koa');
const app = new Koa();

const main = ctx => {
    //可以获取用户请求的路径
    console.log(ctx.request.path)
    console.log(ctx.request)
    console.log(ctx.response)
    ctx.response.type = 'json';
    ctx.response.body = {
        data : 'Hello world'
    }
}

app.use(main)
app.listen(3000);