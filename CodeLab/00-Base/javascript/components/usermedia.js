components.directive('userMedia', ['$rootScope','ModelFactory', function ($rootScope, model) {
   var directiveDefinitionObject = {
    templateUrl: 'partials/components/usermedia.html',
    replace: true,
    restrict: 'E',
    scope: {        
    },    
    link: function postLink($scope, iElement, iAttrs) { 

        // we get the html elements
        var videoParent = iElement.find('.videoParent');
        var video = iElement.find('video')[0];
        // the stream of video
        var localStream = null;
     
        // We have to unregister us
        $rootScope.$on('changeRouteEvt', function(){
          unregister();
        });

        /*
        * Your Code ! 
        */

        // We define the video constraints
        var constraints = null;// TODO 

        // We get the correct navigator method
        // TODO 

        // We manage an error while getting the stream
        // TODO 

        // We manage the success of getting the stream
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

 