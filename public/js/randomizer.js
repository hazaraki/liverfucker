$(document).ready(function() {

    

    var response = new Array (); 
	  response[0] = "test-0";
	  response[1] = "test-1";
	  response[2] = "test-2";
	  
	var i = Math.floor(Math.random()*3)


function answer() {
	document.getElementByID("response").innerText = response[i]; 
};

});