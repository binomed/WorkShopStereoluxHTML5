sensor.controller('OrientationCtrl', 
	['$rootScope', '$scope', '$http','CheckFactory',
	function($rootScope, $scope, $http, check) {

		$scope.available = check.orientationAvailable();


}]);