var React = require('react');
var Break = React.createClass({
	render: function() {
		return (
			<div className="Break">
				Break
				time: {this.props.time}
			</div>
		);
	}
});

module.exports = Break;
