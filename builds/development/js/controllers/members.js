myApp.controller('MembersController', function($scope, $firebase, $location, ngDialog){

	var ref = new Firebase('https://scrumcheck.firebaseio.com/members');
	var members = $firebase(ref);

	$scope.members = members.$asObject();

	$scope.addMember = function(){
		members.$push({
			date: Firebase.ServerValue.TIMESTAMP,
			firstname: $scope.firstname,
      image: "http://telehealth.org/wp-content/images/user-placeholder.jpg",
      upcoming: "PTO on Thursday",
      status: {
        color:  "plain",
        contact: {
          email: "enter@youremail.com",
          yahoo: "yahooIM"
        },
        projects: {
          projectone: "project one",
          projecttwo: "project two",
          projectthree: "project three",
          projectfour: "project four",
          projectfive: "project five",
          projectsix: "project six",
          projectseven: "project seven",
          projecteight: "project eight",
          projectnine: "project nine",
          projectten: "project ten"
        }
      }
		}).then(function(){
        $location.path('/team');
    })
	}// end addMember

  $scope.viewStatus = function(){
    ngDialog.open({ template: 'views/popupTmpl.html' });
  }

  $scope.editStatus = function(){
    
  }

});