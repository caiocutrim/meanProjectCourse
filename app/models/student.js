var mongoose = require("mongoose");

module.exports = function(){

	var studentSchema = mongoose.Schema({
		name: String
	});


	return mongoose.model("Student", studentSchema);
};
