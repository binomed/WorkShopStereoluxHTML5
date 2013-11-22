sensor.controller('ProximityCtrl', 
	['$rootScope', '$scope', '$http','CheckFactory','WebSocketFactory','ModelFactory',
	function($rootScope, $scope, $http, check, socket, model) {

		$scope.available = check.proximityAvailable();
		
		socket.changeRoute("/proximity");
		
}]);