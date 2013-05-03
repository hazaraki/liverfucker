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
	  		questionA[18] = "";
	  		questionA[19] = "";
	  		questionA[20] = "";
	  		questionA[21] = "";
	  		questionA[22] = "";
	  		questionA[23] = "";
	  		questionA[24] = "";
	  		questionA[25] = "";
	  		questionA[26] = "";
	  		questionA[27] = "";
	  		questionA[28] = "";
	  		questionA[29] = "";
	  		questionA[30] = "";
	  		questionA[31] = "";
	  		questionA[32] = "";
	  		questionA[33] = "";
	  		questionA[34] = "";
	
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
	
		var i = Math.floor(Math.random()*questionB.length)
		$('#questionB').html(questionB[i])
});