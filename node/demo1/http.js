var http = require("http")

//注册服务器
var server = http.createServer()

//注册request请求
server.on("request", function (request, response) {
  console.log("收到客户端的请求" + request.url)
  response.write("hello")
  response.write("nodejs")
  response.end()
})

//启动服务器以及绑定端口号
server.listen(3000, function () {
  console.log("服务器启动成功")
})