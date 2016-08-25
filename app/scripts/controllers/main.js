'use strict';

/**
 * @ngdoc function
 * @name owwwlyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the owwwlyApp
 */
angular.module('owwwlyApp')
	.controller('MainCtrl',['$scope', function ($scope) {
		this.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
		console.log('test MainCtrl');
		$scope.test = 'test';
	}]);
