components.directive('vibration', ['$rootScope', 'MorseFactory', 'WebSocketFactory', function ($rootScope, morse, socket) {
   var directiveDefinitionObject = {
    templateUrl: 'partials/components/vibration.html',
    replace: true,
    restrict: 'E',
    scope: {        
    },    
    link: function postLink($scope, iElement, iAttrs) { 


      var inputMorseText = $('#inputMorseText');
      var morseText = $('#morseText');
      var SPACE = 500;
      var PAUSE = 200;
      var PONT = 100;
      var TRAIT = 300;

      inputMorseText.keypress(function(event) {
        var key = event.which || event.keyCode;
        if(key === 13) {
          socket.sendMorseText(inputMorseText.val());
          inputMorseText.val("");            
        }
      });

      $rootScope.$on('morseEvt', function(evt, data){
        if (model.mobile){
          var chars=morse.encode(data).split("");
          var tempText = "";
          var arrayVibration = [];
          for (a=0; a<chars.length; a++) {
            if (chars[a]!=" ") {
                tempText+=" "+chars[a];              
                arrayVibration.push(chars[a] === '.' ? PONT : TRAIT);
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


      $rootScope.$on('changeRouteEvt', function(evt, data){
        navigator.vibrate(0);
      });

      /*
      * Your Code ! 
      */

      function vibrate(arrayOfVibration){
        window.navigator.vibrate(arrayOfVibration);
      }

        
    }
  };
  return directiveDefinitionObject;
}]);

 