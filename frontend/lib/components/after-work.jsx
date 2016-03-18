var React = require('react');
var Helper = require('../helpers/helper.js');

var AfterWork = React.createClass({
	to_break: function(){
		// id from params, not hardcode
		Helper.updateSession('1ffyihxf1v', 'break');
	},
	render: function() {
		return (
			<div className="AfterWork">
				AfterWork
				<button onClick={this.to_break}>Go to break</button>
			</div>
		);
	}
});

module.exports = AfterWork;
