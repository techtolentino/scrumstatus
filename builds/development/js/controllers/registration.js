// User Registration Controller
myApp.controller('RegistrationController', 
	function($scope, $firebaseSimpleLogin, $location, FIREBASE_URL, Authentication){

		var ref = new Firebase(FIREBASE_URL);

		var simpleLogin = $firebaseSimpleLogin(ref);

		$scope.login = function() {
			Authentication.login($scope.user)
			.then(function(user) {
				$location.path('/team');
			}, function(error){
				$scope.message = error.toString();
			});
		} //login
});