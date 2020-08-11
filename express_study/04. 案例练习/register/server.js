
require('./db');
const express = require('express');
const cors = require('cors');
const path = require('path');
const md5 = require('md5');
const app = express();
const StudentsModel = require('./collections/students');

// 使用中间件
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(cors())
// app.use((req, res, next) => {
//   // 设置响应头
//   res.set({
//     'Access-Control-Allow-Credentials': true, //允许后端发送cookie
//     'Access-Control-Allow-Origin':  '*', //任意域名都可以访问,或者基于我请求头里面的域
//     'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type', //设置请求头格式和类型
//     'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',//允许支持的请求方式
//     'Content-Type': 'application/json; charset=utf-8'//默认与允许的文本格式json和编码格式
//   });
//
//   next();
// })

app.post('/login', (req, res) => {
  let {username, password} = req.body;
  console.log(typeof password);
  
  
  // 模拟数据库信息
  let userInfo = {username: 'curry', password: '123123'}
  if(username !== userInfo.username){
    // 用户名不正确
    res.send({
      code: 502,
      data: '用户名不正确'
    })
  }else if(password !== userInfo.password){
    // 密码不正确
    res.send({
      code: 502,
      data: '密码不正确'
    })
  }else {
    res.send({
      code: 200,
      data: '登录成功'
    })
  }
  
});

app.post('/register', async (req, res) => {
  let {username, password} = req.body;
  /*
  * 1. 查看数据库确认当前的用户名是否已经被注册
  * 2. 如果已经注册，就不能再注册，如果没有注册，那么就可以注册
  * 3. 将当前用户信息存入至数据库
  *
  * */
  try{
    // 1. 查看数据库确认当前的用户名是否已经被注册
    let result = await StudentsModel.findOne({username})
    console.log('result： ', result);
    if(result){ // 已经注册过
      res.send({
        code: 502,
        data: '当前的用户已经被注册'
      })
    }else { // 未注册， null
      //  将当前用户信息存入至数据库
      await StudentsModel.create({
        username,
        password: md5(password)
      })
      
      res.send({
        code: 200,
        data: '注册成功'
      })
    }
  }catch (e) {
    console.log(e);
    res.send({
      code: 502,
      data: '当前无法注册，请稍后再试'
    });
  }
})


app.listen('3001',(e) => {
  if(e){
    console.log('服务器启动失败');
    console.log(e);
  }else {
    console.log('服务器启动成功');
    console.log('服务器地址: http://localhost:3001');
  }
})
