sensor.controller('UserMediaCtrl', 
	['$rootScope', '$scope', '$http','CheckFactory',
	function($rootScope, $scope, $http, check) {

		$scope.available = check.userMediaAvailable();


}]);