var fs = require('fs')
fs.readFile('../test/测试文本.txt', function (error, data) {
  console.log(data.toString())
})