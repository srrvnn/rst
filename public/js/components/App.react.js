var Footer = require('./Footer.react');
var LinksList = require('./LinksList.react');
var React = require('react');
var Header = require('./Header.react');

var App = React.createClass({

	render: function() {
		return (
			<div className="rst-app">
				<Header />
				<LinksList />
				<Footer />
			</div>
		);
	}
});

module.exports = App;