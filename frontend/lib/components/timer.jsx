var React = require('react');
var ReactCountdownClock = require('react-countdown-clock');

var Timer = React.createClass({
	callback: function(){
		console.log('end')
	},
	render: function() {
		console.log(this.props.session)
		return (
			<div className="content">
				<div className="timer">
					{JSON.stringify(this.props.session)}
				</div>
			</div>
		);
	}
});

module.exports = Timer;
// 				<ReactCountdownClock 
// 					seconds={60}
// 					color="#ddd"
// 					alpha={0.9}
// 					size={300}
// 					onComplete={this.callback} />
