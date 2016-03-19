var React = require('react');

var Work = React.createClass({
	render: function() {
		return (
			<div>
				<div className="flex-item">
					<div className="circle work">
						{this.props.time}
					</div>
				</div>
				<div className="flex-item sentence">Focus on your task!</div>
			</div>
		);
	}
});

module.exports = Work;
