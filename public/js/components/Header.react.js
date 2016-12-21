require('../../css/header.scss');

var Title = require('./Title.react');
var React = require('react');
var User = require('./User.react');

var Header = React.createClass({
	render: function() {
		return (
			<div className="header">
				<div className="header-content">
					<h1 className="title">R.S. Tuition Centre</h1>
					<img className="user-pic" src="/assets/lakshmirs.jpg" />
				</div>
			</div>
		);
	}
});

module.exports = Header;
