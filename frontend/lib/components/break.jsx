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
				<div className="flex-item sentence">
					<span>Just relax...</span>
					<div className="slug">
						{'teamodorro.io/'+this.props.slug}
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Break;
