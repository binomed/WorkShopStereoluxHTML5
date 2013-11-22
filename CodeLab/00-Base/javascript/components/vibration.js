components.directive('vibration', ['$rootScope', 'MorseFactory', 'WebSocketFactory', 'ModelFactory', function ($rootScope, morse, socket, model) {
   var directiveDefinitionObject = {
    templateUrl: 'partials/components/vibration.html',
    replace: true,
    restrict: 'E',
    scope: {        
    },    
    link: function postLink($scope, iElement, iAttrs) { 


      // We get the html element
      var inputMorseText = $('#inputMorseText');
      var morseText = $('#morseText');
      // We define some duration for type of morse event
      var SPACE = 1000;
      var PAUSE = 400;
      var POINT = 200;
      var TRAIT = 600;

      // We manage the keypress => send to phone the instruction
      inputMorseText.keypress(function(event) {
        var key = event.which || event.keyCode;
        if(key === 13) {
          socket.sendMorseText(inputMorseText.val());
          inputMorseText.val("");            
        }
      });

      // We recieve the desktop instruction => we convert it into to morse and we create the associate vibration sequence
      $rootScope.$on('morseEvt', function(evt, data){
        if (model.mobile){
          var chars=morse.encode(data).split("");
          var tempText = "";
          var arrayVibration = [];
          for (a=0; a<chars.length; a++) {
            if (chars[a]!=" ") {
                tempText+=" "+chars[a];              
                arrayVibration.push(chars[a] === '.' ? POINT : TRAIT);
                arrayVibration.push(PAUSE);
            }
            else {
              tempText+="   ";
              arrayVibration.push(SPACE);
            }
          }
          morseText.html(tempText);
          vibrate(arrayVibration);

        }
      });

      // We have to unregister us if a sequence is launch
      $rootScope.$on('changeRouteEvt', function(evt, data){
        unregister();
      });

      /*
      * Your Code ! 
      */

      // We vibrate according to the sequence
      function vibrate(arrayOfVibration){
       // TODO 
      }

      function unregister(){
        // TODO 
      }

        
    }
  };
  return directiveDefinitionObject;
}]);

 