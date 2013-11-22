components.directive('userMedia', ['$rootScope','ModelFactory', function ($rootScope, model) {
   var directiveDefinitionObject = {
    templateUrl: 'partials/components/usermedia.html',
    replace: true,
    restrict: 'E',
    scope: {        
    },    
    link: function postLink($scope, iElement, iAttrs) { 

        var videoParent = iElement.find('.videoParent');
        var video = iElement.find('video')[0];
        var localStream = null;

        $rootScope.$on('changeRouteEvt', function(){
          if (video) {
            video.pause();
          }
          if (localStream){
            localStream.stop();
          } 
          localStream = null;
        });

        function handleUserMediaError(error){
          console.log('navigator.getUserMedia error: ', error);
        }

        /*
        * Your Code ! 
        */

        var constraints = {video: true};

        var gUM = Modernizr.prefixed('getUserMedia', navigator);

        function handleUserMedia(stream){
          localStream = stream;
          video.src = window.URL.createObjectURL(stream);
          video.play();
          videoParent.addClass('rotate');
        }


        gUM(constraints, handleUserMedia, handleUserMediaError);



        

    }
  };
  return directiveDefinitionObject;
}]);

 