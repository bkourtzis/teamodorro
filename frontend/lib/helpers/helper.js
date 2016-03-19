var qwest = require('qwest');
var EventEmitter = require('event-emitter');
var merge = require("merge");

var Helper = new function() {

	var ee = new EventEmitter();
	this.on = ee.on.bind(ee);

	function get_default_data(){
		return {
			work_duration: 15*1000,
			break_duration: 5*1000,
			last_changed_timestamp: new Date().getTime(),
			current_state: "work"
		}
	}


	// var url = 'http://vps202941.ovh.net:8081/api/v1/resources/session';
	var url = '/api/v1/resources/session';

	this.request = function(method, url, data) {
		return qwest.map(method, url, data)
			.then(function(xhr, response) {
				// console.log(xhr)
				ee.emit('change');
				return response;
			});
	};

	this.getAllSessions = function() {
		return qwest.get(url)
			.then(function(xhr, response) {
				// console.log('getAllSessions')
				return response;
			});
	}


	this.getSession = function(id) {
		var hardcode_id = "1ffyihxf1v"
		var id = hardcode_id;
		return qwest.get(url + "/" + id)
			.then(function(xhr, response) {
				// console.log('getSession')
				return response;
			})
	}

	this.getSessionByName = function(slug) {
		return qwest.get(url, {filter: {slug: slug}})
		.then(function(xhr, response) {
			console.log("response", response)
			if(response.length !== 0){
				return response[0];
			}else{
				return Promise.reject(new Error("not_found"));
			}
		})
	}


	// add, update
	this.addSession = function(data) {
		data = merge(get_default_data(), data);
		console.log("creating session:", data);
		return qwest.post(url, data)
			.then(function(xhr, response) {
				// console.log('session added 	')
			})
			.catch(function(xhr, response) {
				// console.log('error in addSession')
			})
	}

	this.updateSession = function(id, new_state) {
		var resource = url + '/' + id;

		var data = {};
		data.last_changed_timestamp = this.generateCurrentTimestamp();
		data.current_state = new_state;
		
		return qwest.map('PATCH', resource, data)
	}


	this.generateCurrentTimestamp = function() {
		var current_date = new Date();
		return current_date.getTime();
	}
};

module.exports = Helper;
