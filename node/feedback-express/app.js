var express = require('express')
var bodyParser = require('body-parser')

var app = express()
//配置art-template模板引擎
app.engine('html', require('express-art-template'))
//配置body-parser,之后才能获取post的数据
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/public/', express.static('public'))

var comments = [
  {
    name: '张三',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三2',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三3',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三4',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三5',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  }
]

app.get('/', function (req, res) {
  res.render('index.html', {
    comments: comments
  })
})
app.get('/post', function (req, res) {
  res.render('post.html')
})

app.post('/post', function (req, res) {
  var comment = req.body
  comment.dateTime = '2000-07-23 10:23:55'
  comments.unshift(comment)
  res.redirect('/')
})


app.listen(3000, function () {
  console.log('running...')

})