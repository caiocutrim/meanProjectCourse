"use strict";
var mongoose = require("mongoose");
module.exports = function(){
	var Schema = mongoose.Schema;
	var teachersSchema = new Schema({
		name: {
			type: String,
			required: true
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

	return mongoose.model('Teachers',  teachersSchema);
}
