let mongoose = require('mongoose')

// 1. 链接数据库
mongoose.connect('mongodb://localhost:27017/express_register', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})


// 2. 确认是否连接数据库成功
mongoose.connection.once('open', (err) => {
  if(err){
    console.log('连接数据库失败');
    console.log(err);
    return;
  }
  
  console.log('链接数据库成功');
});
