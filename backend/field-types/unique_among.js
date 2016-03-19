var Sealious = require("sealious");

var UniqueAmong = new Sealious.FieldType({
	name: "unique_among",
	extends: "text",
	is_proper_value: function(accept, reject, context, params, value_in_code){
		var filter = {};
		filter[params.field_name] = value_in_code;
		context.run_action(["resources", params.resource_type], "show", {filter: filter})
		.then(function(results){
			if(results.length!==0){
				reject("Name already taken!");
			}else{
				accept();
			}
		})
	}
})
