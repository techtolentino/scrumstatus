myApp.controller('DashboardController', 
	function($scope, $firebase, $routeParams, $location, FIREBASE_URL){

	var whichMember = $routeParams.uId;
	var ref = new Firebase(FIREBASE_URL + 'members/' + whichMember);
	var member = $firebase(ref);

	$scope.member = member.$asObject();

	$scope.dashUpdate = function() {
		var updateObj = $firebase(ref);

		var updateData = {
			date: Firebase.ServerValue.TIMESTAMP,
      color : $scope.color,
      projectDescription : $scope.projectDescription
		};

		updateObj.$update(updateData).then(function(){
			// send to Team page
			alert('Thanks ' + $scope.member.firstname + ", your changes have been saved!");
			$location.path('/team');
		});
	}

});