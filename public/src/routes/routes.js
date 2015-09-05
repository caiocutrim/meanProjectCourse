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
	.when("/login", {
		controller: "userController",
		templateUrl: "../../views/login.html"
	})
	.when("/user-create", {
    controller: "userController",
		templateUrl: "../../views/user-create.html"
	})
	.when("/student-profile/:studentId", {
    controller: "studentCtrl",
		templateUrl: "../../views/student-profile.html"
	});
	$routeProvider.otherwise("/");
}]);
