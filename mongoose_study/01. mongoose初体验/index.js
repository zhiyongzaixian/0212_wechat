let mongoose = require('mongoose')

// 1. 链接数据库
mongoose.connect('mongodb://localhost:27017/mongoose_test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})


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
  info: mongoose.SchemaTypes.Mixed // 任意类型
})

// 3. 创建 Model 对象
const StudentsModel = mongoose.model('students', studentsSchema)

// 4. 创建文档对象
const studentA = new StudentsModel({
  name: '郭德纲',
  age: 45,
  hobby: ['相声', '美女'],
  info: '德云社班主'
})

// 5. 保存数据 将文档对象插入到数据库中
studentA.save()
  .then(() => {
    console.log('保存数据成功');
  })
  .catch(e => {
    console.log('保存数据失败，', e);
  })
