var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var MESSAGES_FILE = path.join(__dirname, 'data', 'messages.json');

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/messages', function(req, res) {
  fs.readFile(MESSAGES_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

app.post('/api/messages', function(req, res) {
  fs.readFile(MESSAGES_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var messages = JSON.parse(data);
    // NOTE: In a real implementation, we would likely rely on a database or
    // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
    // treat Date.now() as unique-enough for our purposes.
    var newMessage = {
      id: Date.now(),
      to: req.body.toPhoneNumber,
      message: req.body.toMessage,
    };
    messages.push(newMessage);
    fs.writeFile(MESSAGES_FILE, JSON.stringify(messages, null, 4), function(err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.setHeader('Cache-Control', 'no-cache');
      res.json(messages);
    });
  });
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
