var express = require('express')

var app = express()

app.use('/public/', express.static('./public/'))

app.get('/', function (req, res) {
  res.send('hello express!')
})
app.get('/login', function (req, res) {
  res.send('login page')
})
app.listen(3000, function () {
  console.log('app is running at port 3000.')
})
