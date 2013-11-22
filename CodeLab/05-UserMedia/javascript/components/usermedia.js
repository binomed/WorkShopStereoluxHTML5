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
        var constraints = {video: true};

        // We get the correct navigator method
        var gUM = Modernizr.prefixed('getUserMedia', navigator);

        // We manage an error while getting the stream
        function handleUserMediaError(error){
          console.log('navigator.getUserMedia error: ', error);
        }

        // We manage the success of getting the stream
        function handleUserMedia(stream){
          localStream = stream;
          video.src = window.URL.createObjectURL(stream);
          video.play();
          videoParent.addClass('rotate');
        }

        function register(){
          gUM(constraints, handleUserMedia, handleUserMediaError);
        }

        function unregister(){
          if (video) {
            video.pause();
          }
          if (localStream){
            localStream.stop();
          } 
          localStream = null;          
        }

        register();        

    }
  };
  return directiveDefinitionObject;
}]);

 