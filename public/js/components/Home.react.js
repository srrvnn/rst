require('../../css/palette.scss');

var Links = require('./Links.react');
var Tasks = require('./Tasks.react');
var React = require('react');

var App = React.createClass({

	render: function() {
		return (
			<div className="content">
				<Tasks />
        <Links />
			</div>
		);
	}

});

module.exports = App;
