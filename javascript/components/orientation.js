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
        
        
      var angles = [105,200,50];
      var lockMoves = 0;

      function updateRotation(zAlpha){
        if(angles[lockMoves] === zAlpha){
          lockMoves++;
          audio.playSafeLock();
          if (lockMoves === 2){
            openTheDoor();
          }
        }else{
          lock.css(prefix,'rotateY('+zAlpha+'deg)');
        }
      }

      function openTheDoor(){
        lockDoor.addClass('open');
      }
    
      $rootScope.$on('SocketTypeOrientationEvent', function(evt, data){
        updateRotation(data);
      });


      /*
      * Your Code ! 
      */

      window.addEventListener('deviceOrientation', function(event){
        var alpha = event.alpha;
        var beta = event.beta;
        var gamma = event.gamma;
        updateRotation(alpha);
        socket.sendOrientation(alpha);
      }, true);


        
    }
  };
  return directiveDefinitionObject;
}]);

 