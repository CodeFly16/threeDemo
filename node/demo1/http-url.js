var http = require("http")
var server = http.createServer()
server.on("request", function (request, response) {
  console.log("收到请求,请求路径是:" + request.url)
  response.write("你好")
  response.end()
})

server.listen(3000, function () {
  console.log("服务器启动")
})
