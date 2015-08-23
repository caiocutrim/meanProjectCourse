angular.module("rschool").config(["$routeProvider", function($routeProvider){
	$routeProvider
	.when("/",{
		 controller: "homeCtrl",
		 templateUrl: "../../views/home.html"
	});
}]);
