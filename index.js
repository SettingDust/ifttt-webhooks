const Koa = require('koa');
const app = new Koa();
const morgan = require('koa-morgan');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const router = new Router();

router.get("/star_pic/:text", require('./routes/star_pic'));

app
    .use(router.routes())
    .use(router.allowedMethods())
    .use(morgan('dev'))
    .use(bodyParser());

app.listen(3000);

console.log('Listing port 3000!');
