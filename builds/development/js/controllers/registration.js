// User Registration Controller
myApp.controller('RegistrationController', function($scope){
	$scope.login = function(){
		alert($scope.user.email);
	}

});