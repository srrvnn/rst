require('../../css/batches.scss');

var React = require('react');
var Link = require('react-router').Link;

var Batches = React.createClass({

	batchItems: [
		{
			id: '2934',
			name: '10-A',
			number_of_boys: 12,
			number_of_girls: 7,
			average_score: '87',
			average_score_most_recent_test: '93',
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
			id: '2325',
			name: '10-B',
			number_of_boys: 12,
			number_of_girls: 7,
			average_score: '87',
			average_score_most_recent_test: '93',
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
			id: '2353',
			name: '10-C',
			number_of_boys: 12,
			number_of_girls: 7,
			average_score: '87',
			average_score_most_recent_test: '93',
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

		// update MDL components
		componentHandler.upgradeDom();
	},

	render: function() {

		// add batchElements by mapping each item from {this.batchItems}
		let batchElements = this.batchItems.map(function(item) {
			return (
				<Link key={item.name} to={"/batches/" + item.id} className="batches-item demo-card-square mdl-card mdl-shadow--2dp">
					<div className="mdl-card__title mdl-card--expand batches-item-name">
						{'Batch ' + item.name}
					</div>
					<div className="mdl-card__supporting-text batches-item-count">
						{'Count: ' + (item.number_of_boys + item.number_of_girls) + ' children'}
					</div>
					<div className="mdl-card__supporting-text batches-item-count">
						{'Average: ' + item.average_score + ' (' + item.average_score_most_recent_test + ') %'}
					</div>
					<div className="mdl-card__supporting-text batches-item-schedule">
						{item.schedule.map(function(schedule_item) {
								return (<span key={schedule_item.day + schedule_item.time} className="batches-item-schedule-item">{schedule_item.day} {schedule_item.time}</span>)
						})}
					</div>
				</Link>
			)
		});

		// add a batchElement for new batch
		batchElements.push((
			<Link key="0" to="/batches/new" className="batches-item demo-card-square mdl-card mdl-shadow--2dp">
				<i className="batches-add material-icons">add</i>
			</Link>
		));

		return (
			<div className="batches">
        <div className="batches-title"> Batches 2016-2017 </div>
				<ul className="batches-list"> {batchElements} </ul>
			</div>
		);
	}
});

module.exports = Batches;
