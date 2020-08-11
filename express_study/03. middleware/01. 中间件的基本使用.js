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
*
* */
const express = require('express')

const app = express();


// 使用中间件
// 全局中间件
app.use((req, res, next) => {
  console.log('111');
  next(); // 执行下一个中间件函数
});


app.use((req, res, next) => {
  console.log('222');
  res.send('服务器端返回的数据');
});


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
