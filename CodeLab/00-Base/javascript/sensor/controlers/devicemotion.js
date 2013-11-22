sensor.controller('DeviceMotionCtrl', 
	['$rootScope', '$scope', '$http','CheckFactory', 'WebSocketFactory','ModelFactory',
	function($rootScope, $scope, $http, check, socket, model) {

		$scope.available = check.deviceMotionAvailable();
	
		socket.changeRoute("/devicemotion");
		
}]);