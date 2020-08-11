// 入口文件
require('./db');

// 引入模块对象
const StudentsModel = require('./collections/students');
const TeachersModel = require('./collections/teachers');



StudentsModel.create({
  name: '小明',
  age: 18,
  hobby: ['吃饭', '睡觉', '打豆豆'],
  info: '小明是个爱学习的人'
});


TeachersModel.create({
  name: '天禹老师',
  age: 18,
  hobby: ['敲代码'],
  info: '大帅哥'
})
