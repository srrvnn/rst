require('../../css/app.css');
require('../../css/palette.css');

var Footer = require('./Footer.react');
var LinksList = require('./LinksList.react');
var TaskTimeline = require('./TaskTimeline.react');
var React = require('react');
var Header = require('./Header.react');

var App = React.createClass({

	render: function() {
		return (
			<div className="container">
				<Header />
				<TaskTimeline />
				<LinksList />
				<Footer />
			</div>
		);
	}
});

module.exports = App;
