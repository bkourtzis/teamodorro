var Sealious = require("sealious");
var Promise = require("bluebird");

var allowed_values = ["break", "work"];

var session_state = new Sealious.FieldType({
	name: "session_state",
	is_proper_value: function(accept, reject, context, params, value_in_code){
		if(allowed_values.indexOf(value_in_code) === -1){
			reject(`Only these values are accepted: ${allowed_values.map((e)=>'"'+e+'"').join(", ")}. GOT: ${value_in_code}`);
		}else{
			accept();
		}
	}
})
