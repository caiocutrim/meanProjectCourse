angular.module("rschool").config(["$routeProvider", function($routeProvider){
	$routeProvider
	.when("/",{
		 controller: "studentCtrl",
		 templateUrl: "../../views/student.html"
	});
	$routeProvider.otherwise("/");
}]);
