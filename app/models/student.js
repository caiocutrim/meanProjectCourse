"use strict";
var mongoose = require("mongoose");
module.exports = function(){
	var Schema = mongoose.Schema;
	var studentSchema = new Schema({  
		name: {  
			 type: String,
			 required: true
		 },
		 surname : {  
			 type: String,
			 required: true
		 },
		 address : {  
			 street: String,
			 district: String,
			 city: String,
			 state: String,
			 telephone: String,
			 email: String
		 }
	});

	return mongoose.model("Student", studentSchema);

};
