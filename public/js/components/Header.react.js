require('../../css/header.scss');

var Title = require('./Title.react');
var React = require('react');
var User = require('./User.react');

var Header = React.createClass({
	render: function() {
		return (
			<div className="header">
				<h1>R.S. Tuition Centre</h1>
				<img src="/assets/lakshmirs.jpg" />
			</div>
		);
	}
});

module.exports = Header;
