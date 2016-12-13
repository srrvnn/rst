require('../../css/task-timeline.css');

var React = require('react');

var TaskTimeline = React.createClass({
  render: function() {
    return (
      <div className="task-timeline">
        <hr/>
        <div className="task-group">
          <h4> Enter Marks, for Tests: </h4>
          <span className="task accent-color">MON 7AM</span>
          <span className="task accent-color">MON 9AM</span>
        </div>
        <div className="task-group">
          <h4> Take Attendance, for Classes: </h4>
          <span className="task accent-color">TUE 4PM</span>
          <span className="task accent-color">TUE 5PM</span>
        </div>
        <div className="task-group">
          <h4> Choose Questions, for Tests: </h4>
          <span className="task accent-color">WED 7PM</span>
          <span className="task accent-color">WED 7PM</span>
        </div>
      </div>
    )
  }
});

module.exports = TaskTimeline;
