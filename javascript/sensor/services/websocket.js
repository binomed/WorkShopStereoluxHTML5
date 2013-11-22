sensor.factory('WebSocketFactory',['$rootScope', '$http', '$location', 'ModelFactory' ,
	function($rootScope, $http, $location, model){

	var socket = io.connect("http://"+location.hostname+":8080");

	socket.on('message', function (data) {
	    console.log(data);
	    if (data.type === 'changeRoute' && !model.mobile && data.source){
	    	$rootScope.$apply(function(){
	    		$rootScope.$broadcast('changeRouteEvt');
	    		$location.path(data.data);
	    	});
	    }else{
	    	$rootScope.$broadcast('SocketType'+data.type, data.data);
	    }
	});

	function sendData(type, data){
		socket.emit('message',{
			'type' : type,
			'data' : data, 
			'source' : model.mobile
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

	function sendDeviceMotion(xAcceleration){
		sendData('DevieMotionEvent', xAcceleration);
	}

	function changeRoute(newRoute){
		$rootScope.$broadcast('changeRouteEvt');
		socket.emit('message',{
			'type' : 'changeRoute',
			'data' : newRoute
		});
	}

	return{
		sendOrientation : sendOrientation,
		sendDeviceMotion : sendDeviceMotion,
		changeRoute : changeRoute
		
	};
}]);