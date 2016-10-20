var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Student = require('../models/Student.js');

router.get('/', function(req, res, next) {
  Student.find(function (err, students) {
    if (err) return next(err);
    res.json(students);
  });
});

router.get('/:id', function(req, res, next) {
  Student.findById(req.params.id, function (err, student) {
    if (err) return next(err);
    res.json(student);
  });
});

router.post('/', function(req, res, next) {
  Student.create(req.body, function (err, student) {
    if (err) return next(err);
    res.status(201).json(student);
  });
});

router.put('/:id', function(req, res, next) {
  Student.findByIdAndUpdate(req.params.id, req.body, function (err, student) {
    if (err) return next(err);
    res.json(student);
  });
});

// router.patch('/:id', function(req, res, next) {
//   Student.findByIdAndUpdate(req.params.id, req.body, function (err, student) {
//     if (err) return next(err);
//     res.json(student);
//   });
// });

router.delete('/:id', function(req, res, next) {
  Student.findByIdAndRemove(req.params.id, req.body, function (err, student) {
    if (err) return next(err);
    res.status(204).end();
  });
});

module.exports = router;
