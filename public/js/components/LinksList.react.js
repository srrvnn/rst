var React = require('react');
var request = require('request');

var LinksList = React.createClass({

	empty: [],
	links: ['Batches', 'Students', 'Tests', 'Messages'],

	getInitialState: function() {
		return {messages: []};
	},

	componentDidMount: function() {
		request('http://localhost:3000/api/messages', function(error, response, body) {
			var result = JSON.parse(body);
			this.setState({messages: result});
		}.bind(this));
	},

	handleClick: function() {
		request.post('http://localhost:3000/api/messages',
			{json: {toPhoneNumber: '8220002254', toMessage: 'Hello, Chella.'}}, function(error, response, body) {
				console.log(body);
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
		return (
			<div className="content">
				<ul className="links-list">
					{linkItems}
				</ul>
				<button onClick={this.handleClick}> Add a message via the API </button>
				<span> {status} </span>
			</div>
		);
	}
});

module.exports = LinksList;
