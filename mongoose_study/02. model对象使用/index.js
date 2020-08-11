let mongoose = require('mongoose')

// 1. 链接数据库
mongoose.connect('mongodb://localhost:27017/mongoose_model', {
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
  info: mongoose.SchemaTypes.Mixed, // 任意类型,
  isDeleted: {
    type: Boolean,
    default: false
  }
})

// 3. 创建 Model 对象
const StudentsModel = mongoose.model('students', studentsSchema);

// 4. 通过model对象操作数据

(async function () {
  try {
    // 增 create
    let result = await StudentsModel.create({
      name: 'anverson',
      age: 45,
      hobby: ['篮球'],
      info: '76人队球星'
    })
    
    // 查 find || findOne
    // let result = await StudentsModel.find({name: 'curry'})
    // let result = await StudentsModel.findOne({name: 'curry'})
    
    // 更新 updateMany || updateOne
    // let result = await StudentsModel.updateOne({name: 'curry'}, {$set: {age: 35}})
    
    // 软删除
    // let result = await StudentsModel.updateMany({}, {$set: {isDeleted: false}})
    console.log(result);
  }catch (e) {
    console.log('保存失败');
    console.log(e);
  }
})()


// ;(function (window) {
//   var a = 123;
//   window.xxx = function () {
//
//   }
// })(window)






