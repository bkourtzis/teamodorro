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
				<div className="flex-item sentence">
					<span>Focus on your task!</span>
					<div className="slug">
						{'teamodorro.io/'+this.props.slug}
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Work;
