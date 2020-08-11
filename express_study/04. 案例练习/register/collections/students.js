let mongoose = require('mongoose');
// 2. 创建  Schema 约束对象
let studentsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
 
})

// 3. 创建 Model 对象
const StudentsModel = mongoose.model('students', studentsSchema);

// 向外暴露当前集合对象
module.exports = StudentsModel;
