angular.module("rschool").config(["$routeProvider", "$httpProvider", function($routeProvider, $httpProvider){

  $httpProvider.interceptors.push("UserInterceptor");

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
		controller: "userCtrl",
		templateUrl: "../../views/login.html"
	})
	.when("/logout", {
		controller: "userCtrl",
		templateUrl: "../../views/login.html"
	})
	.when("/class", {
		controller: "classCtrl",
		templateUrl: "../../views/class-create.html"
	})
	.when("/user-create", {
    controller: "userCtrl",
		templateUrl: "../../views/user-create.html"
	})
	.when("/student-profile/:studentId", {
    controller: "studentCtrl",
		templateUrl: "../../views/student-profile.html"
	});

	$routeProvider.otherwise("/login");
}]);
