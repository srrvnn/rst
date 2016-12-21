require('../../css/app.scss');
require('../../css/palette.scss');

var Footer = require('./Footer.react');
var Links = require('./Links.react');
var Tasks = require('./Tasks.react');
var React = require('react');
var Header = require('./Header.react');

var App = React.createClass({

	render: function() {
		return (
			<div className="container">
				<Header />
				<Tasks />
				<Links />
				<Footer />
			</div>
		);
	}
	
});

module.exports = App;
