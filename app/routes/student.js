
module.exports = function(app){
	var studentController = app.controllers.student;


	app.route("/students")
	.get(studentController.findAllStudents) //to list all datas 
	.post(studentController.saveStudent) //to save data student
	;

	app.route("/students/:id")
	.get(studentController.findOneStudent)
	.delete(studentController.removeStudent)
	;
	
}
