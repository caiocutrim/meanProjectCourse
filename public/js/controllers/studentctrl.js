angular.module("rschool")
.controller("studentCtrl", ["Student", "$scope", function(Student, $scope){
	Student.query(function(data){ 
		$scope.students = data;
	}, function(err){
		console.log(err);
	});
}]);
