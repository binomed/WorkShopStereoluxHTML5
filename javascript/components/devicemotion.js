components.directive('deviceMotion', ['WebSocketFactory', '$rootScope',function (socket, $rootScope) {
   var directiveDefinitionObject = {
    templateUrl: 'partials/components/devicemotion.html',
    replace: true,
    restrict: 'E',
    scope: {        
    },    
    link: function postLink($scope, iElement, iAttrs) { 

      var gradient = iElement.find('.devicemotion-percent');
      var maxHeight = 335;

      var currentPercent = 0;


      function updatePercent(){
        gradient.css('heigth', Math.min(currentPercent, maxHeight) +'px');           
      }

      $rootScope.$on('SocketTypeDevieMotionEvent', function(evt, data){
        currentPercent+=data;
        updatePercent();
      });

      $rootScope.$on('changeRouteEvt', function(){
        window.removeEventListener('devicemotion', deviceMotionListener);
      });

      /*
      * Your Code ! 
      */

      function deviceMotionListener(event){        
        var x = event.acceleration.x;
        var y = event.acceleration.y;
        var z = event.acceleration.z;
        socket.sendDeviceMotion(Math.abs(x));
        updatePercent();
      }

      window.addEventListener('devicemotion', deviceMotionListener, true);

        
    }
  };
  return directiveDefinitionObject;
}]);

 