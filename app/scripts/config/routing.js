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
				.when('/users/login', {
					templateUrl: 'views/login.html',
					controller: 'LoginController',
					controllerAs: 'login'
				})
				.when('/users/signup', {
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
