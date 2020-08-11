let mongoose = require('mongoose');
// 2. 创建  Schema 约束对象
let studentsSchema = new mongoose.Schema({
  name: {
    type: String, // 数据类型
    required: true, // 必要性
    unique: true, // 唯一值
  },
  age: Number,
  sex: {
    type: Number,
    default: 1
  },
  // hobby: Array,
  hobby: [String], // 字符串类型数组,
  info: mongoose.SchemaTypes.Mixed, // 任意类型,
  isDeleted: {
    type: Boolean,
    default: false
  }
})

// 3. 创建 Model 对象
const StudentsModel = mongoose.model('students', studentsSchema);

// 向外暴露当前集合对象
module.exports = StudentsModel;
