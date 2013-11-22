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
     

      function manageProximityValue(value){
        if (value < 2){
          pushTheButton();
        }else{
          unPushTheButton();
        }        
      }

      $rootScope.$on('SocketTypeProximityEvent', function(event, data){
        manageProximityValue(data);
      });


      $rootScope.$on('changeRouteEvt', function(){
        window.removeEventListener('deviceproximity', deviceProximityHandler, false);
      });

      /*
      * Your Code ! 
      */

      var deviceProximityHandler = function(event) {
        var value = Math.round(event.value);            
        socket.sendProximity(value);
        manageProximityValue(value);
      }

      window.addEventListener('deviceproximity', deviceProximityHandler, false);

        
    }
  };
  return directiveDefinitionObject;
}]);

 