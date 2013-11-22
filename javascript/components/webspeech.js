components.directive('webSpeech', ['$rootScope', function ($rootScope) {
   var directiveDefinitionObject = {
    templateUrl: 'partials/components/webspeech.html',
    replace: true,
    restrict: 'E',
    scope: {        
    },    
    link: function postLink($scope, iElement, iAttrs) { 

      
      var UP = 'haut';
      var DOWN = 'bas';
      var LEFT = 'gauche';
      var RIGHT = 'droite';
      //http://stiltsoft.com/blog/2013/05/google-chrome-how-to-use-the-web-speech-api/

      function transformTranscript(transcript){
        var arrayInstructions = transcript.split(' ');
        if (arrayInstructions){
          for (var i =0; i < arrayInstructions.length; i++){
            var instruction = arrayInstructions[i];
            if (instruction != UP && instruction != DOWN && instruction != LEFT && instruction != RIGHT){
              return;
            }
            console.log("send game event : "+instruction);
            $rootScope.$broadcast('gameEvent', instruction);
          }
        }
      }

      $rootScope.$on('routeChange', function(){
        if (recognition){
          recognition.stop();
        }
      });

      /*
      * Your Code ! 
      */

      var recognition = new webkitSpeechRecognition();
      recognition.lang = 'fr-FR';
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.start();

      recognition.onresult = function(event){
        for (var i = event.resultIndex; i < event.results.length; i++){
          if (event.results[i].isFinal){
            transformTranscript(event.results[i][0].transcript);
          }
        }
      }


    }
  };
  return directiveDefinitionObject;
}]);

 