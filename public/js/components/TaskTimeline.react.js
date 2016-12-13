require('../../css/task-timeline.css');

var React = require('react');

var TaskTimeline = React.createClass({
  tasks: {
    'marks': [
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
      {
        timestamp: '',
        day: 'MON',
        time: '7AM'
      },
      {
        timestamp: '',
        day: 'MON',
        time: '8AM'
      },
      {
        timestamp: '',
        day: 'MON',
        time: '9AM'
      },
    ],
    'classes': [
      {
        timestamp: '',
        day: 'TUE',
        time: '4PM'
      },
      {
        timestamp: '',
        day: 'TUE',
        time: '5PM'
      },
      {
        timestamp: '',
        day: 'TUE',
        time: '6PM'
      },
    ],
    'questions': [
      {
        timestamp: '',
        day: 'WED',
        time: '4PM'
      },
      {
        timestamp: '',
        day: 'WED',
        time: '5PM'
      },
      {
        timestamp: '',
        day: 'WED',
        time: '6PM'
      },
      {
        timestamp: '',
        day: 'THU',
        time: '4PM'
      },
    ]
  },

  componentDidUpdate: function() {
    componentHandler.upgradeDom();
  },

  getTasksSpans: function(tasks) {
    return tasks.slice(0, 3).map(function(task) {
      return (
        <button className="task mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
          {task.day}<br/>{task.time}
        </button>
      );
    })
  },
  render: function() {
    return (
      <div className="task-timeline">
        <hr/>
        <div className="task-group">
          <h6> Enter Marks, for Tests: </h6>
          {this.getTasksSpans(this.tasks.marks)}
        </div>
        <div className="task-group">
          <h6> Take Attendance, for Classes: </h6>
          {this.getTasksSpans(this.tasks.classes)}
        </div>
        <div className="task-group">
          <h6> Choose Questions, for Tests: </h6>
          {this.getTasksSpans(this.tasks.questions)}
        </div>
      </div>
    )
  }
});

module.exports = TaskTimeline;
