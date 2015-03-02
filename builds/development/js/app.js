var myApp = angular.module('myApp', 
	['ngRoute', 'firebase', 'appControllers', 'ngDialog']);

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
		when('/popupTmpl', {
			templateUrl: 'views/popupTmpl.html',
			controller: 'MembersController'
		}).
		when('/dashboard', {
			templateUrl: 'views/dashboard.html'
		}).
		when('/register', {
			templateUrl: 'views/register.html',
			controller: 'MembersController'
		}).
		otherwise({
			redirectTo: '/team'
		});
}]);
