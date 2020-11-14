var fs = require("fs")

fs.writeFile("../test/测试文本.txt", "你好，这是测试文本", function (error) {
  console.log("文件写入成功")
})