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
		self.refreshTimeOffset();
		setInterval(function(){
			self.refresh();
		}, 1000)
	},
	getInitialState: function() {
		return {
			session: {},
			work_duration: 25,
			break_duration: 5,
			time_offset: 0
		};
	},
	changeMode: function(mode){
		var self = this;
		Helper.updateSession(this.state.session.id, mode)
		.then(function(xml, new_session_data){
			console.log(new_session_data)
			self.setState({
				session: new_session_data
			})
		})
	},
	changeAttributeValue: function(attribute_name){
		return function(event){
			var obj = {};
			obj[attribute_name] = event.target.value;
			this.setState(obj);
		}.bind(this);
	},
	refreshTimeOffset: function(){
		var self = this;
		var offsets = [];
		Helper.getTimeOffset()
		.then(function(offset){
			offsets.push(offset);
			return Helper.getTimeOffset();
		})
		.then(function(offset){
			offsets.push(offset);
			return Helper.getTimeOffset();
		})
		.then(function(offset){
			offsets.push(offset);
			console.log("avg:", offsets.reduce(function(a, b){return a+b})/offsets.length);
			self.setState({
				time_offset: offsets.reduce(function(a, b){return a+b})/offsets.length
			})
		})
	},
	refresh: function(){
		var self = this;
		var some_id;
		Helper.getSessionByName(this.props.params.slug)
		.catch(function(err){
			if(err.message === "not_found"){
				try{
					return Helper.addSession({slug: self.props.params.slug})
				}catch(e){
				}
			}
		})
		.then(function(session_data){
				self.setState({
					session: session_data
				})
			}
		)
	},
	render: function() {

		return (
			<div>
				<Example.Menu 
					changeAttributeValue={this.changeAttributeValue}
					work_duration={this.state.work_duration}
					break_duration={this.state.break_duration}/>
				<Example.Timer 
					session={this.state.session} 
					onChangeMode={this.changeMode}
					timeOffest={this.state.time_offset}/>
			</div>
		)
	}
});
