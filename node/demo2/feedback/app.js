var http = require('http')
var fs = require('fs')
var template = require('art-template')
var url = require('url')

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
http.createServer(function (req, res) {
  var parseObj = url.parse(req.url, true)
  var pathname = parseObj.pathname
  console.log(pathname)
  if (pathname === '/') {
    //读入文件数据
    fs.readFile('./views/index.html', function (err, data) {
      if (err) {
        return res.end('404 NOT FOUND')
      }
      //渲染数据到模板中
      var htmlStr = template.render(data.toString(), {
        comments: comments
      })
      res.end(htmlStr)
    })
  } else if (pathname.indexOf('/public/') === 0) {
    //读入文件数据
    fs.readFile('.' + pathname, function (error, data) {
      if (error) {
        return res.end('404 NOT FOUND')
      }
      res.end(data)
    })
  } else if (pathname === '/post') {
    fs.readFile('./views/post.html', function (err, data) {
      if (err) {
        return res.end('404 NOT FOUND')
      }
      res.end(data)
    })
  } else if (pathname === '/pinglun') {
    var comment = parseObj.query
    comment.dateTime = '2020-11-2 17:22:12'
    comments.unshift(comment)
    res.statusCode = 302
    res.setHeader('Location', '/')
    res.end()
  } else {
    fs.readFile('./views/404.html', function (err, data) {
      if (err) {
        return res.end('404 NOT FOUND')
      }
      res.end(data)
    })
  }
}).listen(3000, function () {
  console.log('running....')
})