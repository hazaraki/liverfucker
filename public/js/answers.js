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
	  response[11] = "Not on Bieber’s life!";
	  response[12] = "You must be trippin’!";
	  response[13] = "And…..No";
	  response[14] = "Um….No.";
	  response[15] = "Dream on!";

function answer() {
	var i = Math.floor(Math.random()*16)
	document.getElementById("response").innerText = response[i]; 
};