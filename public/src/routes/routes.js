angular.module("rschool").config(["$routeProvider", function($routeProvider){
	$routeProvider
	.when("/",{
		 controller: "studentCtrl",
		 templateUrl: "../../views/student-list.html"
	})
	.when("/student-create", {
    controller: "studentCtrl",
		templateUrl: "../../views/student-create.html"
	})
	.when("/student/:studentId", {
    controller: "studentCtrl",
		templateUrl: "../../views/student-create.html"
	})
	.when("/student-profile/:studentId", {
    controller: "studentCtrl",
		templateUrl: "../../views/student-profile.html"
	});
	$routeProvider.otherwise("/");
}]);
