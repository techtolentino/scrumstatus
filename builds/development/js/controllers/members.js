myApp.controller('MembersController', function($scope, $firebase, $location, FIREBASE_URL){

	var ref = new Firebase(FIREBASE_URL + 'members');
	var members = $firebase(ref);

	$scope.members = members.$asObject();

	$scope.addMember = function(){
		members.$push({
			date: Firebase.ServerValue.TIMESTAMP,
			firstname: $scope.firstname,
      image : "http://telehealth.org/wp-content/images/user-placeholder.jpg",
      color : "plain",
      projectDescription : "Currently working on...",
      email: $scope.email,
      yahoo : "yahooIM",
      upcoming : "PTO / WFH / OOO"
		}).then(function(){
        $location.path('/team');
    })
	}// end addMember

});