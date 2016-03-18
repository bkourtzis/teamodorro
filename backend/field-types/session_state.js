var Sealious = require("sealious");

var allowed_values = ["break", "running"];

var session_state = new Sealious.FieldType({
	name: "session_state",
	is_proper_value: function(context, params, value_in_code){
		if(allowed_values.indexOf(value_in_code) === -1){
			return Promise.reject(`Only these values are accepted: ${allowed_values.map((e)=>'"'+e+'"').join(", ")}.`);
		}else{
			return Promise.resolve();
		}
	}
})
