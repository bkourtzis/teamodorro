var React = require("react");
var ReactDOM = require("react-dom");
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Example = require('./components/app.jsx');
var hashHistory = ReactRouter.hashHistory;
// var browserHistory = ReactRouter.browserHistory;
// <Router history={browserHistory}>

// ReactDOM.render(
// 	<Router history={hashHistory}>
// 		<Route path="/" component={Example.App}>
// 			<IndexRoute component={Example.Home}/>
// 			<Route path="some" component={Example.SomeView}/>
// 			<Route path="second" component={Example.SecondView}/>
// 		</Route>
//   	</Router>,
// document.getElementById('app')
// );


ReactDOM.render(<Example.App/>, document.getElementById('app'));
