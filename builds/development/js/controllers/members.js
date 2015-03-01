myApp.controller('MembersController', function($scope, $firebase, $location){

	var ref = new Firebase('https://scrumcheck.firebaseio.com/members');
	var members = $firebase(ref);

	$scope.members = members.$asObject();

	$scope.addMember = function(){
		members.$push({
			date: Firebase.ServerValue.TIMESTAMP,
			firstname: $scope.firstname,
			lastname: "",
      project: "sample project description",
      image: "http://telehealth.org/wp-content/images/user-placeholder.jpg",
      upcoming: "PTO on Thursday",
      status: {
        color:  "plain",
        contact: {
          email: "test@email.com",
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
	}
});