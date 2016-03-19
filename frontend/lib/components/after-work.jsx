var React = require('react');
var Helper = require('../helpers/helper.js');

var AfterWork = React.createClass({
	to_break: function(){
		// id from params, not hardcode
		Helper.updateSession('1ffyihxf1v', 'break');
	},
	render: function() {
		return (
			<div>
				<div onClick={this.to_break} className="flex-item">
					<div className="circle after_work">
						break!
					</div>
				</div>
				<div className="flex-item sentence">What now?</div>
			</div>
		);
	}
});

module.exports = AfterWork;
