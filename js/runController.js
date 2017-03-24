var app = angular.module('runCalc', []);
app.controller('runCtrl', ['$scope', function runCtrl($scope) {
	$scope.pace = function() {
		var timeVar = $scope.hours*60 + $scope.minutes + $scope.seconds/60;
	};
	$scope.best5l = function() {

	};
	$scope.callories = function() {

	};
}]);