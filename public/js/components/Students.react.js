require('../../css/students.scss');

var React = require('react');

var Students = React.createClass({
	render: function() {
		return (
			<div className="students">
        List of Students
			</div>
		);
	}
});

module.exports = Students;
