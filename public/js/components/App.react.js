var Footer = require('./Footer.react');
var LinksList = require('./LinksList.react');
var React = require('react');
var Header = require('./Header.react');

var App = React.createClass({

	render: function() {
		return (
			<div className="container">
				<Header />
				<LinksList />
			</div>
		);
	}
});

module.exports = App;
