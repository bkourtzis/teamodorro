var React = require('react');

var Work = React.createClass({
	render: function() {
		return (
			<div className="Work">
				Work
				time {this.props.time}
			</div>
		);
	}
});

module.exports = Work;
