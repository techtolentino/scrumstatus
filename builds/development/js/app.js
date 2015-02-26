var myApp = angular.module('myApp', ['ngRoute', 'appControllers']);

var appControllers = angular.module('appControllers',[]);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/login', {
			templateUrl: 'views/login.html',
			controller: 'RegistrationController'
		}).
		when('/team', {
			templateUrl: 'views/team.html'
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