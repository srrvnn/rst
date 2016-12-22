// This file bootstraps the entire application.

var App = require('./components/App.react');
var Batches = require('./components/Batches.react');
var Students = require('./components/Students.react');
var Questions = require('./components/Questions.react');
var Messages = require('./components/Messages.react');
var hashHistory = require('react-router').hashHistory;
var Link = require('react-router').Link;
var React = require('react');
var ReactDOM = require('react-dom');
var Route = require('react-router').Route;
var Router = require('react-router').Router;

window.React = React; // export for http://fb.me/react-devtools

ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/" component={App} />
      <Route path="/batches" component={Batches} />
      <Route path="/students" component={Students} />
      <Route path="/questions" component={Questions} />
      <Route path="/messages" component={Messages} />
    </Router>
    ), document.getElementById('react')
);
