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
	
		var i = Math.floor(Math.random()questionA.length)
		$('#questionA').html(questionA[i])
	
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
			questionA[9] = "But my body's full of";
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
	
		var i = Math.floor(Math.random()*questionB.length)
		$('#questionB').html(questionB[i])
});