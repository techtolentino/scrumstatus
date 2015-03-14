myApp.controller('DashboardController', 
	function($scope, $firebase, $rootScope, Authentication, $routeParams, $location, FIREBASE_URL){

	var whichMember = $routeParams.uId;
	var ref = new Firebase(FIREBASE_URL + 'users/'  + whichMember);
	var member = $firebase(ref);

	$scope.member = member.$asObject();

	var currentUser = $rootScope.currentUser;

	$scope.isCurrentUser = function() {
	  return $rootScope.currentUser.$id == member.id;
	};

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

	$scope.upcomingChange = function() {
		var updateObj = $firebase(ref);

		var updateUpcoming = {
			date: Firebase.ServerValue.TIMESTAMP,
      upcoming : $scope.upcoming
		};

		updateObj.$update(updateUpcoming);
	}

});