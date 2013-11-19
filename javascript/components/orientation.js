components.directive('orientation',  ['WebSocketFactory','$rootScope', function (socket, $rootScope) {
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
        
        

      function updateRotation(zAlpha){
        lock.css(prefix,'rotateX('+zAlpha+'deg)');
      }

      window.addEventListener('deviceOrientation', function(event){
        var alpha = event.alpha;
        var beta = event.beta;
        var gamma = event.gamma;
        updateRotation(alpha);
      });

      function openTheDoor(){
        lockDoor.addClass('open');
      }
    

      //socket.sendOrientation(50);
        
    }
  };
  return directiveDefinitionObject;
}]);

 