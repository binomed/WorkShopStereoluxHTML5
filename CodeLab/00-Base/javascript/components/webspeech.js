components.directive('webSpeech', ['$rootScope', function ($rootScope) {
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
      // TODO 

      // We manage the input datas
      // TODO 

      // We detect the end of speechRecognition process
      // TODO 

      // We detect errors
      // TODO 

      // We begin the recognition
      function startRecognition(){
        // TODO 
        mic.addClass('animate');
        start = true;
      }

      // We end the recognition
      function stopRecognition(){
        // TODO 
        mic.removeClass('animate');
        start = false;
      }
      

    }
  };
  return directiveDefinitionObject;
}]);

 