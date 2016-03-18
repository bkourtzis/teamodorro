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

Example.App = React.createClass({
				// <Router.RouteHandler/> → {this.props.children}
	mixins: [Router.State, Router.Navigation],
	componentDidMount: function() {
		var self = this;
		self.refresh();
	},
	getInitialState: function() {
		return {
			session: {}
		};
	},
	refresh: function(){
		var self = this;
		var some_id;
		Helper.getSession()
		.then(function(current_session){
				self.setState({
					session: current_session
				})
			}
		)
		console.log('save state')

	},
	add: function(){
		var new_date = new Date()

		var data = {
			"last_changed_timestamp" : new_date.getTime(),
			"work_duration" : 25*60*1000,
			"break_duration" : 5*60*1000,
			"slug" : "sealcode",
			"current_state" : "running"
		}

		Helper.addSession(data)
	},
	update: function(){
		this.add()
	},

				// {this.props.children}
	render: function() {
		return (
			<div className="app">
				<Example.Timer session={this.state.session}/>
				<button onClick={this.refresh}>Refresh</button>
				<button onClick={this.add}>Add</button>
				<button onClick={this.update}>Update</button>
			</div>
		)
	}
});
