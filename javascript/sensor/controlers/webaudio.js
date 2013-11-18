sensor.controller('WebAudioCtrl', 
	['$rootScope', '$scope', '$http','CheckFactory',
	function($rootScope, $scope, $http, check) {

		$scope.available = check.webAudioAvailable();


}]);