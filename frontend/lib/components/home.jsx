var React = require('react');
var Home = React.createClass({
	render: function() {
		console.log(this.props.session)
		return (
			<div className="Home">
				{JSON.stringify(this.props.session)}
			</div>
		);
	}
});

module.exports = Home;
