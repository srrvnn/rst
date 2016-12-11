var React = require('react');

require('!style!css!../../css/task-timeline.css');

var TaskTimeline = React.createClass({
  render: function() {
    return (
      <div className="task-timeline">
        <hr/>
        <div className="task-group">
          <h4> Enter Marks, for Tests: </h4>
          <span className="task task-more">&bull;&bull;&bull;</span>
          <span className="task">MON 7PM</span>
          <span className="task">MON 8PM</span>
          <span className="task">TUE 7AM</span>

        </div>
        <div className="task-group">
          <h4> Take Attendance, for Classes: </h4>
          <span className="task">TUE 4PM</span>
          <span className="task">TUE 5PM</span>
          <span className="task">TUE 8PM</span>
        </div>
        <div className="task-group">
          <h4> Choose Questions, for Tests: </h4>
          <span className="task">WED 7PM</span>
          <span className="task">WED 8PM</span>
          <span className="task">THU 7AM</span>
          <span className="task task-more">&bull;&bull;&bull;</span>
        </div>
      </div>
    )
  }
});

module.exports = TaskTimeline;
