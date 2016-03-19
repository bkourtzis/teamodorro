var React = require('react');
var Break = React.createClass({
	render: function() {
		return (
			<div>
				<div className="flex-item">
					<div className="circle break">
						{this.props.time}
					</div>
				</div>
				<div className="flex-item sentence">Just relax...</div>
			</div>
		);
	}
});

module.exports = Break;
