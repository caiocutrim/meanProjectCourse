angular.module("Components", ["ngStorage"])
.controller("logoutCtrl", function($localStorage, $scope, $location, UserStorage){
		$scope.logout = function(){
			UserStorage.signOut(function(){
				$location.path("/logout");
				console.log("deslogou");
			}, function(e){
				console.log(e);
			});
		}
})
.directive("navbarTop", function(){
  var directive = {};
	directive.restrict = "EA";

	directive.templateUrl = "../components-html/navbartop.html" 
	return directive;
});
