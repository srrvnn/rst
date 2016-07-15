var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Batch = require('../models/Batch.js');

router.get('/', function(req, res, next) {
  Batch.find(function (err, batches) {
    if (err) return next(err);
    res.json(batches);
  });
});

router.post('/', function(req, res, next) {
  Batch.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/:id', function(req, res, next) {
  Batch.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/:id', function(req, res, next) {
  Batch.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/:id', function(req, res, next) {
  Batch.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
