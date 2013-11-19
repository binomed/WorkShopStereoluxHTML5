sensor.controller('VibrationCtrl', 
	['$rootScope', '$scope', '$http','CheckFactory' ,
	function($rootScope, $scope, $http, check) {

		$scope.available = check.vibrationAvailable();


}]);