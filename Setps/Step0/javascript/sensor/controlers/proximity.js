sensor.controller('ProximityCtrl', 
	['$rootScope', '$scope', '$http','CheckFactory',
	function($rootScope, $scope, $http, check) {

		$scope.available = check.proximityAvailable();


}]);