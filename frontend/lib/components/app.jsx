var Example = {};

var React = require("react");
var Router = require("react-router");
var Helper = require("../helpers/helper.js");

module.exports = Example;

Example.SomeView = require('./some-view.jsx');
Example.SecondView = require('./second-view.jsx');
Example.Home = require('./home.jsx');

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
		var current_session = Helper.getAllSessions();

		self.setState({
			session: current_session
		})
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
				<Example.Home session={this.state.session}/>
				<button onClick={this.refresh}>Refresh</button>
				<button onClick={this.add}>Add</button>
				<button onClick={this.update}>Update</button>
			</div>
		)
	}
});
