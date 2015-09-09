describe("studentCtrl", function(){ 
	var $scope
	  , $http
  ;


	beforeEach(function(){
		module("rschool");
		inject(function($injector, _$httpBackend_){
			$scope = $injector.get("$rootScope").$new();
			$http = _$httpBackend_;
			$http.when("GET", "/students/1")
			.respond({_id:"1"});
			$http.when("GET", "/students")
			.respond([{}]);
		})
	});

		it("should save when the post was made or list when get if the _id to be empty"
		, inject(function($controller){
				$controller("studentCtrl",{
					"$scope": $scope
				});

				$http.flush();
				expect($scope.student._id).toBeUndefined();
	}));

		it("should update a data student when an _id passed as parameter"
		, inject(function($controller){
				$controller("studentCtrl", {
					"$routeParams": { studentId: 1},
					"$scope": $scope,
				});

				$http.flush();
				expect($scope.student._id).toBeDefined();
	}));
});
