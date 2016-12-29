require('../../css/batches.scss');

var React = require('react');
var Link = require('react-router').Link;

var Batches = React.createClass({

	batchItems: [
		{
			name: '10-A',
			number_of_boys: 12,
			number_of_girls: 7,
			average_score: '87 /100',
			schedule: [
				{
	        timestamp: '',
	        day: 'SUN',
	        time: '7AM'
	      },
				{
	        timestamp: '',
	        day: 'SUN',
	        time: '8AM'
	      },
				{
	        timestamp: '',
	        day: 'SUN',
	        time: '9AM'
	      },
			]
		},
		{
			name: '10-B',
			number_of_boys: 12,
			number_of_girls: 7,
			average_score: '87 /100',
			schedule: [
				{
	        timestamp: '',
	        day: 'SUN',
	        time: '8AM'
	      },
				{
	        timestamp: '',
	        day: 'SUN',
	        time: '7AM'
	      },
				{
	        timestamp: '',
	        day: 'SUN',
	        time: '9AM'
	      },
			]
		},
		{
			name: '10-C',
			number_of_boys: 12,
			number_of_girls: 7,
			average_score: '87 /100',
			schedule: [
				{
	        timestamp: '',
	        day: 'SUN',
	        time: '7AM'
	      },
				{
	        timestamp: '',
	        day: 'SUN',
	        time: '8AM'
	      },
				{
	        timestamp: '',
	        day: 'SUN',
	        time: '9AM'
	      },
			]
		}
	],

	getInitialState: function() {
		return {};
	},

	componentDidUpdate: function() {
		componentHandler.upgradeDom(); // will update MDL components
	},

	render: function() {
		let batchElements = this.batchItems.map(function(item) {
			return (
				<Link key={item.name} to="" className="batch demo-card-square mdl-card mdl-shadow--2dp">
					<div className="mdl-card__title mdl-card--expand batch-name">
						{'Batch ' + item.name}
					</div>
					<div className="mdl-card__supporting-text batch-count">
						{'Count: ' + (item.number_of_boys + item.number_of_girls) + ' children'}
					</div>
					<div className="mdl-card__supporting-text batch-count">
						{'Average: ' + item.average_score}
					</div>
					<div className="mdl-card__supporting-text batch-schedule">
						{item.schedule.map(function(schedule_item) {
								return (<span key={schedule_item.day + schedule_item.time} className="batch-schedule-item">{schedule_item.day} {schedule_item.time}</span>)
						})}
					</div>
				</Link>
			)
		});
		batchElements.push((
			<Link key="0" to="" className="batch demo-card-square mdl-card mdl-shadow--2dp">
				<i className="batch-add material-icons">add</i>
			</Link>
		));
		return (
			<div className="batches">
        <div className="batch-page-title"> Batches 2016-2017 </div>
				<ul className="batch-list"> {batchElements} </ul>
			</div>
		);
	}
});

module.exports = Batches;
