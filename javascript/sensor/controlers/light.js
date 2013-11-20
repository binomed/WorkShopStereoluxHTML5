sensor.controller('LightCtrl', 
	['$rootScope', '$scope', '$http','CheckFactory','WebSocketFactory','ModelFactory',
	function($rootScope, $scope, $http, check, socket, model) {

		$scope.available = check.lightAvailable();

		if (model.mobile){
			socket.changeRoute("/light");
		}
}]);