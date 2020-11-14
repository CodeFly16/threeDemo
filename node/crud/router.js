var fs = require('fs')
var express = require('express')
var router = express.Router()
var Student = require('./student.js')

router.get('/students', function (req, res) {
  Student.find(function (err, students) {
    if (err) {
      return res.status(500).send('Server error.')
    }
    res.render('index.html', {
      fruits: [
        '苹果',
        '苹果',
        '苹果',
      ],
      students: students
    })
  })
})

router.get('/students/new', function (req, res) {
  res.render('new.html')
})

router.post('/students/new', function (req, res) {
  //处理
  new Student(req.body).save(function (err) {
    if (err) {
      return res.status(500).send('Server error.')
    }
    res.redirect('/students')
  })
  //发送响应

})
router.get('/students/edit', function (req, res) {
  Student.findById(req.query.id, function (err, student) {
    if (err) {
      return res.status(500).send('Server error.')
    }
    res.render('edit.html', {
      student: student
    })
  })
})
router.post('/students/edit', function (req, res) {
  Student.findByIdAndUpdate(req.body.id, req.body, function (err) {
    if (err) {
      return res.status(500).send('Server error.')
    }
    res.redirect('/students')
  })
})
router.get('/students/delete', function (req, res) {
  Student.findByIdAndDelete(req.query.id, function (err) {
    if (err) {
      return res.status(500).send('Server error.')
    }
    res.redirect('/students')
  })
})

module.exports = router
