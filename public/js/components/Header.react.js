var Title = require('./Title.react');
var React = require('react');
var User = require('./User.react');

require('!style!css!../../css/header.css');

var Header = React.createClass({

	render: function() {
		return (
			<div className="header">
				<Title />
			</div>
		);
	}
});

module.exports = Header;
