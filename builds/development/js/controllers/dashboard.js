myApp.controller('DashboardController', 
	function($scope, $firebase, $routeParams, $location, FIREBASE_URL){

	var whichTeam = $routeParams.uId;
	var whichMember = $routeParams.mId;
	var ref = new Firebase(FIREBASE_URL + 'users/' + '/' + whichTeam + '/' + whichMember);
	var member = $firebase(ref);

	$scope.member = member.$asObject();

	$scope.colorChange = function() {
		var updateObj = $firebase(ref);

		var updateColor = {
			date: Firebase.ServerValue.TIMESTAMP,
      color : $scope.color
    };

		updateObj.$update(updateColor);
	}

	$scope.dashProjectUpdate = function() {
		var updateObj = $firebase(ref);

		var updateProject = {
			date: Firebase.ServerValue.TIMESTAMP,
      projectDescription : $scope.projectDescription
		};

		updateObj.$update(updateProject);
	}

});