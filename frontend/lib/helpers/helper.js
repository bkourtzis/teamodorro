var qwest = require('qwest');
var EventEmitter = require('event-emitter');

var Helper = new function() {

    var ee = new EventEmitter();
    this.on = ee.on.bind(ee);

    // var url = 'http://vps202941.ovh.net:8081/api/v1/resources/session';
    var url = 'http://arkadiusz-ThinkPad-T450s:8081/api/v1/resources/session';

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
            	console.log('getAllSessions')
                return response;
            });
    }


    this.getSession = function(id) {
    	var hardcode_id = "earbp548b8"
    	var id = hardcode_id;
        return qwest.get(url + "/" + id)
            .then(function(xhr, response) {
            	console.log('getSession')
                return response;
            })
    }
    
    // add, update
    this.addSession = function(data, id) {
        // if (id != null) url += "/" + id;

        // return qwest.map(method, url, fd, {
        // 	dataType: "formdata"
        // })
        return qwest.post(url, data)
    	.then(function(xhr, response){
    		console.log('session added')
    	})
    	.catch(function(xhr, response){
    		console.log('error in addSession')
    	})
    }

    this.updateSession = function(data,id){
    	return this.addSession(data, id);
    }
};

module.exports = Helper;
