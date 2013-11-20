sensor.controller('DeviceMotionCtrl', 
	['$rootScope', '$scope', '$http','CheckFactory', 'WebSocketFactory','ModelFactory',
	function($rootScope, $scope, $http, check, socket, model) {

		$scope.available = check.deviceMotionAvailable();
	
		if (model.mobile){
			socket.changeRoute("/devicemotion");
		}
}]);