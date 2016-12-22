require('../../css/tasks.scss');

var React = require('react');

var Tasks = React.createClass({

  tasksGroups: [
    {
      key: 'marks',
      title: 'Enter Marks, for Tests'
    },
    {
      key: 'classes',
      title: 'Take Attendance, for Classes'
    },
    {
      key: 'questions',
      title: 'Choose Questions, for Tests'
    }
  ],

  // TODO(srrvnn): get from API
  tasksItems: {
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

  render: function() {
    var generateTasksElements = function(tasks) {
      return tasks.slice(0, 3).map(function(task) {
        return (
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect task"  key={task.day + task.time}>
            {task.day} <br/> {task.time}
          </button>
        );
      });
    }
    var tasksGroupsElements = this.tasksGroups.map(function(tasksGroup) {
      return (
        <div className="tasks-group" key={tasksGroup.title}>
          <button className="tasks-show-all mdl-button mdl-js-button">
            {tasksGroup.title}
          </button>
          {generateTasksElements(this.tasksItems[tasksGroup.key])}
        </div>
      );
    }.bind(this));

    return (
      <div className="tasks"> {tasksGroupsElements} </div>
    )
  }
});

module.exports = Tasks;
