var React = require('react');
var request = require('request');

var LinksList = React.createClass({

	empty: [],
	links: ['Batches', 'Students', 'Tests', 'Messages'],
	base: location.protocol + '//' + location.host,

	getInitialState: function() {
		return {messages: [], random: Math.floor(Math.random() * (50 - 1 + 1)) + 1};
	},

	componentDidMount: function() {
		request(this.base + '/api/messages', function(error, response, body) {
			this.setState({messages: JSON.parse(body)});
		}.bind(this));
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
					<span>ID: {item._id} TO: {item.toPhoneNumber} &mdash; MESSAGE: {item.toMessage} {item.sent ? 'SENT' : null}</span>
				</li>
			);
		});
		return (
			<div className="content">
				<h4> Summary API </h4>
				<button className="btn-add" onClick={this.handle}> Read Summary </button>

				<h4> Batches API </h4>
				<button className="btn-add" onClick={this.handle}> Read Batches </button>
				<button className="btn-add" onClick={this.handle}> Create Batch </button>
				<button className="btn-add" onClick={this.handle}> Update Batch </button>
				<button className="btn-add" onClick={this.handle}> Delete Batch </button>

				<h4> Students API </h4>
				<button className="btn-add" onClick={this.handle}> Read Students </button>
				<button className="btn-add" onClick={this.handle}> Create Student </button>
				<button className="btn-add" onClick={this.handle}> Update Student </button>
				<button className="btn-add" onClick={this.handle}> Delete Student </button>

				<h4> Questions API </h4>
				<button className="btn-add" onClick={this.handle}> Read Questions </button>
				<button className="btn-add" onClick={this.handle}> Create Question </button>
				<button className="btn-add" onClick={this.handle}> Update Question </button>
				<button className="btn-add" onClick={this.handle}> Delete Question </button>

				<h4> Messages API </h4>
				<button className="btn-add" onClick={this.handle}> Read Messages </button>
				<button className="btn-add" onClick={this.handle}> Create Message </button>
				<button className="btn-add" onClick={this.handle}> Update Message </button>
				<button className="btn-add" onClick={this.handle}> Delete Message </button>

				<h4> Lectures API </h4>
				<button className="btn-add" onClick={this.handle}> Read Lectures </button>
				<button className="btn-add" onClick={this.handle}> Create Lecture </button>
				<button className="btn-add" onClick={this.handle}> Update Lecture </button>
				<button className="btn-add" onClick={this.handle}> Delete Lecture </button>

				<h4> Tests API </h4>
				<button className="btn-add" onClick={this.handle}> Read Tests </button>
				<button className="btn-add" onClick={this.handle}> Create Test </button>
				<button className="btn-add" onClick={this.handle}> Update Test </button>
				<button className="btn-add" onClick={this.handle}> Delete Test </button>

				<h4> Marks API </h4>
				<button className="btn-add" onClick={this.handle}> Read Marks </button>
				<button className="btn-add" onClick={this.handle}> Create Mark </button>
				<button className="btn-add" onClick={this.handle}> Update Mark </button>
				<button className="btn-add" onClick={this.handle}> Delete Mark </button>

			</div>
		);
	}
});

module.exports = LinksList;
