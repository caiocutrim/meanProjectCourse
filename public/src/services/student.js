angular.module("rschool")
.factory("Student",["$resource", function($resource){
	return $resource("/students/:id");
}]);

