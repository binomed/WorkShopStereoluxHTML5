sensor.controller('WebSpeechCtrl', 
	['$rootScope', '$scope', '$http','CheckFactory',
	function($rootScope, $scope, $http, check) {

		$scope.available = check.webSpeechAvailable();


}]);