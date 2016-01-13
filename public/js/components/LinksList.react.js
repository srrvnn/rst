var React = require('react');

var LinksList = React.createClass({

	links: ['Batches', 'Students', 'Tests', 'Messages'],

	render: function() {

		var linkItems = this.links.map(function(item) {
			return (
				<li>
					<img src="http://placehold.it/50x50" />
					<a href={item.toLowerCase()}>{item}</a>
				</li>
			);
		});

		return (
			<div className="content">
				<ul className="links-list">
					{linkItems}
				</ul>
			</div>
		);
	}
});

module.exports = LinksList;