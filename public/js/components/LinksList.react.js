var React = require('react');
var request = require('request');

var LinksList = React.createClass({

	empty: [],
	links: ['Batches', 'Students', 'Tests', 'Messages'],

	getInitialState: function() {
		return {messages: [], random: Math.floor(Math.random() * (50 - 1 + 1)) + 1};
	},

	componentDidMount: function() {
		request('http://localhost:3000/api/messages', function(error, response, body) {
			this.setState({messages: JSON.parse(body)});
		}.bind(this));
	},

	handleClearMessageClick: function() {
		request.delete('http://localhost:3000/api/messages', function(error, response, body) {
				this.setState({messages: JSON.parse(body)});
		}.bind(this));
	},

	handleAddMessageClick: function() {

		var randomPhoneNumber = (Math.floor(Math.random() * (9999999999 - 7891000000)) + 7891000000).toString();
		var randomMessage = 'Hello from RST';

		request.post('http://localhost:3000/api/messages',
			{json: {toPhoneNumber: randomPhoneNumber, toMessage: randomMessage}}, function(error, response, body) {
				this.setState({messages: body});
		}.bind(this));
	},

	handleBatchMessageClick: function() {

		var randomPhoneNumber = (Math.floor(Math.random() * (9999999999 - 7891000000)) + 7891000000).toString();
		var randomMessage = 'Hello from RST';

		request.post('http://localhost:3000/api/tests/1/release',
			{json: {toPhoneNumber: randomPhoneNumber, toMessage: randomMessage, number: this.state.random}}, function(error, response, body) {
				this.setState({messages: body});
		}.bind(this));
	},

	handleSendClick: function() {

		var nextMessage = this.state.messages.find(function(item) {
			if (!item.sent) return true;
		});

		console.log(nextMessage);

		request.put('http://localhost:3000/api/messages/' + nextMessage.id, function(error, response, body) {
				this.setState({messages: JSON.parse(body)});
		}.bind(this));
	},

	render: function() {
		var linkItems = this.empty.map(function(item) {
			return (
				<li>
					<img src="http://placehold.it/100x100" />
					<span href={item.toLowerCase()}>{item}</span>
				</li>
			);
		});
		var messageItems = this.state.messages.map(function(item) {
			return (
				<li>
					<span>TO: {item.toPhoneNumber} &mdash; MESSAGE: {item.toMessage} {item.sent ? 'SENT' : null}</span>
				</li>
			);
		});
		return (
			<div className="content">
				<ul className="links-list">
					{linkItems}
				</ul>
				<button className="btn-add" onClick={this.handleAddMessageClick}> Add ONE message </button>
				<button className="btn-add" onClick={this.handleBatchMessageClick}> Add {this.state.random} messages </button>
				<button className="btn-add" onClick={this.handleClearMessageClick}> Clear All </button>
				<button className="btn-add" onClick={this.handleSendClick}> Simulate Send </button>
				<ul className="messages-list">
					{messageItems}
				</ul>
			</div>
		);
	}
});

module.exports = LinksList;
