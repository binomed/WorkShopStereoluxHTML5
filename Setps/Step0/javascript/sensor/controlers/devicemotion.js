sensor.controller('DeviceMotionCtrl', 
	['$rootScope', '$scope', '$http','CheckFactory',
	function($rootScope, $scope, $http, check) {

		$scope.available = check.deviceMotionAvailable();
	
}]);