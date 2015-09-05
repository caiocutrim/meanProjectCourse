angular.module("rschool")
.controller("userController",  function($window, $scope, $location, $routeParams, User, $resource){
	var LoginUser = $resource("/login");

  $scope.userLogin = new LoginUser();
	
	if($routeParams.userId){
		User.get({id: $routeParams.userId}
		, function(data){
	      console.log(data);
	      $scope.user = data;
		}
	  , function(err){
	      $scope.message = {
					text: "Não foi possível obter os dados do usuário"
				}
		});
	}
	else{
		//to use on the saveUser
		$scope.user = new User();
	}

	$scope.loginUser = function(){
		$scope.userLogin.$save()
		.then(function(data){
			var token = data.token;
			var base64Url = token.split('.')[1];
			var base64 = base64Url.replace("-", "+").replace("_", "/");
			var dataFormated = JSON.parse($window.atob(base64));
			console.log(dataFormated);
		})
		.catch(function(err){
			console.log(err);
			$scope.message = {
				text: "Ocorreu um erro, desculpe..."
			};
		});

	}

	$scope.saveUser = function(){
		$scope.user.$save()
		.then(function(){
			$scope.message = {
				text: "Feito agora você pode entrar no nosso sistema!"
			};
			// to clear all inputs text-fields
			$scope.user = new User();
		})
		.catch(function(err){
			console.log(err);
			$scope.message = {
				text: "Ocorreu um erro, desculpe..."
			};
		});
	};
});

