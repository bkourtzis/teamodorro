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
		self.getSession();
	},
	getInitialState: function() {
		return {
			session: {}
		};
	},
	getSession: function(){
		Store.getSession()
	},
	render: function() {
		return (
			<div className="app">
				app component
				{this.props.children}
			</div>
		)
	}
});
