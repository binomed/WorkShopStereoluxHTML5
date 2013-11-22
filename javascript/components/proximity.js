components.directive('proximity', ['$rootScope', function ($rootScope) {
   var directiveDefinitionObject = {
    templateUrl: 'partials/components/proximity.html',
    replace: true,
    restrict: 'E',
    scope: {        
    },    
    link: function postLink($scope, iElement, iAttrs) { 


      var pushButton = iElement.find('.push_button');


      function pushTheButton(){
        if (!pushButton.hasClass('press')){
          pushButton.addClass('press');
        }
      }

      function unPushTheButton(){
        pushButton.removeClass('press');
      }
     
      $rootScope.$on('changeRouteEvt', function(){
        window.removeEventListener('deviceproximity', deviceProximityHandler, false);
      });

      /*
      * Your Code ! 
      */

      var deviceProximityHandler = function(event) {
        var value = Math.round(event.value);            
        if (value < 2){
          pushTheButton();
        }else{
          unPushTheButton();
        }
      }

      window.addEventListener('deviceproximity', deviceProximityHandler, false);

        
    }
  };
  return directiveDefinitionObject;
}]);

 