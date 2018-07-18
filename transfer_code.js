  var player = GetPlayer();
  // var earnedPoints=player.GetVar("points"); //remove the comment marks
  var earnedPoints = 100; // for testing

if (earnedPoints < 50) {     
	$.ajax({ 
    		url: 'https://api.github.com/gists/d3c9f53144ed69f8fe2b1785fb740f11',
   	 	type: 'PATCH',
    		beforeSend: function(xhr) { 
        		xhr.setRequestHeader("Authorization", "token <TOKEN>"); 
    			       },
    		data: '{"description": "ProjectBM Points","public": true,"files": {"bmpoints.xml": {"content": "100"}}}',
   		success: function(response) {
			console.log(response, earnedPoints,);
				},
       		});
} else if (earnedPoints < 100) {
	$.ajax({ 
    		url: 'https://api.github.com/gists/d3c9f53144ed69f8fe2b1785fb740f11',
   	 	type: 'PATCH',
    		beforeSend: function(xhr) { 
        		xhr.setRequestHeader("Authorization", "token <TOKEN>"); 
    			       },
    		data: '{"description": "ProjectBM Points","public": true,"files": {"bmpoints.xml": {"content": "150"}}}',
   		success: function(response) {
			console.log(response, earnedPoints,);
				},
       		});

} else {
	$.ajax({ 
    		url: 'https://api.github.com/gists/d3c9f53144ed69f8fe2b1785fb740f11',
   	 	type: 'PATCH',
    		beforeSend: function(xhr) { 
        		xhr.setRequestHeader("Authorization", "token <TOKEN>"); 
    			       },
    		data: '{"description": "ProjectBM Points","public": true,"files": {"bmpoints.xml": {"content": "200"}}}',
   		success: function(response) {
			console.log(response, earnedPoints,);
				},
       		});

	}
