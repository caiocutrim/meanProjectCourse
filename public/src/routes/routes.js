angular.module("rschool").config(["$routeProvider", "$httpProvider", function($routeProvider, $httpProvider){

  $httpProvider.interceptors.push(function($q, $location, $localStorage){
			return {
			"request": function(config){
				config.headers = config.headers || {};
				if($localStorage.token){
					config.headers.Authorization = "Portador " + $localStorage.token;
				}

				return config
			},
			"responseError": function(response){
				if(response.status === 401 || response.status === 403){
					 $location.path("/login");
				}

				return $q.reject(response);
			}
		};
	});

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
