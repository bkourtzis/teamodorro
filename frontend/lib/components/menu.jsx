var React = require('react');
var Menu = require('react-burger-menu').stack;

var Settings = React.createClass({
	saveDurations: function (e) {
		e.preventDefault();

		var work_input = this.refs.work_input;
		var work_duration = work_input.value;

		var break_input = this.refs.break_input;
		var break_duration = break_input.value;

		console.log('saved')
		console.log('work_duration', work_duration)
		console.log('break_duration', break_duration)

	},
	render: function() {
		var durations = {
			work_duration: this.props.work_duration,
			break_duration: this.props.break_duration
		}
		return (
			<Menu>
				<span>Work duration (minutes)</span>

				<input type="text"
					className="input_duration"
					onChange={this.props.changeAttributeValue("work_duration")} 
					value={durations.work_duration}
					ref="work_input"/>


				<span>Break duration (minutes)</span>

				<input type="text"
					className="input_duration"
					onChange={this.props.changeAttributeValue("break_duration")} 
					value={durations.break_duration}
					ref="break_input"/>

				<button className="button" onClick={this.saveDurations}>Save</button>
			</Menu>
		);
	}
});

module.exports = Settings
