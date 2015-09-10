var mongoose = require("mongoose");
module.exports = function(){
	var teachersSchema = mongoose.Schema({
		name: {
			type: String,
			required: true,
		},
		address:{
			street:{
				type: String
			},
			district:{
				type: String
			},
			state:{
				type: String
			},
			telephone:{
				type: String
			},
			email:{
				type: String
			}
		}
	});

	return mongoose.model('Teachers', teachersSchema);
}
