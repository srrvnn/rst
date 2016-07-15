var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var mongoose = require('mongoose');
var mongodb_url = process.env.MONGODB_URI;

mongoose.connect(mongodb_url, function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

var batches = require('./routes/batches.js');
app.use('/api/batches', batches);

var tests = require('./routes/tests.js');
app.use('/api/tests', tests);

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// var MESSAGES_FILE = path.join(__dirname, 'data', 'messages.json');
//
// app.get('/api/messages', function(req, res) {
//   fs.readFile(MESSAGES_FILE, function(err, data) {
//     if (err) {
//       console.error(err);
//       process.exit(1);
//     }
//     res.setHeader('Cache-Control', 'no-cache');
//     res.json(JSON.parse(data));
//   });
// });
//
// app.post('/api/messages', function(req, res) {
//   fs.readFile(MESSAGES_FILE, function(err, data) {
//     if (err) {
//       console.error(err);
//       process.exit(1);
//     }
//     var messages = JSON.parse(data);
//     // NOTE: In a real implementation, we would likely rely on a database or
//     // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
//     // treat Date.now() as unique-enough for our purposes.
//     var newMessage = {
//       id: Date.now(),
//       toPhoneNumber: req.body.toPhoneNumber,
//       toMessage: req.body.toMessage,
//     };
//     messages.push(newMessage);
//     fs.writeFile(MESSAGES_FILE, JSON.stringify(messages, null, 4), function(err) {
//       if (err) {
//         console.error(err);
//         process.exit(1);
//       }
//       res.setHeader('Cache-Control', 'no-cache');
//       res.json(messages);
//     });
//   });
// });
//
// app.put('/api/messages/:id', function(req, res) {
//   fs.readFile(MESSAGES_FILE, function(err, data) {
//     if (err) {
//       console.error(err);
//       process.exit(1);
//     }
//     var messages = JSON.parse(data);
//     // NOTE: In a real implementation, we would likely rely on a database or
//     // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
//     // treat Date.now() as unique-enough for our purposes.
//     messages.some(function(item) {
//       if (item.id == req.params.id) {
//         item.sent = true;
//         return true;
//       }
//     });
//     fs.writeFile(MESSAGES_FILE, JSON.stringify(messages, null, 4), function(err) {
//       if (err) {
//         console.error(err);
//         process.exit(1);
//       }
//       res.setHeader('Cache-Control', 'no-cache');
//       res.json(messages);
//     });
//   });
// })
//
// app.post('/api/tests/:id/release', function(req, res) {
//   fs.readFile(MESSAGES_FILE, function(err, data) {
//     if (err) {
//       console.error(err);
//       process.exit(1);
//     }
//     var messages = JSON.parse(data);
//     // NOTE: In a real implementation, we would likely rely on a database or
//     // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
//     // treat Date.now() as unique-enough for our purposes.
//     for (var i = 0; i < req.body.number; i++) {
//       var newMessage = {
//         id: Date.now(),
//         toPhoneNumber: req.body.toPhoneNumber,
//         toMessage: req.body.toMessage,
//       };
//       messages.push(newMessage);
//     }
//     fs.writeFile(MESSAGES_FILE, JSON.stringify(messages, null, 4), function(err) {
//       if (err) {
//         console.error(err);
//         process.exit(1);
//       }
//       res.setHeader('Cache-Control', 'no-cache');
//       res.json(messages);
//     });
//   });
// });
//
// app.delete('/api/messages', function(req, res) {
//   fs.writeFile(MESSAGES_FILE, JSON.stringify([], null, 4), function(err) {
//     if (err) {
//       console.error(err);
//       process.exit(1);
//     }
//     res.setHeader('Cache-Control', 'no-cache');
//     res.json([]);
//   });
// });

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
