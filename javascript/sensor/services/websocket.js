sensor.factory('WebSocketFactory',['$rootScope', '$http',function($rootScope, $http){

	var socket = io.connect("http://"+location.hostname+":8080");

	socket.on('message', function (data) {
	    console.log(data);
	    $rootScope.$broadcast('SocketType'+data.type, data.data);
	});


	function sendData(type, data){
		socket.emit('message',{
			'type' : type,
			'data' : data
		});
	}

	/*****************************
	******************************
	* Apis exposed
	******************************
	******************************
	*/

	function sendOrientation(zAlpha){
		sendData('OrientationEvent', zAlpha);
	}

	return{
		sendOrientation : sendOrientation
		
	};
}]);