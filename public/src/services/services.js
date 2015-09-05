angular.module("rschool")
.factory("Student",["$resource", function($resource){
	return $resource("/students/:id");
}])
.factory("User",["$resource", function($resource){
	return $resource("/users/:id");
}]);


