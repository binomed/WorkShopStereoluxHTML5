sensor.controller('OrientationCtrl', 
	['$rootScope', '$scope', '$http','CheckFactory','WebSocketFactory','ModelFactory',
	function($rootScope, $scope, $http, check, socket, model) {

		$scope.available = check.orientationAvailable();

		socket.changeRoute("/orientation");
		
}]);