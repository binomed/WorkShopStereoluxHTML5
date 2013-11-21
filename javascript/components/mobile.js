components.directive('isMobile', ['ModelFactory', function (model) {
   var directiveDefinitionObject = {
    restrict: 'A',
    scope: {        
    },    
    link: function postLink($scope, iElement, iAttrs) { 

    	setTimeout(function() {	    
	        // Check Mobile or Desktop version
	        model.mobile = $('.navbar-toggle').is(':visible');

    	}, 500);
        
    }
  };
  return directiveDefinitionObject;
}]);

 