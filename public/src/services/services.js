angular.module("rschool")
.factory("Student",["$resource", function($resource){
	return $resource("/students/:id");
}])
.factory("UserInterceptor", function($location, $q, $localStorage){
	return {
	"request": function(config){
		config.headers = config.headers || {};
		 if($localStorage.token){
				config.headers.authorization = $localStorage.token;
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
})
.factory("User",["$resource", function($resource){
	return $resource("/users/:id");
}])
.factory("UserStorage",["$window","$resource", "$localStorage", function($window, $resource, $localStorage){
	function changeUser(user){
		angular.extend(currentUser, user)
	}

	function urlBase64Decode(str){
		var output = str.replace("-", "+").replace("_", "/");
		switch(output.length % 4){
			case 0:
			  break;
			case 2:
				output += "==";
			  break;
			case 3:
				output += "=";
				break;
			default:
				throw "Invalid string base64"

		}

		return $window.atob(output);
	}
	
	function getUserFromToken(){
		var token = $localStorage.token;
		var user = {};
		if(typeof token !== "undefined"){
			var encoded = token.split(".")[1]
			user = JSON.parse(urlBase64Decode(encoded));
		}

		return user;
	}

	var currentUser = getUserFromToken();

  return {
		save : function(data, url, success, error){
		  var Resource = $resource(url);	
			var dataToSave = new Resource(data);
			dataToSave.$save().then(success).catch(error);
		},
		decodeToken: urlBase64Decode,
		getUserToken : getUserFromToken,
		signOut: function(success){
			changeUser({});
			delete $localStorage.token;
			success(); } }; }]); 
