let Koa = require('koa');
let KoaRouter = require('koa-router');
let jwt = require('jsonwebtoken');
let Fly = require("flyio/src/node")
let fly = new Fly;
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

// 5.3 cateGoryData数据接口
let cateGoryData = require('./datas/categoryDatas.json');
router.get('/getCateGoryData', (ctx, next) => {
	ctx.body = cateGoryData
});


// 5.4 获取用户唯一openid的接口
router.get('/getOpenId', async (ctx, next) => {
	// 1. 获取参数： code
	let code = ctx.query.code;
	let appId = 'wx810e8b1fde386fde';
	let appSecret = 'f7b98fbf9bd8fd45f0b84f79f8fff9f2';
	
	let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`
	
	// 发请求给微信服务器
	let result = await fly.get(url);
	// console.log('result: ', result.data, typeof result.data)
	let openId = JSON.parse(result.data).openid;
	console.log('openId:', openId);
	let userA = {
		openId:openId,
		datas: {
			monay: 1000000000
		}
	}
	
	// 对openId进行加密
	let token = jwt.sign(openId, 'atguigu');
	console.log('token: ', token)
	// 对token解密
	let testResult = jwt.verify(token, 'atguigu')
	console.log('解密结果： ', testResult)
	// 注意： 不要把用户唯一标识直接客户端， 不安全，需要加密以后再返回，
	ctx.body = token;
});

// 4. 监听端口号
app.listen('3001', () => {
	console.log('服务器启动成功')
	console.log('服务器地址: http://localhost:3001')
})