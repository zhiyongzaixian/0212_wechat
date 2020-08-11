const express = require('express');
const app = express();

// 路由 routes
// GET: query参数
// app.get('/login', (req, res) => {
//   console.log(req.query);
//   res.end('login data');
// });


// GET: params
app.get('/login/:id', (req, res) => {
  console.log(req.params);
  // res.send('login data111');
  // res.send('登录成功');
  
  // 设置响应头
  res.set({
    'content-type': 'text/html;charset=utf-8'
  })
  res.end('登录成功');
});


app.post('/register', (req, res) => {
  console.log(3333);
  console.log(req.query);
  console.log(req.params);
  
  // body参数默认不能直接获取，需要使用中间件获取
  console.log(req.body);
  res.end('register data');
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
