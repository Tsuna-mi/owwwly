'use strict';

angular.module('owwwlyApp')
	.controller('BoardsController',['$scope', '$http', function($scope, $http){
		$http.get('data/events.json')
		.success(function(data){
			$scope.events = data;

		});
	}]);
