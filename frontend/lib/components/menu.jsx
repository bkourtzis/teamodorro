var React = require('react');
var Menu = require('react-burger-menu').stack;
var Helper = require('../helpers/helper.js');

var Settings = React.createClass({
	saveDurations: function (e) {
		e.preventDefault();
		var work_input = this.refs.work_input;
		var work_duration = work_input.value * 60 * 1000;
		var break_input = this.refs.break_input;
		var break_duration = break_input.value * 60 * 1000;

		Helper.changeDurationsForSession(this.props.session.id, break_duration, work_duration)
	},
	render: function() {
		return (
			<div>
			{(this.props.session.body !== undefined)
				? <Menu>
					<span>Work duration (minutes)</span>
					<input type="number"
						min="1"
						className="input"
						defaultValue={this.props.session.body.work_duration/60/1000}
						ref="work_input"/>

					<span>Break duration (minutes)</span>
					<input type="number"
						min="1"
						className="input"
						defaultValue={this.props.session.body.break_duration/60/1000}
						ref="break_input"/>

					<button className="button" onClick={this.saveDurations}>refresh</button>
				</Menu>
				: <Menu>
					<span>loading...</span>
					</Menu>
			}
			</div>
		);
	}
});

module.exports = Settings
