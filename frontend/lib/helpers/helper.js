var qwest = require('qwest');
var EventEmitter = require('event-emitter');

var Helper = new function() {

    var ee = new EventEmitter();
    this.on = ee.on.bind(ee);

    this.request = function(method, url, data) {
        return qwest.map(method, url, data)
            .then(function(xhr, response) {
                // console.log(xhr)
                ee.emit('change');
                return response;
            });
    };

    this.getAllSessions = function() {
        return qwest.get('http://vps202941.ovh.net:8080/api/v1/resources/session')
            .then(function(xhr, response) {
                return response;
            });
    }

    this.getSession = function(id) {
        return qwest.get('http://vps202941.ovh.net:8080/api/v1/resources/session/' + id)
            .then(function(xhr, response) {
                return response;
            })
    }
    
    // add, update
    this.addSession = function(data, id) {
        var fd = new FormData();
        var url = 'http://vps202941.ovh.net:8080/api/v1/resources/session/';
        if (id != null) url += "/" + id;

        for (var key in session) fd.append(key, session[key]);

        return qwest.map(method, url, fd, {
        	dataType: "formdata"
        })
    	.then(function(xhr, response){
    		console.log('session added')
    	})
    	.catch(function(xhr, response){
    		console.log('error in addSession')
    	})
    }

    this.updateSession = function(data, id){
    	return this.addSession(data, id);
    }
};

module.exports = Helper;
