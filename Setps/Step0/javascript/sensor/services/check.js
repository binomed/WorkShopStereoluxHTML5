sensor.factory('CheckFactory',['$rootScope', '$http',function($rootScope, $http){

	/*****************************
	******************************
	* Apis exposed
	******************************
	******************************
	*/

	function orientationAvailable(){
		return window.DeviceOrientationEvent != null;
	}

	function deviceMotionAvailable(){
		return window.DeviceMotionEvent != null;
	}

	function userMediaAvailable(){
		return Modernizr.getusermedia;
	}

	function vibrationAvailable(){
		return Modernizr.vibration || navigator.vibrate;
	}

	function proximityAvailable(){
		return window.DeviceProximityEvent;
	}

	function lightAvailable(){
		return window.DeviceLightEvent;
	}


	function webSpeechAvailable(){
		return window.webkitSpeechRecognition != null || window.SpeechRecognition != null;
	}

	return{
		orientationAvailable : orientationAvailable,
		deviceMotionAvailable : deviceMotionAvailable,
		userMediaAvailable : userMediaAvailable,
		vibrationAvailable : vibrationAvailable,
		proximityAvailable : proximityAvailable,
		lightAvailable : lightAvailable,
		webSpeechAvailable : webSpeechAvailable
		
	};
}]);