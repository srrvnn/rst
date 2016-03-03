var Title = require('./Title.react');
var React = require('react');
var User = require('./User.react');

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
