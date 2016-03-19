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
			<div className="flex-container">
			    <div className="row">
			        <div className="flex-item">
			            <div className="logo">
			                Teamodorro
			            </div>
			        </div>
			        <div className="flex-item no-padding-inputs">
			            <input 
			            	type="text" 
			            	className="input" 
			            	placeholder="Type your url">
			            </input>
			        </div>
			        <div className="flex-item no-padding-inputs">
			            <input 
			            	type="number" 
			            	min="1" 
			            	className="input" 
			            	placeholder="Work duration (minutes)">
			            </input>
			        </div>
			        <div className="flex-item no-padding-inputs">
			            <input 
			            	type="number" 
			            	min="1" 
			            	className="input" 
			            	placeholder="Break duration (minutes)">
			            </input>
			        </div>
			        <button className="button">create session</button>
			    </div>
			</div>
		);
	}
});

module.exports = NewSession;
