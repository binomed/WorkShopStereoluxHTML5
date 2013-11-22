components.directive('proximity', ['$rootScope', 'WebSocketFactory', function ($rootScope, socket) {
   var directiveDefinitionObject = {
    templateUrl: 'partials/components/proximity.html',
    replace: true,
    restrict: 'E',
    scope: {        
    },    
    link: function postLink($scope, iElement, iAttrs) { 

      // We get the html element
      var pushButton = iElement.find('.push_button');


      // We manage the push state
      function pushTheButton(){
        if (!pushButton.hasClass('press')){
          pushButton.addClass('press');
        }
      }

      // We manage the unpush state
      function unPushTheButton(){
        pushButton.removeClass('press');
      }
     

      // According to the value of proximity, we define if we push or unpush the button
      function manageProximityValue(value){
        if (value < 2){
          pushTheButton();
        }else{
          unPushTheButton();
        }        
      }

      // We recieve data from the phone
      $rootScope.$on('SocketTypeProximityEvent', function(event, data){
        manageProximityValue(data);
      });


      // We have to unregister us to event
      $rootScope.$on('changeRouteEvt', function(){
        unregister();
      });

      /*
      * Your Code ! 
      */

      // The listener
      // TODO 

      function register(){
        // TODO 
      }
      
      function unregister(){
        // TODO 
      }

      register();

        
    }
  };
  return directiveDefinitionObject;
}]);

 