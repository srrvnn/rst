// This file bootstraps the entire application.

var App = require('./components/App.react');
var React = require('react');
var ReactDOM = require('react-dom');
window.React = React; // export for http://fb.me/react-devtools

ReactDOM.render(
    <App />,
    document.getElementById('react')
);
