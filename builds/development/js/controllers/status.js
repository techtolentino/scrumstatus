myApp.controller('StatusController', function(
  $scope, $rootScope, $firebaseSimpleLogin,
    $location, Authentication, $firebase, FIREBASE_URL) {

	$scope.logout = function() {
		Authentication.logout();
		$location.path('/login');
	} //logout

  $rootScope.$on('$firebaseSimpleLogin:login', function(e, authUser){
    $scope.userEmail = authUser.email;
  }); // $firebaseSimpleLogin:login

  $rootScope.$on('$firebaseSimpleLogin:logout', function(e, authUser){
    $scope.userEmail = null;
  }); // $firebaseSimpleLogin:logout

}); //StatusController