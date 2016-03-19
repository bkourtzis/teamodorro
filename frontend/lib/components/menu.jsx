var React = require('react');
var Menu = require('react-burger-menu').stack;
var Slider = require('react-rangeslider');

 
var Settings = React.createClass({
	getInitialState: function(){
	    return {
	        work_duration: 25,
	        break_duration: 5
	    };
	},
	changeAttributeValue: function(attribute_name){
		return function(event){
			var obj = {};
			obj[attribute_name] = event.target.value;
			this.setState(obj);
		}.bind(this);
	},

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
		var durations = this.state;
		return (
			<Menu>
				<span>Work duration</span>

				<input type="text"
					onChange={this.changeAttributeValue("work_duration")} 
					value={durations.work_duration}
					ref="work_input"/>
				<span>Break duration</span>

				<input type="text"
					onChange={this.changeAttributeValue("break_duration")} 
					value={durations.break_duration}
					ref="break_input"/>

				<button onClick={this.saveDurations}>Save</button>
			</Menu>
		);
	}
});

module.exports = Settings
