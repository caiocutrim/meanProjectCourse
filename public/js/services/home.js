angular.module("rschool").factory("Home",["$resource", function($resource){
	return $resource("/home");
}]);
