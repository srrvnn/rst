var React = require('react');

var LinksList = React.createClass({

	render: function() {
		return (
			<ul>
				<li> Batches </li>
				<li> Students </li>
				<li> Tests </li>
				<li> Messages </li>
			</ul>
		);
	}
});

module.exports = LinksList;