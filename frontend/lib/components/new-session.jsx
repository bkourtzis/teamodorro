var React = require('react');
var ReactRouter = require('react-router')
var Helper = require('../helpers/helper.js')

var NewSession = React.createClass({
	mixins: [ReactRouter.Navigation],
	add: function(){
		var ref_slug = this.refs.slug;
		var slug = ref_slug.value;

		var ref_work_duration = this.refs.work_duration;
		var work_duration = ref_work_duration.value;

		var ref_break_duration = this.refs.break_duration;
		var break_duration = ref_break_duration.value;

		var data = {
			"last_changed_timestamp" : Helper.generateCurrentTimestamp(),
			"work_duration" : work_duration,
			"break_duration" : break_duration,
			"slug" : slug,
			"current_state" : "work"
		}
		Helper.addSession(data)
			.then(function(){
				document.location.hash = "/"+slug;
			})
			.catch(function(){
				document.location.hash = "/"+slug;
			})
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
			            	placeholder="Type your url"
			            	ref="slug">
			            </input>
			        </div>
			        <div className="flex-item no-padding-inputs">
			            <input 
			            	type="number" 
			            	min="1" 
			            	className="input" 
			            	placeholder="Work duration (minutes)"
			            	ref="work_duration">
			            </input>
			        </div>
			        <div className="flex-item no-padding-inputs">
			            <input 
			            	type="number" 
			            	min="1" 
			            	className="input" 
			            	placeholder="Break duration (minutes)"
			            	ref="break_duration">
			            </input>
			        </div>
			        <button onClick={this.add} className="button">create session</button>
			    </div>
			</div>
		);
	}
});

module.exports = NewSession;
