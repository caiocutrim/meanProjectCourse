module.exports = function(app){

  var controller = {};
	var Student = app.models.student;

	controller.saveStudent = function(req, res){
		var _id = req.body._id;
		console.log(_id);
		if(_id){
			Student.findByIdAndUpdate(_id, req.body).exec()
			.then(
				function(data){
				  res.json(data);
			}
			, function(err){
		      console.log(err);
		      res.status(500).json(err);
			});
		}
    else{
		  Student.create(req.body)
       .then(
			   function(data){
			     res.status(201).json(data);
		   }
       , function(err){
	         res.status(500).json(err);
       });	 
		}
	};


  controller.findOneStudent = function(req, res){
		var _id = req.params.id;
		Student.findById(_id).exec()
		  .then(
				function(data){
				  res.json(data);
			}
			, function(err){
          console.log("RESTFUL ERROR => ", err);
					res.status(404).json(err);
			});

	};
	
	controller.findAllStudents = function(req, res){
		Student.find().exec()
		  .then(
				function(data){
				  res.json(data);
			}
			, function(err){
		      res.status(500).json(err);
			})

	};

	controller.removeStudent = function(req, res){
		var _id = req.params.id;
		Student.remove({"_id": _id}).exec()
		  .then(
				function(data){
				  res.end();
			}
			, function(err){
		      console.log(err);
			});
	};

	return controller;
}
