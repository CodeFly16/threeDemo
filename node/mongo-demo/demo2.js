var mongooes = require('mongoose')
var Schema = mongooes.Schema
//连接数据库
mongooes.connect('mongodb://localhost/itcast', {useNewUrlParser: true, useUnifiedTopology: true})

//设计集合结构（表结构）
//字段名称就是表结构中的属性名称
var userSchema = new Schema({
  username: {
    type: String,
    required: true   //约束，必须有
  },
  password: {
    type: String,
    required: true   //约束，必须有
  },
  email: {
    type: String
  }
})

//将文档结构发布为模型
var User = mongooes.model('User', userSchema)


var admin = new User({
  username: '张三',
  password: '123456',
  email: 'admin@admin.com'
})

/*
//新增数据
admin.save().then((ret) => {
  console.log('保存成功 ')
  console.log(ret)
})
*/

/*//查询数据
User.find().then(ret => {
  console.log(ret)
})

//查询单个数据
User.find({
  username: '张三'
}).then(ret => {
  console.log(ret)
})*/

/*//删除数据
User.deleteOne({
  username: 'admin'
}, (err, res) => {
  console.log(res)
})*/

//更新数据
User.findByIdAndUpdate('5eccf034a77ca53174d77e4c', {
  password: '123'
}, res => {
  console.log(res)
})



