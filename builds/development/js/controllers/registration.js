// User Registration Controller
myApp.controller('RegistrationController', function($scope, $location){

	$scope.login = function(){
		$location.path('/team');
	} //login

	$scope.register = function(){
		$location.path('/team');
	} //register

});