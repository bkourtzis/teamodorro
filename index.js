var Sealious = require("sealious");

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


require("./backend/field-types/session_state.js");
require("./backend/resource-types/session.js");

Sealious.start();
