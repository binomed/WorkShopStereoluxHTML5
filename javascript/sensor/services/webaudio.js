sensor.factory('WebAudioFactory',['$rootScope', '$http',function($rootScope, $http){

	var context = null;
	try{
		window.AudioContext = window.AudioContext || window.webkitAudioContext;
		context = new AudioContext();
	}catch(e){
		console.log("No WebAPI dectect");
	}

	var safeLockBuffer = null;

	function loadSound(url, bufferToUse){
		var request = new XMLHttpRequest();
		request.open('GET', url, true);
		request.responseType = 'arraybuffer';

		// Decode asynchronously
		request.onload = function() {
			context.decodeAudioData(request.response, function(buffer) {
			  bufferToUse = buffer;
			}, onError);
		}
		request.send();
	}

	function loadSafeLockSound(){
		loadSound("http://"+location.hostname+":8080/assets/sounds/lock-open.mp3");
	}

	function playSound(buffer){
		var source = context.createBufferSource(); // creates a sound source
		source.buffer = buffer;                    // tell the source which sound to play
		source.connect(context.destination);       // connect the source to the context's destination (the speakers)
		source.start(0);                           // play the source now
	}


	/*****************************
	******************************
	* Apis exposed
	******************************
	******************************
	*/
	
	function playSafeLock(){
		playSound(safeLockBuffer);
	}

	return{
		playSafeLock : playSafeLock
		
	};
}]);