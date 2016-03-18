var React = require('react');
var ReactCountdownClock = require('react-countdown-clock');

var Timer = React.createClass({
	getTargetDuration: function(){
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
	}
	callback: function(){
		console.log('end')
	},
	render: function() {
		console.log(this.props.session)
		if (this.props.session.body) {
			return (
				<div className="content">
					<div className="timer">

						{JSON.stringify(this.props.session)}
						{this.getMode()}
						{this.getTimeLeft()}
					</div>
				</div>
			);			
		} else {
			return(
				<div><span>loading</span></div>
			)
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
