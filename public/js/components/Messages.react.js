require('../../css/messages.scss');

var React = require('react');

var Messages = React.createClass({
	render: function() {
		return (
			<div className="messages">
        List of Messages
			</div>
		);
	}
});

module.exports = Messages;
