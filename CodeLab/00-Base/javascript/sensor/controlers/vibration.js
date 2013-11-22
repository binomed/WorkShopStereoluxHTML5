sensor.controller('VibrationCtrl', 
	['$rootScope', '$scope', '$http', '$location','CheckFactory' ,'WebSocketFactory','ModelFactory',
	function($rootScope, $scope, $http, $location, check, socket, model) {

		$scope.available = check.vibrationAvailable() ||  $location.search().mobile;

		socket.changeRoute("/vibration");
		
}]);