/*
* 中间件:
*   1. 本质： 函数
*   2. 作用:
*     1) 处理请求参数
*     2) 返回响应数据
*     3) 修改req, res对象数据
*     4) 可以执行下一个中间件
*   3. 体现形式
*     1. (req, res, next) => {}
*     2. req: request
*     3. res: response
*     4. next：函数，负责调用下一个中间件
*   4. 中间件：
*     1. 请求的回调函数也是一个中间件
*     2. 默认情况下，中间件和请求的回调共存情况下，只能匹配一个，谁先满足条件就匹配谁
*
* */
const express = require('express')
const path = require('path');
const multiparty = require('connect-multiparty');
const app = express();
const multipartMiddleWare = multiparty();
// express.static() 向外暴露静态资源
// express.json() 获取 application/json 的请求参数
// express.urlencoded() 处理application/x-www-form-urlencoded的请求参数

// express内置中间件，全局使用
// app.use(multipartMiddleWare)
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, 'public')))


app.post('/login', (req, res) => {
  console.log(req.body);
  res.send('登录成功的数据');
})

// 局部使用中间件
app.post('/register', multipartMiddleWare, (req, res) => {
  console.log(req.body);
  res.send('登录成功的数据');
})

// 监听端口
app.listen('3000', (err) => {
  if(err){
    console.log('服务器启动失败');
    console.log(err);
  }else {
    console.log('服务器启动成功');
    console.log('服务器地址: http://localhost:3000');
  }
})
