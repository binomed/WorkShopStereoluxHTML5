sensor.controller('VibrationCtrl', 
	['$rootScope', '$scope', '$http','CheckFactory' ,'WebSocketFactory','ModelFactory',
	function($rootScope, $scope, $http, check, socket, model) {

		$scope.available = check.vibrationAvailable();

		if (model.mobile){
			socket.changeRoute("/vibration");
		}


}]);