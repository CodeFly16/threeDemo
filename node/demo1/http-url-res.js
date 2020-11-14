var http = require('http')

var server = http.createServer()


server.on('request', function (req, res) {
  var url = req.url
  if (url === '/products') {
    var products = [
      {
        name: '苹果',
        price: '123'
      },
      {
        name: '葡萄',
        price: '222'
      },
      {
        name: '香蕉',
        price: '333'
      },
    ]
    res.end(JSON.stringify(products))
  }
})

server.listen(3000, function () {
  console.log('服务器启动了')
})