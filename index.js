var Sealious = require("sealious");
var path = require('path')

Sealious.ConfigManager.set_config("datastore_chip_name", "mongo")

Sealious.ConfigManager.set_config(
	"chip.channel.www_server", 
	{
		connections: [
		{
			port: 8081
		}
		]
	}
);

Sealious.init();


var www_server = Sealious.ChipManager.get_chip("channel", "www_server");
www_server.static_route(path.resolve(module.filename, "../frontend/public"), "");

require("./backend/field-types/session_state.js");
require("./backend/field-types/unique_among.js");
require("./backend/resource-types/session.js");

Sealious.start();
