var React = require('react');

var Title = React.createClass({

	render: function() {

		var username = 'Logged in as Saravanan Ganesh';

		return (
			<div className="user">{username}</div>
			// <img src="http://placehold.it/50x50" />
		);
	}
});

module.exports = Title;
