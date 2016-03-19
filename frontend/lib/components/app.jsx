var Example = {};

var React = require("react");
var Router = require("react-router");
var Helper = require("../helpers/helper.js");

module.exports = Example;

Example.Work = require('./work.jsx');
Example.AfterWork = require('./after-work.jsx');
Example.Break = require('./break.jsx');
Example.AfterBreak = require('./after-break.jsx');
Example.Timer = require('./timer.jsx');
Example.Menu = require('./menu.jsx');
Example.Container = require('./container.jsx');
Example.NewSession = require('./new-session.jsx');

Example.TimerContainer = React.createClass({
	mixins: [Router.State, Router.Navigation],
	componentDidMount: function() {
		var self = this;
		self.refresh();
		setInterval(function(){
			self.refresh();
		}, 1000)
	},
	getInitialState: function() {
		return {
			session: {},
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
	refresh: function(){
		var self = this;
		var some_id;
		Helper.getSessionByName(this.props.params.slug)
		.then(function(current_session){
				self.setState({
					session: current_session
				})
			}
		)
	},
	render: function() {
		console.log(this.props.params.slug)

		return (
			<div>

				<Example.Menu 
					changeAttributeValue={this.changeAttributeValue}
					work_duration={this.state.work_duration}
					break_duration={this.state.break_duration}/>
				<Example.Timer session={this.state.session} />
			</div>
		)
	}
});
