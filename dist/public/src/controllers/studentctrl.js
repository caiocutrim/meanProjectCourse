angular.module("rschool")
.controller("studentCtrl", ["Student", "$scope","$routeParams", function(Student, $scope, $routeParams){

	if($routeParams.studentId){
		 Student.get({id:$routeParams.studentId}
		 , function(data){
			   $scope.student = data;
		 }
		 , function(err){
				 $scope.message = {
           text: "Não foi possível obter o contato"
		     }
		 });
	}
	else{
		$scope.student = new Student();
	}

	function getAllStudents (){
		Student.query(function(data){ 
			$scope.students = data;
		}, function(err){
			console.log(err);
		});
	}
  
  getAllStudents();

	$scope.save = function(){
		// from ng-model
		$scope.student.$save()
		 .then(function(){
				$scope.message = { text: "Salvo com sucesso" };
				$scope.student = new Student();
		})
		 .catch(function(err){
			  console.log(err);
				$scope.mesage = { text: "Ocorreu um erro, desculpe"}
	 	});

	};

	$scope.remove = function(student){
		Student.delete({id: student._id }
		, getAllStudents
	  , function(err){
	    $scope.message  = {
				text: "Não foi possível remover o contato"
			}
			console.log(err);
		});
	}
}]);
