require('../../css/batches.scss');

var React = require('react');

var Batch = React.createClass({
	render: function() {
		return (
			<div className="batch">
        Batch {this.props.params['batchid']}
			</div>
		);
	}
});

module.exports = Batch;
