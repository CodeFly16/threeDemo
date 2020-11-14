var template = require('art-template')
var http = require('http')
var server = http.createServer()


server.on('request', function (req, res) {
  var tpl = `
<!doctype html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
  <h1>{{name}} </h1>
  <h2>{{age}} </h2>
  <h3>{{province}} </h3>
  <h4>{{each hobbies}}{{$value}}{{/each}}</h4>
  </body>
  </html>
`
  var ret = template.render(tpl, {
    name: 'Jack',
    age: 18,
    province: '湖北',
    hobbies: [
      '写代码',
      '唱歌'
    ]
  })
  res.end(ret)

})
server.listen(3000, function () {
  console.log('服务器启动成功')

})

