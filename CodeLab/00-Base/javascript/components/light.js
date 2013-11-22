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
      // TODO 

      // We add the listener
      function register(){
        // TODO 
      }

      function unregister(){
        // TODO 
      }

      register();
        
    }
      }
  };
  return directiveDefinitionObject;
}]);

 