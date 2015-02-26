var myApp = angular.module('myApp', ['ngRoute', 'appControllers']);

var appControllers = angular.module('appControllers',[]);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/login', {
			templateUrl: 'views/login.html'
		}).
		when('/team', {
			templateUrl: 'views/team.html'
		}).
		when('/about', {
			templateUrl: 'views/about.html'
		}).
		when('/register', {
			templateUrl: 'views/register.html'
		}).
		otherwise({
			redirectTo: '/login'
		});
}]);