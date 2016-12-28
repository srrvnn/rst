require('../../css/header.scss');

var Title = require('./Title.react');
var React = require('react');
var User = require('./User.react');
var Link = require('react-router').Link;

var Header = React.createClass({

	contextTypes: {
		router: React.PropTypes.object
	},

	render: function() {
		return (
			<div className={this.context.router.location.pathname == '/' ? "header" : "header minimal"}>
				<div className="header-content">
					<h1 className="title"><Link to="/">R.S. Tuition Centre</Link></h1>
					<img className="user-pic" src="/assets/lakshmirs.jpg" />
				</div>
			</div>
		);
	}
});

module.exports = Header;
