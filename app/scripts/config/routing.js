'use strict';

angular.module("appConfig", [])

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
				.when('/aut/login', {
					templateUrl: 'views/login.html',
					controller: 'LoginController',
					controllerAs: 'login'
				})

				// .when('/about', {
				// 	templateUrl: 'views/about.html',
				// 	controller: 'AboutCtrl',
				// 	controllerAs: 'about'
				// })

				.otherwise({
					redirectTo: '/'
				});

	}])
