require('../../css/links.scss');

var React = require('react');
var request = require('request');

var Links = React.createClass({

	// TODO(srrvnn): get from API
	linksItems: [
		{
			name: 'Batches',
			number: 8,
			key: 'batches',
			icon: 'people_outline'
		},
		{
			name: 'Students',
			number: 109,
			key: 'students',
			icon: 'person'
		},
		{
			name: 'Questions',
			number: 3418,
			key: 'questions',
			icon: 'assignment',
		},
		{
			name: 'Messages',
			number: 89,
			key: 'messages',
			icon: 'chat_bubble',
		}
	],

	getInitialState: function() {
		return {};
	},

	componentDidUpdate: function() {
		componentHandler.upgradeDom(); // will update MDL components
	},

	render: function() {
		var linksElements = this.linksItems.map(function(item) {
			return (
				<li>
					<button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
						<i className="material-icons">
							{item.icon}
							{item.key == 'messages' && <span className="number">{item.number}</span>}
						</i>
					</button>
					<div className="name">{item.name.toUpperCase()}</div>
				</li>
			);
		});
		return (
			<div className="links">
				<ul className="links-items"> {linksElements} </ul>
			</div>
		);
	}
});

module.exports = Links;
