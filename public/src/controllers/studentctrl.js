(function(){
	"use strict";

	angular.module("rschool.students")
	  .controller("StudentCtrl", StudentCtrl);	

  StudentCtrl.$inject = ["Student","$routeParams", "$scope"];
	function StudentCtrl(Student,  $routeParams, $scope){
		var vm = this;

		vm.save = save;
		vm.remove = remove;

		if($routeParams.studentId){
			 Student.get({id:$routeParams.studentId}
			 , function(data){
					 vm.student = data;
			 }
			 , function(err){
					 vm.message = {
						 text: "Não foi possível obter o contato"
					 }
			 });
		}
		else{
			vm.student = new Student();
		}

		function getAllStudents (){
			Student.query(function(data){ 
				vm.students = data;
			}, function(err){
				console.log(err);
			});
		}
		
		getAllStudents();

		function save(){
			// from ng-model
			vm.student.$save()
			 .then(function(){
					vm.message = { text: "Salvo com sucesso" };
					vm.student = new Student();
			})
			 .catch(function(err){
					console.log(err);
					vm.mesage = { text: "Ocorreu um erro, desculpe"}
			});

		};

		function remove(student){
			Student.delete({id: student._id }
			, getAllStudents
			, function(err){
				vm.message  = {
					text: "Não foi possível remover o contato"
				}
				console.log(err);
			});
		}
	};
})();
