myApp.controller('DashboardController', 
	function($scope, $firebase, $routeParams, $location, FIREBASE_URL){

	var whichMember = $routeParams.uId;
	var ref = new Firebase(FIREBASE_URL + 'members/' + whichMember);
	var members = $firebase(ref);

	$scope.member = members.$asObject();


});