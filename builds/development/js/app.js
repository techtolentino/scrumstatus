var myApp = angular.module('myApp', 
	['ngRoute', 'firebase', 'appControllers']);

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
		when('/about', {
			templateUrl: 'views/about.html'
		}).
		when('/register', {
			templateUrl: 'views/register.html',
			controller: 'RegistrationController'
		}).
		otherwise({
			redirectTo: '/login'
		});
}]);