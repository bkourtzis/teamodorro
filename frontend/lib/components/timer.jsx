var React = require('react');
var Example = require('./app.jsx');
var ReactCountdownClock = require('react-countdown-clock');

var Timer = React.createClass({
	getDefaultProps: function(){
		return {
			session: {},
		}
	},
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
			var lct = this.props.session.body.last_changed_timestamp;
			console.log(this.props.timeOffset);
			var at = new Date().getTime() + this.props.timeOffset;
			var target_duration = this.getTargetDuration();
			return Math.floor((target_duration - (at - lct))/1000);
		}
	},

		// minutes = time.getMinutes();
		// seconds = time.getSeconds();
		// if (minutes.toString().length == 1) minutes = "0"+minutes;
		// if (seconds.toString().length == 1) seconds = "0"+seconds;
		// return currentTime = minutes + ":" + seconds;


	callback: function(){
		console.log('end')
	},

	showCurrentView: function(){
		var current_mode = this.getMode()
		var current_time = this.getTimeLeft()
		var current_view;

		switch(current_mode) {
			case "break":
				current_view = <Example.Break 
					time={current_time} 
					session={this.props.session} 
					onChangeMode={this.props.onChangeMode}/>
				break;
			case "work":
				current_view = <Example.Work 
					time={current_time} 
					session={this.props.session} 
					onChangeMode={this.props.onChangeMode}/>
				break;
			case "after_break":
				current_view = <Example.AfterBreak 
					time={current_time} 
					session={this.props.session} 
					onChangeMode={this.props.onChangeMode}/>
				break;
			case "after_work":
				current_view = <Example.AfterWork 
					time={current_time} 
					session={this.props.session} 
					onChangeMode={this.props.onChangeMode}/>
				break;
			default:
				current_view = <div />;
		}
		return current_view;
	},

	render: function() {

		try{
			if (this.props.session.body) {
				return (
					<div className="flex-container">
						<div className="row">
							<div className="flex-item">
								<div className="logo">
									Teamodorro
								</div>
							</div>
							{this.showCurrentView()}
						</div>
					</div>
				);			
			} else {
				return(
					<div className="flex-container">
						<div className="row">
							<div className="flex-item">
								<div className="logo">
									Teamodorro
								</div>
							</div>
						</div>
					</div>
				)
			}
		} catch(e){
			console.log(e)
		}
	}
});

module.exports = Timer;
