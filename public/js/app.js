// This file bootstraps the entire application.

var HelloWorldApp = require('./components/HelloWorldApp.react');
var App = require('./components/App.react');
// var ChatApp = require('./components/ChatApp.react');
// var ChatExampleData = require('./ChatExampleData');
// var ChatWebAPIUtils = require('./utils/ChatWebAPIUtils');
var React = require('react');
window.React = React; // export for http://fb.me/react-devtools

// ChatExampleData.init(); // load example data into localstorage

// ChatWebAPIUtils.getAllMessages();

React.render(
    <App />,
    document.getElementById('react')
);
