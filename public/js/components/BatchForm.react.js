require('../../css/batches.scss');

var React = require('react');
var Link = require('react-router').Link;

var BatchForm = React.createClass({
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
		{
			name: 'Mon'
		},
		{
			name: 'Tue'
		},
		{
			name: 'Wed'
		},
		{
			name: 'Thu'
		},
		{
			name: 'Fri'
		},
		{
			name: 'Sat'
		},
		{
			name: 'Sun'
		},
	],
	getInitialState: function() {
		return {
			search_query: '',
			selected_students: {},
			selected_classes: {'Mon': false, 'Tue': false, 'Wed': false, 'Thu': false, 'Fri': false, 'Sat': false, 'Sun': false},
			selected_tests: {'Mon': false, 'Tue': false, 'Wed': false, 'Thu': false, 'Fri': false, 'Sat': false, 'Sun': false},
		};
	},
	componentDidUpdate: function() {
		componentHandler.upgradeDom(); // will update MDL components
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
	render: function() {
		let classElements = this.dayItems.map(function(item) {
			let selected = this.state.selected_classes[item.name] ? 'selected' : '';
			let suggest = this.state.selected_tests[item.name] ? '' : '';
			return (
				<li key={item.name} data-id={"class-" + item.name} className={selected + ' ' + suggest}>
					<div className="batches-form-day" data-id={"test-" + item.name}> {item.name} </div>
					<div className={"batches-form-time mdl-textfield mdl-js-textfield" + (selected ? ' show' : '')}>
  					<input className="mdl-textfield__input" type="text" pattern="[0-9]{1,2}:[0-9]{2} [AP]M" id="standard" />
  					<label className="mdl-textfield__label" htmlFor="phone"> Time? </label>
						<span className="mdl-textfield__error">Ex: 07:00 PM</span>
					</div>
				</li>
			)
		}.bind(this));
		let testElements = this.dayItems.map(function(item) {
			let selected = this.state.selected_tests[item.name] ? 'selected' : '';
			let suggest = this.state.selected_classes[item.name] ? '' : '';
			return (
				<li key={item.name} data-id={"test-" + item.name} className={selected + ' ' + suggest}>
					<div className="batches-form-day" data-id={"test-" + item.name}> {item.name} </div>
					<div className={"batches-form-time mdl-textfield mdl-js-textfield" + (selected ? ' show' : '')}>
  					<input className="mdl-textfield__input" type="text" pattern="[0-9]{1,2}:[0-9]{2} [AP]M" id="standard" />
  					<label className="mdl-textfield__label" htmlFor="phone"> Time? </label>
						<span className="mdl-textfield__error">Ex: 07:00 PM</span>
					</div>
				</li>
			)
		}.bind(this));
		let studentElements = this.studentItems.filter(function(item) {
			if (this.state.search_query.length < 1) return true;
		}.bind(this)).map(function(item) {
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
  					<label className="mdl-textfield__label" htmlFor="phone"> Year (2016) </label>
  					<span className="mdl-textfield__error">Use numerical, and a hyphen</span>
					</div>
					<div className="batches-form-standard mdl-textfield mdl-js-textfield">
  					<input className="mdl-textfield__input" type="text" pattern="[0-9]*" id="standard" />
  					<label className="mdl-textfield__label" htmlFor="phone"> Standard (10) </label>
  					<span className="mdl-textfield__error">Use numericals</span>
					</div>
					<div className="batches-form-buttons">
						<div className="batches-form-buttons-left">
							<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"> Save </button>
						</div>
						<div className="batches-form-buttons-right">
							<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" type="clear"> Cancel </button>
						</div>
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
						<ul> {studentElements} </ul>
					</div>
				</form>
			</div>
		);
	}
});

module.exports = BatchForm;
