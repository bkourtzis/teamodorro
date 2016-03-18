var Sealious = require("sealious");

Sealious.ConfigManager.set_config("datastore_chip_name", "mongo")

Sealious.init();

Sealious.start();
