// This file bootstraps the entire application.

var App = require('./components/App.react');
var Batch = require('./components/Batch.react');
var Batches = require('./components/Batches.react');
var BatchForm = require('./components/BatchForm.react');
var hashHistory = require('react-router').hashHistory;
var Home = require('./components/Home.react');
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;
var Messages = require('./components/Messages.react');
var Questions = require('./components/Questions.react');
var React = require('react');
var ReactDOM = require('react-dom');
var Route = require('react-router').Route;
var Router = require('react-router').Router;
var Students = require('./components/Students.react');

window.React = React; // export for http://fb.me/react-devtools

// TODO(srrvnn): move away from hash URLs, read react tutorials

ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/batches" component={Batches} />
        <Route path="/batches/new" component={BatchForm} />
        <Route path="/batches/:batchid" component={Batch} />
        <Route path="/students" component={Students} />
        <Route path="/questions" component={Questions} />
        <Route path="/messages" component={Messages} />
      </Route>
    </Router>
    ), document.getElementById('react')
);
