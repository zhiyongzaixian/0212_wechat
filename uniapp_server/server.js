let Koa = require('koa');
let KoaRouter = require('koa-router');

// express: const app = express();
// 1. 生成应用实例
const app = new Koa();
// 2. 生成路由器 
const router = new KoaRouter();

// 3. 声明使用路由器
/*
思考：app.use()可以链式调用，
	1. 说明： use()方法返回值就是app实例
	2. 联想： promise中.then()方法的返回值还是一个promise实例，而且是一个默认为成功状态的实例，会自动进入下一个.then成功的回调

*/ 
app
	.use(router.routes()) // 声明使用路由	
	.use(router.allowedMethods()) // 声明允许使用路由方法


// 5. 注册路由
// express: req, res, next
// koa: ctx, next ---> ctx == req + res
router.get('/', (ctx, next) => {
	// 返回数据： ctx.body = '返回的数据'
	ctx.body = '服务器的返回数据111';
});


// 5.1 主页数据接口
let indexDatas = require('./datas/index.json');
router.get('/getIndexData', (ctx, next) => {
	ctx.body = indexDatas
});

// 5.2 indexCateList数据接口
let cateListData = require('./datas/indexCateList.json');
router.get('/getCateListData', (ctx, next) => {
	ctx.body = cateListData
});

// 4. 监听端口号
app.listen('3001', () => {
	console.log('服务器启动成功')
	console.log('服务器地址: http://localhost:3001')
})