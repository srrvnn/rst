require('../../css/batches.scss');

var React = require('react');
var Link = require('react-router').Link;

var BatchForm = React.createClass({
	// TODO(srrvnn): get from API
	studentItems: [
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
	dayItems: [
		'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
	],
	getInitialState: function() {
		return {
			students: this.studentItems.slice(),
			search_query: '',
			selected_students: {},
			selected_classes: this.dayItems.reduce(function(obj, item){ obj[item] = false; return obj;}, {}),
			selected_tests: this.dayItems.reduce(function(obj, item){ obj[item] = false; return obj;}, {}),
		};
	},
	componentDidUpdate: function() {
		// bootstrap MDL components in the component DOM
		componentHandler.upgradeDom();
	},
	selectForBatch: function(section, e) {
		let el = {id: e.target.dataset['id']};
		if (!el.id) return;

		let selected_bucket = this.state['selected_' + section];
		let selected_bucket_key = 'selected_' + section;
		let selected_value = el.id.substring(el.id.indexOf('-') + 1);

		if (selected_bucket[selected_value]) {
			delete selected_bucket[selected_value];
		} else {
			selected_bucket[selected_value] = true;
		}

		this.setState({selected_bucket_key: selected_bucket});
	},
	filterStudents: function(e) {
		let search_query = e.target.value.toLowerCase();
		let students_filtered = [];
		if (search_query.length > 0) {
			students_filtered = this.state.students.filter(function(item) {
					return (item.first_name.toLowerCase().indexOf(search_query) > -1 || item.last_name.toLowerCase().indexOf(search_query) > -1);
			});
		} else {
			students_filtered = this.studentItems.slice();
		}
		this.setState({students: students_filtered});
	},
	render: function() {
		let classElements = this.dayItems.map(function(item) {
			let selected = this.state.selected_classes[item] ? 'selected' : '';
			let suggest = this.state.selected_tests[item] ? '' : '';
			return (
				<li key={item} data-id={"class-" + item} className={selected + ' ' + suggest}>
					<div className="batches-form-day" data-id={"test-" + item}> {item} </div>
					<div className={"batches-form-time mdl-textfield mdl-js-textfield" + (selected ? ' show' : '')}>
  					<input className="mdl-textfield__input" type="text" pattern="[0-9]{1,2}:[0-9]{2} [AP]M" id="standard" />
  					<label className="mdl-textfield__label" htmlFor="phone"> What Time? </label>
						<span className="mdl-textfield__error">Ex: 07:00 PM</span>
					</div>
				</li>
			)
		}.bind(this));
		let testElements = this.dayItems.map(function(item) {
			let selected = this.state.selected_tests[item] ? 'selected' : '';
			let suggest = this.state.selected_classes[item] ? '' : '';
			return (
				<li key={item} data-id={"test-" + item} className={selected + ' ' + suggest}>
					<div className="batches-form-day" data-id={"test-" + item}> {item} </div>
					<div className={"batches-form-time mdl-textfield mdl-js-textfield" + (selected ? ' show' : '')}>
  					<input className="mdl-textfield__input" type="text" pattern="[0-9]{1,2}:[0-9]{2} [AP]M" id="standard" />
  					<label className="mdl-textfield__label" htmlFor="phone"> What Time? </label>
						<span className="mdl-textfield__error">Ex: 07:00 PM</span>
					</div>
				</li>
			)
		}.bind(this));
		let studentElements = this.state.students.map(function(item) {
			let selected = this.state.selected_students[item.id] ? 'selected' : '';
			return (
				<li key={item.id} data-id={"student-" + item.id} className={selected}>
					<img data-id={"student-" + item.id} src="http://placehold.it/50x50"/>
					{item.first_name} {item.last_name}
				</li>
			)
		}.bind(this));
		return (
			<div className="batches-new">
				<form className="batches-form">
					<div className="batches-form-name mdl-textfield mdl-js-textfield">
  					<input className="mdl-textfield__input" type="text" pattern="[a-zA-Z0-\- ]*" id="name" />
  					<label className="mdl-textfield__label" htmlFor="phone"> Enter Name (ex: 10-A) </label>
  					<span className="mdl-textfield__error">Use Letter, and a hyphen</span>
					</div>
					<div className="batches-form-year mdl-textfield mdl-js-textfield">
  					<input className="mdl-textfield__input" type="text" pattern="[0-9\- ]*" id="year" />
  					<label className="mdl-textfield__label" htmlFor="phone"> Year (ex: 2016-2017) </label>
  					<span className="mdl-textfield__error">Use numerical, and a hyphen</span>
					</div>
					<div className="batches-form-standard mdl-textfield mdl-js-textfield">
  					<input className="mdl-textfield__input" type="text" pattern="[0-9]*" id="standard" />
  					<label className="mdl-textfield__label" htmlFor="phone"> Standard (ex: 10) </label>
  					<span className="mdl-textfield__error">Use numericals</span>
					</div>
					<div className="batches-form-buttons">
						<div className="batches-form-buttons-left">
							<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"> Save </button>
						</div>
						<Link to="/batches" className="batches-form-buttons-right">
							<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" type="clear"> Cancel </button>
						</Link>
					</div>
					<div className="batches-form-classes" onClick={this.selectForBatch.bind(this, 'classes')}>
						<h5> Select Classes Schedule </h5>
						<ul> {classElements} </ul>
					</div>
					<div className="batches-form-tests" onClick={this.selectForBatch.bind(this, 'tests')}>
						<h5> Select Tests Schedule </h5>
						<ul> {testElements} </ul>
					</div>
					<div className="batches-form-students" onClick={this.selectForBatch.bind(this, 'students')}>
						<h5> Select Students </h5>
						<div className="batches-form-students-search mdl-textfield mdl-js-textfield">
	  					<input className="mdl-textfield__input" type="text" id="students-search" onChange={this.filterStudents}/>
	  					<label className="mdl-textfield__label" htmlFor="students-search"> Search Students (Vivek) </label>
						</div>
						<ul> {studentElements} </ul>
					</div>
				</form>
			</div>
		);
	}
});

module.exports = BatchForm;
