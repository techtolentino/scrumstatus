myApp.factory('Authentication', 
	function($firebase, $firebaseSimpleLogin, $location, FIREBASE_URL){
	
		var ref = new Firebase(FIREBASE_URL);
		var simpleLogin = $firebaseSimpleLogin(ref);

		var myObject = {
			login: function(user) {
				return simpleLogin.$login('password', {
					email: user.email,
					password: user.password
				});
			}, //login


			register: function(user) {
				return simpleLogin.$login('password', {
					email: user.email,
					password: user.password
				});
			}, //register

			logout: function() {
				return simpleLogin.$logout();
			}, //logout

			signedIn: function() {
				return simpleLogin.user != null;
			}

			// add the function to the rootScope

			$rootScope.signedIn = function() {
				return myObject.signedIn();
			}



		} //myObject

		return myObject;
});