sensor.controller('LightCtrl', 
	['$rootScope', '$scope', '$http', '$location','CheckFactory','WebSocketFactory','ModelFactory',
	function($rootScope, $scope, $http, $location, check, socket, model) {

		$scope.available = check.lightAvailable() ||  $location.search().mobile;
		
		socket.changeRoute("/light");
		
}]);