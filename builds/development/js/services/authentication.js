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

			logout: function() {
				return simpleLogin.$logout();
			}
		} //myObject

		return myObject;
});