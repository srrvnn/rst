require('../../css/links-list.scss');

var React = require('react');
var request = require('request');

var LinksList = React.createClass({

	links: [
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
	base: location.protocol + '//' + location.host,

	getInitialState: function() {
		return {messages: [], random: Math.floor(Math.random() * (50 - 1 + 1)) + 1};
	},

	componentDidMount: function() {
		request(this.base + '/api/messages', function(error, response, body) {
			this.setState({messages: JSON.parse(body)});
		}.bind(this));
	},

	componentDidUpdate: function() {
		componentHandler.upgradeDom();
	},

	handleClearMessageClick: function() {
		request.delete(this.base + '/api/messages', function(error, response, body) {
				this.setState({messages: JSON.parse(body)});
		}.bind(this));
	},

	handleAddMessageClick: function() {

		var randomPhoneNumber = (Math.floor(Math.random() * (9999999999 - 7891000000)) + 7891000000).toString();
		var randomMessage = 'Hello from RST';

		request.post(this.base + '/api/messages',
			{json: {toPhoneNumber: randomPhoneNumber, toMessage: randomMessage}}, function(error, response, body) {
				this.setState({messages: body});
		}.bind(this));
	},

	handleBatchMessageClick: function() {

		var randomPhoneNumber = (Math.floor(Math.random() * (9999999999 - 7891000000)) + 7891000000).toString();
		var randomMessage = 'Hello from RST';

		request.post(this.base + '/api/tests/1/release',
			{json: {toPhoneNumber: randomPhoneNumber, toMessage: randomMessage, number: this.state.random}}, function(error, response, body) {
				this.setState({messages: body});
		}.bind(this));
	},

	handleSendClick: function() {

		var nextMessage = this.state.messages.find(function(item) {
			if (!item.sent) return true;
		});

		request.put(this.base + '/api/messages/' + nextMessage.id, function(error, response, body) {
				this.setState({messages: JSON.parse(body)});
		}.bind(this));
	},

	render: function() {
		var linkItems = this.links.map(function(item) {
			var messageStatus = null;
			if (item.key == 'messages') {
				messageStatus = (
					<span className="number">{item.number}</span>
				)
			}
			return (
				<li>
					<button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
						<i className="material-icons">{item.icon}{messageStatus}</i>
					</button>
					<div className="name">{item.name.toUpperCase()}</div>
				</li>
			);
		});
		var messageItems = this.state.messages.map(function(item) {
			return (
				<li>
					<span>ID: {item._id} TO: {item.toPhoneNumber} &mdash; MESSAGE: {item.toMessage} {item.sent ? 'SENT' : null}</span>
				</li>
			);
		});
		return (
			<div className="content">
				<ul className="links-list"> {linkItems} </ul>
			</div>
		);
	}
});

module.exports = LinksList;
