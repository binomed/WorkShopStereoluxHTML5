components.directive('webSpeech', ['$rootScope', 'WebSocketFactory', 
  function ($rootScope, socket) {
   var directiveDefinitionObject = {
    templateUrl: 'partials/components/webspeech.html',
    replace: true,
    restrict: 'E',
    scope: {        
    },    
    link: function postLink($scope, iElement, iAttrs) { 

      // We get the html element
      var mic = iElement.find('#mic');
      // We define the instruction keys
      var UP = 'haut';
      var DOWN = 'bas';
      var LEFT = 'gauche';
      var RIGHT = 'droite';
      
      // We flag the speech recognition
      var start = false;

      // If we click on the mic, we start the recognition
      mic.on('click', function(){
        if (!start){
          startRecognition();          
        }else{
          stopRecognition();
        }
      });

      // We have to manage an approximative vocabulary according to each person in order to match the best interpretation
      function checkVocabulary(text){
        text = text.toLowerCase();
        if (text === 'gauche'
          || text === 'google'
          || text === 'bouche'          
          || text === 'gouge'          
          || text === 'bosh'          
          || text === 'golf'          
          || text === 'gôche'          
          ){
          return LEFT;
        }else if (text === 'droite'
          || text === 'droit'
          || text === 'boîte'                             
          ){
          return RIGHT;
        }else if (text === 'haut'
          || text === 'oh'
          || text === 'ou'
          || text === 'cou'
          || text === 'où'
          || text === 'eau'                             
          || text === "l'eau"
          || text === "dessus"
          || text === "déçu"
          ){
          return UP;
        }else if (text === 'bas'
          || text === 'bah'
          || text === 'ba'
          || text === 'ma'
          || text === 'va'
          || text === 'bar'
          || text === 'dessous'
          || text === 'sous'
          || text === 'bisous'
          ){
          return DOWN;
        }else{
          return null;
        }
      }

      // We transform the string recognise into instructions
      function transformTranscript(transcript){
        var arrayInstructions = transcript.split(' ');
        if (arrayInstructions){
          for (var i =0; i < arrayInstructions.length; i++){
            var instruction = checkVocabulary(arrayInstructions[i]);
            if (!instruction){
              console.log("Unknown text : "+arrayInstructions[i]+".");
              continue;
            }
            console.log("send game event : "+instruction);
            $rootScope.$broadcast('gameEvent', instruction);
            socket.sendWebSpeech(instruction);
          }
        }
      }

      // We have to unregister us
      $rootScope.$on('routeChange', function(){
        if (recognition){
          stopRecognition();
        }
      });


      /*
      * Your Code ! 
      */

      // We instanciate the speechRecognition process
      var recognition = new webkitSpeechRecognition();
      recognition.lang = 'fr-FR';
      recognition.continuous = true;
      recognition.interimResults = true;

      // We manage the input datas
      recognition.onresult = function(event){
        for (var i = event.resultIndex; i < event.results.length; i++){
          //console.log('Transcript : '+event.results[i][0].transcript+"| final : "+event.results[i].isFinal);
          if (event.results[i].isFinal){
            console.log('>>>>>Transcript : '+event.results[i][0].transcript);
            transformTranscript(event.results[i][0].transcript);
          }
        }
      };

      // We detect the end of speechRecognition process
      recognition.onend = function(){
        console.log('End of recognition')
        stopRecognition();
      };

      // We detect errors
      recognition.onerror = function(event) {
        if (event.error == 'no-speech') {
          console.log('No Speech');
        }
        if (event.error == 'audio-capture') {
          console.log('No microphone')
        }
        if (event.error == 'not-allowed') {
          console.log('Not Allowed');
        }
      };     

      // We begin the recognition
      function startRecognition(){
        recognition.start();
        mic.addClass('animate');
        start = true;
      }

      // We end the recognition
      function stopRecognition(){
        recognition.stop();
        mic.removeClass('animate');
        start = false;
      }
      

    }
  };
  return directiveDefinitionObject;
}]);

 