var React = require('react');

var Header = React.createClass({

	render: function() {
		return (
			<div className="rst-header">
				<Title />
				<User />
			</div>
		);
	}
});

module.exports = Header;