var React = require('react');
var Helper = require('../helpers/helper.js');

var AfterBreak = React.createClass({
	to_work: function(){
		// id from params, not hardcode
		Helper.updateSession('1ffyihxf1v', 'work');
	},
	render: function() {
		return (
			<div className="AfterBreak">
				AfterBreak
				<button onClick={this.to_work}>Go to work</button>
			</div>
		);
	}
});

module.exports = AfterBreak;
