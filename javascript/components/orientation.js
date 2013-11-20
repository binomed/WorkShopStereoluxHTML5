components.directive('orientation',  ['WebSocketFactory', 'WebAudioFactory','$rootScope', function (socket, audio, $rootScope) {
   var directiveDefinitionObject = {
    templateUrl: 'partials/components/orientation.html',
    replace: true,
    restrict: 'E',
    scope: {        
    },    
    link: function postLink($scope, iElement, iAttrs) { 

      var lockDoor = iElement.find('.safe_lock_door');
      var lock = iElement.find('.safe_lock');
      var prefix = Modernizr.prefixed('transform');
        
        
      var angles = [105,95,115];
      var lockMoves = 0;

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

      function openTheDoor(){
        lockDoor.addClass('open');
      }
    
      $rootScope.$on('SocketTypeOrientationEvent', function(evt, data){
        updateRotation(data);
      });

      $rootScope.$on('changeRouteEvt', function(){
        window.removeEventListener('deviceorientation', deviceOrientationListener);
      });


      /*
      * Your Code ! 
      */

      function deviceOrientationListener(event){        
        var alpha = Math.round(event.alpha);
        var beta = Math.round(event.beta);
        var gamma = Math.round(event.gamma);
        updateRotation(alpha);
        socket.sendOrientation(alpha);
      }

      window.addEventListener('deviceorientation', deviceOrientationListener, true);


        
    }
  };
  return directiveDefinitionObject;
}]);

 