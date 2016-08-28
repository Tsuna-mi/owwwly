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
				.when('/about', {
					templateUrl: 'views/about.html',
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
				.when('/access/forgot', {
					templateUrl: 'views/forgot.html',
					controller: 'ForgotController',
					controllerAs: 'forgot'
				})
				.when('/boards', {
					templateUrl: 'views/boards.html',
					controller: 'BoardsController',
					controllerAs: 'boards'
				})
				.when('/create', {
					templateUrl: 'views/create.html',
					controller: 'CreateBoardController',
					controllerAs: 'create'
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
