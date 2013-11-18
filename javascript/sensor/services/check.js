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
		return Modernizr.vibration;
	}

	function webAudioAvailable(){
		return Modernizr.webaudio;
	}

	function webSpeechAvailable(){
		return window.webkitSpeechRecognition != null || window.SpeechRecognition != null;
	}

	return{
		orientationAvailable : orientationAvailable,
		deviceMotionAvailable : deviceMotionAvailable,
		userMediaAvailable : userMediaAvailable,
		vibrationAvailable : vibrationAvailable,
		webAudioAvailable : webAudioAvailable,
		webSpeechAvailable : webSpeechAvailable
		
	};
}]);