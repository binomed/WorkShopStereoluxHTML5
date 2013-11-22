components.directive('light', ['$rootScope', function ($rootScope) {
   var directiveDefinitionObject = {
    templateUrl: 'partials/components/light.html',
    replace: true,
    restrict: 'E',
    scope: {        
    },    
    link: function postLink($scope, iElement, iAttrs) { 

      var lightElt = iElement.find('.light-bg')[0];
      var percent = 50;
      var prefix = Modernizr.prefixed('transform') === 'WebkitTransform' ? '-webkit-' : "-moz-";

      function updateLight(){
        var style = prefix+'radial-gradient(center, '
            +' ellipse cover, '
            +' rgba(198,197,145,1) 0%,'
            +' rgba(0,0,0,1) '+percent+'%'
            ;
        lightElt.style.background = style;
      }

      $rootScope.$on('changeRouteEvt', function(){
        window.removeEventListener('devicelight', deviceLightHandler, false);
      });

      $rootScope.$on('SocketTypeLightEvent', function(event, data){
        percent = data;
        updateLight();
      });

     /*
      * Your Code ! 
      */

      var deviceLightHandler = function(event) {
        var value = Math.min(45, event.value);        
        percent = Math.round((value / 45) * 100);       
        socket.sendLight(percent);
        updateLight(); 
      }

      window.addEventListener('devicelight', deviceLightHandler, false);
        
    }
  };
  return directiveDefinitionObject;
}]);

 