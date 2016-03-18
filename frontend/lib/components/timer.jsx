var React = require('react');
var Example = require('./app.jsx');
var ReactCountdownClock = require('react-countdown-clock');

var Timer = React.createClass({
	getTargetDuration: function(){
		var general_state = this.props.session.body.current_state;

		if(general_state === "break"){
			return this.props.session.body.break_duration;
		}else{
			return this.props.session.body.work_duration;
		}
	},
	getMode: function(){
		var lct = this.props.session.body.last_changed_timestamp;
		var at = new Date().getTime();
		var general_state = this.props.session.body.current_state;
		var target_duration = this.getTargetDuration();
		if(at-lct>=target_duration){
			return "after_" + general_state;
		}else{
			return general_state;
		}
	},
	getTimeLeft: function(){
		var current_mode = this.getMode();
		if(current_mode.split("_")[0]==="after"){
			return 0;
		}else{
			var lct = this.props.session.body.last_changed_timestamp
			var at = new Date().getTime();
			var target_duration = this.getTargetDuration();
			return Math.floor((target_duration - (at - lct))/1000);
		}
	},
	callback: function(){
		console.log('end')
	},

	showCurrentView: function(){
		var current_mode = this.getMode()
		var current_time = this.getTimeLeft()
		var current_view;
		
		switch(current_mode) {
			case "break":
				current_view = <Example.Break time={current_time}/>
				break;
			case "work":
				current_view = <Example.Work time={current_time}/>
				break;
			case "after_break":
				current_view = <Example.AfterBreak time={current_time}/>
				break;
			case "after_work":
				current_view = <Example.AfterWork time={current_time}/>
				break;
			default:
				current_view = <div />;
		}
		return current_view;
	},

	render: function() {
		console.log(this.props.session)

		try{
			if (this.props.session.body) {
							// {JSON.stringify(this.props.session)}
				return (
					<div className="content">
						<div className="testing">
							<span>mode from timer.jsx {this.getMode()}</span>
							<br />
							<span>time from timer.jsx {this.getTimeLeft()}</span>
						</div>
						<div className="timer">
							<span>Timer</span>
							{this.showCurrentView()}
						</div>
					</div>
				);			
			} else {
				return(
					<div><span>loading</span></div>
				)
			}
		} catch(e){
			console.log(e)
		}
	}
});

module.exports = Timer;
// 				<ReactCountdownClock 
// 					seconds={60}
// 					color="#ddd"
// 					alpha={0.9}
// 					size={300}
// 					onComplete={this.callback} />

