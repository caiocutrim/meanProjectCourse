module.exports = function(app){
	var studentController = app.controllers.student;
  var interceptor = app.services.interceptor;
	var ensureAuthorized = interceptor.ensureAuthorized;
	app.route("/students")
	.get(ensureAuthorized, studentController.findAllStudents) //to list all datas 
	.post(ensureAuthorized, studentController.saveStudent) //to save data student
	;

	app.route("/students/:id")
	.get(ensureAuthorized, studentController.findOneStudent)
	.delete(ensureAuthorized, studentController.removeStudent)
	;
	
}
