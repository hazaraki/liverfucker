$(function() {
	
	var questionA = new Array ();
			
			questionA[0] = "It’s been a hell of a day, I just need a fucking";
			questionA[1] = "I’m craving a giant fucking";
			questionA[2] = "I think it’s time to get fucked up on";
			questionA[3] = "I’m ready to get amped on";
			questionA[4] = "I wanna get hammered on";
			questionA[5] = "This fist pump would pair nicely with a fucking";
			questionA[6] = "It’s hot as fuck, I need a";
			questionA[7] = "I’m ready to get jacked up on";
			questionA[8] = "“I just wanna feel this moment” I need a fucking ";
			questionA[9] = "I would love to pound a";
			questionA[10] = "I would kill to get shit-faced on";
			questionA[11] = "If only I could drink my weight in";
			questionA[12] = "I just wanna get boozed-up on";
			questionA[13] = "I can't stand not being shwasted on";
			questionA[14] = "Ball so hard, motherfucker I just wanna get pissed on ";
			questionA[15] = "I would die to go on a bender with several";
			questionA[16] = "It would be epic to wash this down with a";
			questionA[17] = "I wanna get fucking plastered on";
	  		questionA[18] = "I want nothing more than";
	  		questionA[19] = "I'm in need of some";
	  		questionA[20] = "Bout to take some";
	  		questionA[21] = "I'd kill for some";
	  		questionA[22] = "I'm not dying, but I'm dying to take some";
	  		questionA[23] = "My dreams are full of";
	  		questionA[24] = "Can't live another minute without drinking";
	  		questionA[25] = "I would sell my mom just for a sip of";
	  		questionA[26] = "I’m about to text my ex if I don’t drink a glass of";
	  		questionA[27] = "Can’t stop looking to a bottle of";
	  		questionA[28] = "I need to take a fucking sip of";
	  		questionA[29] = "I’ve been dreaming of a full glass of";
	  		questionA[30] = "Happiness is a glass full of";
	  		questionA[31] = "I’m running out of milk, but there’s still a bottle of";
	  		questionA[32] = "I wanna drown myself in a glass full of";
	  		questionA[33] = "All I’m asking is for a glass of";
		
		var i = Math.floor(Math.random()*questionA.length);
		
		$('#questionA').html(questionA[i]);
	
	var questionB = new Array ();
			questionB[0] = "If only I wasn’t jacked up on";
			questionB[1] = "But I'm all loaded up on";
			questionB[2] = "I wish I wasn't so hopped up on";
			questionB[3] = "Why do I have to be so strung out on";
			questionB[4] = "If only I wasn't fucking tripping on";
			questionB[5] = "But I'm all tanked-up on";
			questionB[6] = "I wish I wasn't so blitzed on";
			questionB[7] = "If only I wasn't so out of it on";
			questionB[8] = "But I'm all fucking amped on";
			questionB[9] = "But my body's full of";
			questionB[10] = "But I gotta take";
			questionB[11] = "Even though I'm on a steady diet of";
			questionB[12] = "Even though the doctor gave me";
			questionB[13] = "But I’m fucking taking";
			questionB[14] = "But the doctor fucked my life prescribing";
			questionB[15] = "Even though I’m fucking taking";
			questionB[16] = "But I’m fucked with a prescription of";
			questionB[17] = "But my life was fucked with a prescription of";
	  		questionB[18] = "But my life has become hell since I start taking";
	  		questionB[19] = "But everything is so boring since I start taking";
		
		var i = Math.floor(Math.random()*questionB.length);
		
		$('#questionB').html(questionB[i]);
	
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
		response[35] = "There’s only two people who can handle this combination and one of them is not you (the other is not you either)."
		response[36] = "No. Five times no. Then multiply that by 45 and add 4 million.  That’s how many no’s."
		response[37] = "Yes, if you want your liver to inflate to the size of a elephant head. Otherwise, no."
		response[38] = "No, you stupid, stupid sub-human."
		response[39] = "First I’d say you need a hug, then I’d slap you for being stupid. "
		response[40] = "On. That’s backwards for no."
		response[41] = "No. And by no I mean no. Not yes. Yes doesn’t mean no. No means no."
		response[41] = "You’re what’s wrong with America."
		response[43] = "You can’t spell moron without “no”."
		response[44] = "Let me think…still thinking….one minute…ok, no."
		response[45] = "I want the worst for you, but the answer is still no."
		response[46] = "What kind of stupidity do you have floating in your brain."
		response[47] = "I know you want me to say yes, so I’m going to say no."
		response[48] = "I know you want me to say yes, but that would make me look like the idiot."
		response[49] = "Yes…wait…no!"
		response[50] = "Shame on you!"
		response[51] = "Do I really have to tell you how bad of an idea that is?"
		response[52] = "Such a combination would end in hilariously fatal results."
		response[53] = "Stop what you’re doing and rethink your life up to this point."
	

	$('#button').click(function() {
		
		if(!$('#formA').val()) {          
			
			$('#response').html('All work and no play makes jack a dull boy!');

			$('#formA').addClass('border'); 
		}
		
		else if(!$('#formB').val()) {
			
			$('#response').html('Tell us what you want to take!'); 
			
			$('#formB').addClass('border');
			
			$('#formA').removeClass('border'); 

		}
		
		else {

			$("a[href='#']").attr('href', '#response');

			$('html, body').animate({scrollTop: $("#response").offset().top}, 1000);

			$('#formA').removeClass('border'); 
			
			$('#formB').removeClass('border'); 	
		
			var i = Math.floor(Math.random()*response.length);
			
			$('#response').html(response[i]);

			return false;
		}
	});
});
