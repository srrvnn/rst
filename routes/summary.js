var express = require('express');
var moment = require('moment');
var router = express.Router();

var mongoose = require('mongoose');

var Attendance = require('../models/attendance.js');
var Batch = require('../models/Batch.js');
var Lecture = require('../models/Lecture.js');
var Mark = require('../models/Mark.js');
var Message = require('../models/Message.js');
var Question = require('../models/Question.js');
var Student = require('../models/Student.js');
var Test = require('../models/Test.js');

router.get('/', function(req, res, next) {

  var summary = {};

  var today = moment().startOf('day');
  var tomorrow = moment(today).add(1, 'days');
  var window_start = moment(today).subtract(3, 'days');
  var window_end = moment(today).add(4, 'days');

  // TODO: rewrite using promise chains
  Batch.count(function (err, batch_count) {
    if (err) return next(summary);
    summary.batch_count = batch_count;
    Student.count(function(err, student_count) {
      if (err) return next(summary);
      summary.student_count = student_count;
      Question.count(function(err, question_count) {
        if (err) return next(summary);
        summary.question_count = question_count;
        Message.count(function (err, message_count) {
          if (err) return next(summary);
          summary.message_count = message_count;
          Test.find({'date': {'$gte' : window_start, '$lte': window_end}}, function(err, tests) {
            if (err) return next(summary);
            summary.tests = tests;
            Lecture.find({'date': {'$gte' : today, '$lt': tomorrow}}, function(err, lectures) {
              if (err) return next(summary);
              summary.lectures = lectures;
              res.json(summary);
            });
          });
        });
      });
    });
  });
});

module.exports = router;
