$(function() {
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
	  	response[15] = "There are quicker ways to kill yourself.";
	  	response[16] = "Are you shitting me? No!";
	  	response[17] = "Seriously? If you're that dumb then perhaps you should.";
	  	response[18] = "A quick and easy recipe for disaster.";
	  	response[19] = "Stop, unless you're Keith Richards.";
	  	response[20] = "Your stomach is not a meth lab. Stop.";
	  	response[21] = "Look how well that worked for Amy Winehouse.";
	  	response[22] = "If you had common sense we wouldn't be having this conversation.";
	  	response[23] = "Why not just Google, How to sprint into a coma?";
	  	response[24] = "Clearly, you've never done this before. No.";
	  	response[25] = "Haha! No, the answer is No!";
	  	response[26] = "Are you nuts? Go do some dishes, dude!";
	  	response[27] = "Are you fucking insane?";
	  	response[28] = "Unless you want to die, the answer is no!";
	  	response[29] = "No, dude! no!!!";
	  	response[30] = "Do you think I’m stupid? Of course you shouldn’t.";
	  	response[31] = "Guess what: No!";
	  	response[32] = "Two words for you: No, no!";
	  	response[33] = "Are you fucking stupid?";
	  	response[34] = "You fucking shouldnt!";

	$('#button').click(function() {
		if(!$('#formA').val()) {          
				$('#response').html('Tell us what you want to drink!');
				$('#formA').addClass('border'); 
			}
		else if(!$('#formB').val()) {
				$('#response').html('Tell us what you are taking!'); 
				$('#formB').addClass('border'); 
			}
		else {
			var i = Math.floor(Math.random()*response.length);
			$('#response').html(response[i]);
			$('#formA').removeClass('border'); 
			$('#formB').removeClass('border'); 
			}
		});
});
