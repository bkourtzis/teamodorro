var Example = {};

var React = require("react");
var Router = require("react-router");
var Store = require("../stores/store.js");

module.exports = Example;

Example.SomeView = require('./some-view.jsx');
Example.SecondView = require('./second-view.jsx');
Example.Home = require('./home.jsx');

Example.App = React.createClass({
				// <Router.RouteHandler/> → {this.props.children}
	mixins: [Router.State, Router.Navigation],
	render: function() {
		return (
			<div className="app">
				app component
				{this.props.children}
			</div>
		)
	}
});
