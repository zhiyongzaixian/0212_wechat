const express = require('express');


// 1. 生成实例应用
const app = express();


// 2. 注册路由
/*
* request: 请求信息对象： 请求参数，请求头的信息
* response: 响应头信息对象，返回数据的时候需要通过response操作
*
* */
app.get('/', (request , response) => {
  console.log(1111);
  response.end('success data');
});

app.get('/login', (request , response) => {
  console.log(2222);
  response.end('login data');
});


app.post('/register', (request , response) => {
  console.log(3333);
  response.end('register data');
});


// 3. 监听端口
app.listen('3000', (err) => {
  if(err){
    console.log('服务器启动失败');
    console.log(err);
  }else {
    console.log('服务器启动成功');
    console.log('服务器地址: http://localhost:3000');
  }
})
