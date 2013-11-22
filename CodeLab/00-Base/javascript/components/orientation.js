components.directive('orientation',  ['WebSocketFactory', 'WebAudioFactory','$rootScope', function (socket, audio, $rootScope) {
   var directiveDefinitionObject = {
    templateUrl: 'partials/components/orientation.html',
    replace: true,
    restrict: 'E',
    scope: {        
    },    
    link: function postLink($scope, iElement, iAttrs) { 

      // We get the html elements
      var lockDoor = iElement.find('.safe_lock_door');
      var lock = iElement.find('.safe_lock');
      // We get the correct css prefix
      var prefix = Modernizr.prefixed('transform');
        
      // The angle to go for unlocking the door
      var angles = [105,95,115];
      // The count of combinaisons found
      var lockMoves = 0;

      // According to the number of unlock, we just turn the image or we open the door
      function updateRotation(zAlpha){
        if(lockMoves < 3 && angles[lockMoves] === zAlpha){
          lockMoves++;
          audio.playSafeLock();
          if (lockMoves === 3){
            openTheDoor();
          }
        }else{
          lock.css(prefix,'rotateZ('+zAlpha+'deg)');
        }
      }

      // We add the correct class
      function openTheDoor(){
        lockDoor.addClass('open');
      }
    
      // We recieve information from the phone
      $rootScope.$on('SocketTypeOrientationEvent', function(evt, data){
        updateRotation(data);
      });


      // We have to unregister us from the event
      $rootScope.$on('changeRouteEvt', function(){
        unregister();
      });


      /*
      * Your Code ! 
      */

      // The handler of the event
      // TODO 

      function register(){
        // TODO 
      }

      function unregister(){
        // TODO 
      }

      register();
        
    }
  };
  return directiveDefinitionObject;
}]);

 