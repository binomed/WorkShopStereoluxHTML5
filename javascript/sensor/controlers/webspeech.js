sensor.controller('WebSpeechCtrl', 
	['$rootScope', '$scope', '$http','CheckFactory','WebSocketFactory','ModelFactory',
	function($rootScope, $scope, $http, check, socket, model) {

		$scope.available = check.webSpeechAvailable();


		socket.changeRoute("/webspeech");
		
}]);