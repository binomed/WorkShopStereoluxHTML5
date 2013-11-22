components.directive('light', ['$rootScope','WebSocketFactory', function ($rootScope, socket) {
   var directiveDefinitionObject = {
    templateUrl: 'partials/components/light.html',
    replace: true,
    restrict: 'E',
    scope: {        
    },    
    link: function postLink($scope, iElement, iAttrs) { 

      // The light element
      var lightElt = iElement.find('.light-bg')[0];
      //  The percent of luminosity
      var percent = 50;
      // The prefix to use for the gradient
      var prefix = Modernizr.prefixed('transform') === 'WebkitTransform' ? '-webkit-' : "-moz-";

      // We update the css Style
      function updateLight(){
        var style = prefix+'radial-gradient(center, '
            +' ellipse cover, '
            +' rgba(198,197,145,1) 0%,'
            +' rgba(0,0,0,1) '+percent+'%'
            ;
        lightElt.style.background = style;
      }

      // We recieve data from phone
      $rootScope.$on('SocketTypeLightEvent', function(event, data){
        percent = data;
        updateLight();
      });

      
      // We have to unregister us of the event
      $rootScope.$on('changeRouteEvt', function(){
        unregister();
      });

     /*
      * Your Code ! 
      */

      // The handler
      var deviceLightHandler = function(event) {
        // The value will live between 0 and ~150
        // But when it is 45 is a high lumonsity
        var value = Math.min(45, event.value);        
        percent = Math.round((value / 45) * 100);       
        socket.sendLight(percent);
        updateLight(); 
      }

      // We add the listener
      function register(){
        window.addEventListener('devicelight', deviceLightHandler, false);
      }

      function unregister(){
        window.removeEventListener('devicelight', deviceLightHandler, false);
      }

      register();
        
    }
      }
  };
  return directiveDefinitionObject;
}]);

 