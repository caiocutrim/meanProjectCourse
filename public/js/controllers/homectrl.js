angular.module("rschool").controller("homeCtrl", ["Home", "$scope", function(Home, $scope){
	
	Home.get(function(data){
		$scope.mesage = data;
	},function(err){
	   console.log(err);	
	});
}]);
