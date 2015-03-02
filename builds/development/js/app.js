var myApp = angular.module('myApp', 
	['ngRoute', 'firebase', 'appControllers', 'ngDialog'])
.constant('FIREBASE_URL', 'https://scrumcheck.firebaseio.com/');

// Dependencies
var appControllers = angular.module('appControllers',['firebase']);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/login', {
			templateUrl: 'views/login.html',
			controller: 'RegistrationController'
		}).
		when('/team', {
			templateUrl: 'views/team.html',
			controller: 'MembersController'
		}).
		when('/views/dashboard/:uId', {
			templateUrl: 'views/dashboard.html'
			controller: 'DashboardController'
		}).
		when('/dashboard', {
			templateUrl: 'views/dashboard.html',
						controller: 'MembersController'
		}).
		when('/register', {
			templateUrl: 'views/register.html',
			controller: 'MembersController'
		}).
		otherwise({
			redirectTo: '/team'
		});
}]);
