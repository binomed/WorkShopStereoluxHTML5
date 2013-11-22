sensor.controller('LightCtrl', 
	['$rootScope', '$scope', '$http','CheckFactory','WebSocketFactory','ModelFactory',
	function($rootScope, $scope, $http, check, socket, model) {

		$scope.available = check.lightAvailable();
		
		socket.changeRoute("/light");
		
}]);