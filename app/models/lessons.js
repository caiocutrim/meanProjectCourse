var mongoose = require("mongoose");

module.exports = function(){
	var lessonsSchema = mongoose.Schema({
		name:{
			type:String,
			required: true
		},
		content:{
			type:String,
			required:true
		}
	});


	return mongoose.model("Classes", lessonsSchema);
}
