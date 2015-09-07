angular.module("rschool")
.controller("userCtrl",  function(UserStorage, $localStorage, $location, $scope, $window){

	$scope.loginUser = function(){
		var data = $scope.userLogin;
    UserStorage.save(data, "/login"
			, function(res){
					if(res.type == false){
						console.log(res);
						res.token;
					}else {
						console.log(res)
						$localStorage.token = res.token;
						$window.location = "/";
					}
	   }, function(res){
          $scope.message = {
						type: "alert-danger",
						text: res.statusText + " - usuário ou senha inválida, por favor digite corretamente.",
						status: res.status
					}

					$scope.userLogin = "";
		 });
	};
	$scope.saveUser = function(){
		var data = $scope.user;
		UserStorage.save(data, "/users"
			, function(res){
					console.log(res);
					$scope.message = {
						type: "alert-success",
						status: res.status,
						text: "Usuário salvo :), basta fazer o seu login." 
					};
					$scope.user = "";
		 }, function(res){
					console.log(res);
					$scope.message = {
						type: "alert-danger",
						status: res.status,
						text: res.statusText
					};

					$scope.user = "";
		});
	};

	$scope.token = $localStorage.token;

});
