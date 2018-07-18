//Place at the start of document
var gitToken = "token <TOKEN GOES HERE>"; //GitHub Access Token

==============================================
 //Place inside function Script#()
  var player = GetPlayer();
  var earnedPoints=player.GetVar("points"); //remove the comment marks
  //var earnedPoints = 25; // for testing
  var stringPnts = String(earnedPoints)
  var gitContent = {"description": "ProjectBM Points","public": true,"files": {"bmpoints.xml": {"content": stringPnts}}};
  var contJSON = JSON.stringify(gitContent); 

	$.ajax({ 
    		url: 'https://api.github.com/gists/d3c9f53144ed69f8fe2b1785fb740f11',
   	 	type: 'PATCH',
    		beforeSend: function(xhr) { 
        		xhr.setRequestHeader("Authorization", gitToken); 
    			       },
    		data: contJSON,
   		success: function(response) {
			console.log(response, earnedPoints,);
				},
       		});
