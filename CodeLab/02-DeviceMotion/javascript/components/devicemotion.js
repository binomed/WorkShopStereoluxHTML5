components.directive('deviceMotion', ['WebSocketFactory', '$rootScope',function (socket, $rootScope) {
   var directiveDefinitionObject = {
    templateUrl: 'partials/components/devicemotion.html',
    replace: true,
    restrict: 'E',
    scope: {        
    },    
    link: function postLink($scope, iElement, iAttrs) { 

      // Init the device motion element
      var gradient = iElement.find('.devicemotion-percent');
      // Height of the battery
      var maxHeight = 335;

      // Variable that will live when we shake the phone
      var currentPercent = 0;

      // Update the style
      function updatePercent(){
        gradient.css('height', Math.min(currentPercent, maxHeight) +'px');           
      }

      // We recieve information from the phone
      $rootScope.$on('SocketTypeDevieMotionEvent', function(evt, data){
        currentPercent+=data;
        updatePercent();
      });

      // We have to unregister us to the event !
      $rootScope.$on('changeRouteEvt', function(){
        unregister();
      });

      /*
      * Your Code ! 
      */

      // Listener of devieMotion
      var deviceMotionListener = function(event){        
        var x = event.acceleration.x;
        var y = event.acceleration.y;
        var z = event.acceleration.z;
        socket.sendDeviceMotion(Math.abs(x));
        currentPercent+=Math.abs(x);
        updatePercent();
      }

      // We add the listener
      function register(){
        window.addEventListener('devicemotion', deviceMotionListener, false);
      }

      function unregister(){
        window.removeEventListener('devicemotion', deviceMotionListener, false);        
      }

      register();

        
    }
  };
  return directiveDefinitionObject;
}]);

 