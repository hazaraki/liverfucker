var response = new Array (); 
	  response[0] = "Aw Hell Nah!";
	  response[1] = "Think again!";
	  response[2] = "You can’t be serious!";
	  response[3] = "Do you wanna fucking die?!";
	  response[4] = "Never in my life!";
	  response[5] = "Absolutely NO!";
	  response[6] = "Big Fat NOPE!";
	  response[7] = "In your dreams!";
	  response[8] = "Fuck no!";
	  response[9] = "Don’t be an idiot!";
	  response[10] = "Not on Bieber’s life!";
	  response[11] = "You must be trippin’!";
	  response[12] = "And…..No";
	  response[13] = "Um….No.";
	  response[14] = "Dream on!";

function answer() {

	//if (!document.getElementById("questionA").value){          
		// document.getElementById("response").innerText = 'Tell us what you want to drink!'; 
	// }
	
	// else if (!document.getElementById("questionB").value) {
		// document.getElementById("response").innerText = 'Tell us what you are taking!'; 
	// }

	// else {
		var i = Math.floor(Math.random()*response.length);
		document.getElementById("response").innerText = response[i]; 
	// }
};
