angular.module('COMUTIL', ['ngRoute', 'ctrl.root', 'app.filter'])

.run(function($rootScope){
	$rootScope.param = {
		menu: {
			title: {
				name: "COMUTIL", link: "#"
			},
			left: [{
				name: "Link 1", link: "#"
			},{
				name: "Link 2", link: "#"
			},{
				name: "Dropdown", link: "#",
				sublinks: [{
					name: "Link 3", link: "#"
				},{
					name: "Link 4", link: "#"
				}]
			}],
			right: [{
				name: "Link 5", link: "#"
			},{
				name: "Dropdown", link: "#",
				sublinks: [{
					name: "Link 6", link: "#"
				},{
					name: "Link 7", link: "#"
				}]
			}]
		}
	};

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
