sensor.controller('ProximityCtrl', 
	['$rootScope', '$scope', '$http', '$location','CheckFactory','WebSocketFactory','ModelFactory',
	function($rootScope, $scope, $http, $location, check, socket, model) {

		$scope.available = check.proximityAvailable() ||  $location.search().mobile;
		
		socket.changeRoute("/proximity");
		
}]);