const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  if (ctx.path === '/test') {
    const res = {data: 'Hello World1'}
    ctx.body = res;
  }
})

app.listen(3000, () => {
  console.log('🚀3000')
})