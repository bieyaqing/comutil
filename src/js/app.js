angular.module('COMUTIL', ['ngRoute', 'ctrl.root'])

.run(function(){
	UTIL.viatickConsole();
})

.config(function($routeProvider){
	$routeProvider
	.when('/splash', {
		templateUrl: 'templates/splash.html',
	    controller: 'SplashCtrl'
	})
	.otherwise({
		redirectTo: '/splash'
	});
});
