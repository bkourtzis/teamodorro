var React = require('react');
var Helper = require('../helpers/helper.js');

var AfterWork = React.createClass({
	to_break: function(){
		this.props.onChangeMode("break");
	},
	render: function() {
		return (
			<div>
				<div onClick={this.to_break} className="flex-item">
					<div className="circle after_work">
						break!
					</div>
				</div>
				<div className="flex-item sentence">
					<span>What now?</span>
					<div className="slug">
							{'teamodorro.io/'+this.props.slug}
						</div>
				</div>
			</div>
		);
	}
});

module.exports = AfterWork;
