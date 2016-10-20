var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Batch = require('../models/Batch.js');
var Student = require('../models/Student.js');
var Lecture = require('../models/Lecture.js');
var Test = require('../models/Test.js');
var Message = require('../models/Message.js');

router.get('/', function(req, res, next) {
  Batch.find(function (err, batches) {
    if (err) return next(err);
    res.json(batches);
  });
});

router.get('/:id', function(req, res, next) {
  Batch.findById(req.params.id, function (err, batch) {
    if (err) return next(err);

    // TODO: rewrite with promises
    Student.find({current_batch_id:req.params.id}, function (err, students) {
      if (err) res.json(batch);
      batch.students = students;
      Lecture.find({batch_id:req.params.id}, function(err, lectures) {
        if (err) res.json(batch);
        batch.lectures = lectures;
        Test.find({batch_id:req.params.id}, function(err, tests) {
          if (err) res.json(batch);
          batch.tests = tests;
          Message.find({batch_id:req.params.id}, function(err, messages) {
            if (err) res.json(batch);
            batch.messages = messages;
            res.json(batch);
          });
        });
      });
    });
  });
});

router.post('/', function(req, res, next) {
  Batch.create(req.body, function (err, batch) {
    if (err) return next(err);
    res.status(201).json(batch);
  });
});

router.put('/:id', function(req, res, next) {
  Batch.findByIdAndUpdate(req.params.id, req.body, function (err, batch) {
    if (err) return next(err);
    res.json(batch);
  });
});

router.delete('/:id', function(req, res, next) {
  Batch.findByIdAndRemove(req.params.id, req.body, function (err, batch) {
    if (err) return next(err);
    res.status(204).end();
  });
});

module.exports = router;
