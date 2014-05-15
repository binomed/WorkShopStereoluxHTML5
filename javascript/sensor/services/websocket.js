sensor.factory('WebSocketFactory',['$rootScope', '$http', '$location', 'ModelFactory' ,
	function($rootScope, $http, $location, model){

	var socket = io.connect("http://"+location.hostname+":8080");

	socket.on('message', function (data) {
	    console.log(data);
	    if (data.type === 'changeRoute' && !model.mobile && data.source){
	    	$rootScope.$apply(function(){
	    		$rootScope.$broadcast('changeRouteEvt');
	    		$location.path(data.data).search({mobile:true});
	    	});
	    }else if (data.type === 'morseText'){
	    	$rootScope.$broadcast('morseEvt', data.data);
	    }else if (data.type === 'WebSpeechEvent'){
	    	$rootScope.$broadcast('gameEvent', data.data);
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

	function sendLight(light){
		sendData('LightEvent', light);
	}

	function sendProximity(proximity){
		sendData('ProximityEvent', proximity);
	}

	function sendMorseText(moreseText){
		sendData('morseText', moreseText);
	}

	function sendWebSpeech(direction){
		sendData('WebSpeechEvent', direction);
	}

	function changeRoute(newRoute){
		$rootScope.$broadcast('changeRouteEvt');
		sendData('changeRoute', newRoute);		
	}

	return{
		sendOrientation : sendOrientation,
		sendDeviceMotion : sendDeviceMotion,
		sendProximity : sendProximity,
		sendLight : sendLight,
		sendMorseText : sendMorseText,
		sendWebSpeech : sendWebSpeech,
		changeRoute : changeRoute
		
	};
}]);