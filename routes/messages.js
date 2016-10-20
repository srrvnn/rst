var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Message = require('../models/Message.js');

router.get('/', function(req, res, next) {
  Message.find(function (err, tests) {
    if (err) return next(err);
    res.json(tests);
  });
});

router.post('/', function(req, res, next) {
  Message.create({content: 'Test Message at ' + Date.now()}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/:id', function(req, res, next) {
  Message.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/:id', function(req, res, next) {
  Message.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/:id', function(req, res, next) {
  Message.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
