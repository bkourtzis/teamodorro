var React = require('react');
var ReactRouter = require('react-router')
var Helper = require('../helpers/helper.js')

var NewSession = React.createClass({
	add: function(){
		var new_date = new Date()

		var data = {
			"last_changed_timestamp" : new_date.getTime(),
			"work_duration" : 25*60*1000,
			"break_duration" : 5*60*1000,
			"slug" : "sealcode",
			"current_state" : "work"
		}

		Helper.addSession(data)
	},
	render: function() {
		return (
			<div className="NewSession">
				NewSession
			</div>
		);
	}
});

module.exports = NewSession;
