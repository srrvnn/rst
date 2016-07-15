var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Test = require('../models/Test.js');

router.get('/', function(req, res, next) {
  Test.find(function (err, tests) {
    if (err) return next(err);
    res.json(tests);
  });
});

router.post('/', function(req, res, next) {
  Test.create({d: Date.now(), name: 'Sashi'}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/:id', function(req, res, next) {
  Test.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/:id', function(req, res, next) {
  Test.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/:id', function(req, res, next) {
  Test.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
