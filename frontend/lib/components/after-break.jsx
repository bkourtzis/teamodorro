var React = require('react');
var Helper = require('../helpers/helper.js');

var AfterBreak = React.createClass({
	to_work: function(){
		// id from params, not hardcode
		Helper.updateSession('1ffyihxf1v', 'work');
	},
	render: function() {
		return (
			<div>
				<div onClick={this.to_work} className="flex-item">
					<div className="circle after_break">
						work!
					</div>
				</div>
				<div className="flex-item sentence">Ready to work?</div>
			</div>
		);
	}
});

module.exports = AfterBreak;
