require('../../css/links.scss');

var React = require('react');
var request = require('request');
var Link = require('react-router').Link;

var Links = React.createClass({

	// TODO(srrvnn): get from API
	linksItems: [
		{
			name: 'Batches',
			number: 8,
			url: 'batches',
			icon: 'people_outline'
		},
		{
			name: 'Students',
			number: 109,
			url: 'students',
			icon: 'person'
		},
		{
			name: 'Questions',
			number: 3418,
			url: 'questions',
			icon: 'assignment',
		},
		{
			name: 'Messages',
			number: 89,
			url: 'messages',
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

		// map each item from {this.linksItems} to a linkElement for the render
		var linksElements = this.linksItems.map(function(item) {
			return (
				<li key={item.url}>
					<Link to={'/' + item.url} className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
						<i className="material-icons">
							{item.icon}
							{item.url == 'messages' && <span className="number">{item.number}</span>}
						</i>
					</Link>
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
