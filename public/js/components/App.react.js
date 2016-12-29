require('../../css/app.scss');
require('../../css/palette.scss');

var Footer = require('./Footer.react');
var Links = require('./Links.react');
var Tasks = require('./Tasks.react');
var React = require('react');
var Header = require('./Header.react');

var App = React.createClass({

	contextTypes: {
		router: React.PropTypes.object
	},

	getInitialState: function() {
		return {siteData: {path: '/'}}
	},

	componentDidMount: function() {
		this.updateStateFromRouter();
	},

	componentDidUpdate: function() {
		this.updateStateFromRouter();
	},

	updateStateFromRouter: function() {
		let path = this.context.router.location.pathname;
		if (path !== this.state.siteData.path) {
			this.setState({siteData: {path: path}});
		}
	},

	render: function() {
		return (
			<div className="container">
				<Header path={this.state.siteData.path}/>
				{this.props.children}
				<Footer />
			</div>
		);
	}

});

module.exports = App;
