myApp.controller('MembersController', function($scope, $firebase){

	var ref = new Firebase('https://scrumcheck.firebaseio.com/members');
	var members = $firebase(ref);

	$scope.members = members.$asObject();

});