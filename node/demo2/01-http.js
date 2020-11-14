var http = require('http')

var server = http.createServer()

server.on('request', (req, res) => {
  console.log(req.url)

})

server.listen(3000, () => {
  console.log('服务器启动成功')

})