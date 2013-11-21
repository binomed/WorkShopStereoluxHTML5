components.directive('userMedia', ['ModelFactory', function (model) {
   var directiveDefinitionObject = {
    templateUrl: 'partials/components/usermedia.html',
    replace: true,
    restrict: 'E',
    scope: {        
    },    
    link: function postLink($scope, iElement, iAttrs) { 

        var videoParent = iElement.find('.videoParent');
        var video = iElement.find('video');

        
        //if (model.mobile){



          /*
          * Your Code ! 
          */

          var constraints = {video: true};

          var gUM = Modernizr.prefixed('getUserMedia', navigator);

          function handleUserMedia(stream){
            video[0].src = window.URL.createObjectURL(stream);
            video[0].play();
            videoParent.addClass('rotate');
          }

          function handleUserMediaError(error){
            console.log('navigator.getUserMedia error: ', error);
          }

          gUM(constraints, handleUserMedia, handleUserMediaError);


        //}

        

    }
  };
  return directiveDefinitionObject;
}]);

 