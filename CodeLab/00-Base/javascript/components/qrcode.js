components.directive('qrcodes', ['ModelFactory', function (model) {
   var directiveDefinitionObject = {
    templateUrl: 'partials/components/qrcode.html',
    replace: true,
    restrict: 'E',
    scope: {        
    },    
    link: function postLink($scope, iElement, iAttrs) { 


    	setTimeout(function() {
    		// We get the json with ip of network in order to create the associate QrCode
	        $.getJSON('../assets/json/ips.json', function(data) {
	            var qrCode = new QRCode("qrCode", {
	                text: "",
	                width: 256,
	                height: 256,
	                colorDark : "#000000",
	                colorLight : "#ffffff",
	                correctLevel : QRCode.CorrectLevel.H
	            });
	            var list = "<ul>";
	            var datas = data;
	            for (var i = 0; i < data.length; i++){
	                list+= "<li><a id='"+data[i].id+"'>"+data[i].name+"</a></li>";                
	            }
	            list += "</ul>";
	            $('#listIp').html(list);
	            
	             for (var i = 0; i < data.length; i++){
	                $('#'+data[i].id).on('click',function(event){
	                    qrCode.clear();
	                    qrCode.makeCode("http://"+datas[event.target.id].ip+":8080/html");
	                });
	            }
	        
	        })
	        .error(function() { 
	            console.log('Error getting json')
	        });

    	}, 500);
        
    }
  };
  return directiveDefinitionObject;
}]);

 