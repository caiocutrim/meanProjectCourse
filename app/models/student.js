var mongoose = require("mongoose");

module.exports = function(){

	var studentSchema = mongoose.Schema(
		{  name: 
			 {  type: String
       ,  required: true
		   }

		,  surname : 
	     {  type: String
		   ,  required: true
		   }	

		,  address : 
	     {  street: String
		   ,  district: String 
		   ,  city: String
		   ,  state: String
		   ,  telephone: String
			 }
	  });

	return mongoose.model("Student", studentSchema);

};
