require('../../css/batches.scss');

var React = require('react');
var Link = require('react-router').Link;

var Batch = React.createClass({
	batch : {
		name: '10-A',
		year: '2016-2017',
		standard: '10th',
		students: [
			{
				id: 6454,
				first_name: 'Saravanan',
				last_name: 'Ganesh',
				photoURL: ''
			},
			{
				id: 6451,
				first_name: 'Vivek',
				last_name: 'Ganesh',
				photoURL: ''
			},
			{
				id: 6344,
				first_name: 'Priyanka',
				last_name: 'Kapoor',
				photoURL: ''
			}
		],
		classesSchedule: [
			{ timestamp: '1123', date: 'JAN 16', id: null },
      { timestamp: '1134', date: 'JAN 17', id: 9343 },
			{ timestamp: '1145', date: 'JAN 18', id: null },
      { timestamp: '1156', date: 'TODAY', id: null },
			{ timestamp: '1167', date: 'JAN 20', id: 9242 },
      { timestamp: '1178', date: 'JAN 21', id: null },
			{ timestamp: '1189', date: 'JAN 22', id: 1920 },
		],
		testsSchedule: [
			{ timestamp: '1123', date: 'JAN 16', id: null },
      { timestamp: '1134', date: 'JAN 17', id: 7654 },
			{ timestamp: '1145', date: 'JAN 18', id: null },
      { timestamp: '1156', date: 'TODAY', id: 9183 },
			{ timestamp: '1167', date: 'JAN 20', id: null },
      { timestamp: '1178', date: 'JAN 21', id: 2953 },
			{ timestamp: '1189', date: 'JAN 22', id: null },
		]
	},
	getInitialState: function() {
		return {
			classesScheduleScroll: -3,
			testsScheduleScroll: -3,
		};
	},
	componentDidUpdate: function() {
		componentHandler.upgradeDom(); // will update MDL components
	},
	render: function() {
		let classElements = this.batch.classesSchedule.map(function(item) {
			let exists = item.id !== null ? 'exists' : '';
			return (
				<li key={item.timestamp} data-id={"class-" + item.id} className={exists}>
					<div className="batches-batch-dot"> </div>
					<div className="batches-batch-day"> {item.date} </div>
				</li>
			)
		}.bind(this));
		let testElements = this.batch.testsSchedule.map(function(item) {
			let exists = item.id !== null ? 'exists' : '';
			return (
				<li key={item.timestamp} data-id={"class-" + item.id} className={exists}>
					<div className="batches-batch-dot"> </div>
					<div className="batches-batch-day"> {item.date} </div>
				</li>
			)
		}.bind(this));
		let studentElements = this.batch.students.map(function(item) {
			return (
				<li key={item.id} data-id={"student-" + item.id}>
					<img data-id={"student-" + item.id} src="http://placehold.it/50x50"/>
					{item.first_name} {item.last_name}
				</li>
			)
		}.bind(this));
		return (
			<div className="batches-batch">
				<div className="batches-batch-title">	Batch {this.batch.name} </div>
				<div className="batches-batch-year"> Year: {this.batch.year} </div>
				<div className="batches-batch-standard"> Standard: {this.batch.standard} </div>
				<div className="batches-batch-buttons">
					<div className="batches-batch-buttons-left">
						<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"> Pass </button>
						<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"> Delete </button>
						<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"> Edit </button>
					</div>
					<div className="batches-batch-buttons-right">
						<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" type="clear"> New Class </button>
						<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" type="clear"> New Test </button>
						<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" type="clear"> New SMS </button>
					</div>
				</div>
				<div className="batches-batch-classes">
					<h5> Classes Schedule </h5>
					<ul> {classElements} </ul>
				</div>
				<div className="batches-batch-tests">
					<h5> Tests Schedule </h5>
					<ul> {testElements} </ul>
				</div>
				<div className="batches-batch-students">
					<h5> Students </h5>
					<ul> {studentElements} </ul>
				</div>
			</div>
		);
	}
});

module.exports = Batch;
