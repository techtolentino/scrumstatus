myApp.controller('MembersController', function($scope, $routeParams, $firebase, $location, FIREBASE_URL){

	var whichTeam = $routeParams.uId;
	var whichMember = $routeParams.mId;
	var ref = new Firebase(FIREBASE_URL + 'users/');
	var members = $firebase(ref);

	$scope.members = members.$asObject();


});