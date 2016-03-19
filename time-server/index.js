var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 8082, routes: {cors: {origin: ['*']} }});

server.route({
    method: 'GET',
    path: '/time_offset',
    handler: function (request, reply) {
    	var client_timestamp = request.query.client_timestamp;
        reply({offset: new Date().getTime() - client_timestamp});
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Time server running at:', server.info.uri);
});

