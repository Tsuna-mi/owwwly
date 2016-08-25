'use strict';

angular.module('appConfig', [])

	.config(['$routeProvider', function( $routeProvider ){

			$routeProvider
				.when('/', {
					templateUrl: 'views/main.html',
					controller: 'MainCtrl',
					controllerAs: 'main'
				})
				.when('/main', {
					templateUrl: 'views/main.html',
					controller: 'MainCtrl',
					controllerAs: 'main'
				})
				.when('/access/login', {
					templateUrl: 'views/login.html',
					controller: 'LoginController',
					controllerAs: 'login'
				})
				.when('/access/signup', {
					templateUrl: 'views/signup.html',
					controller: 'SignupController',
					controllerAs: 'signup'
				})

				// .when('/about', {
				// 	templateUrl: 'views/about.html',
				// 	controller: 'AboutCtrl',
				// 	controllerAs: 'about'
				// })

				.otherwise({
					redirectTo: '/'
				});

	}]);
