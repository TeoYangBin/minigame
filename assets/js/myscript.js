var hand1 
var hand2 
var playerguess 
var playertotal
var gamecount = 0
var wincount = 0
var loosecount = 0


function lefthand1() {
	hand1 = 0
	document.getElementById("playerhand1").innerHTML = hand1
}

function lefthand2() {
	hand1 = 5
	document.getElementById("playerhand1").innerHTML = hand1
}

function righthand1() {
	hand2 = 0
	document.getElementById("playerhand2").innerHTML = hand2
}

function righthand2() {
	hand2 = 5
	document.getElementById("playerhand2").innerHTML = hand2
}

function bet0() {
	playerguess = 0
	document.getElementById("playerguess").innerHTML = "Player Guess:  " + playerguess
}

function bet5() {
	playerguess = 5
	document.getElementById("playerguess").innerHTML = "Player Guess:  " + playerguess
}

function bet10() {
	playerguess = 10
	document.getElementById("playerguess").innerHTML = "Player Guess:  " + playerguess
}

function bet15() {
	playerguess = 15
	document.getElementById("playerguess").innerHTML = "Player Guess:  " + playerguess
}

function bet20() {
	playerguess = 20
	document.getElementById("playerguess").innerHTML = "Player Guess:  " + playerguess
}



var random = [0, 5];


	
function playFunction(){
	var random1 = random[Math.floor(Math.random()*random.length)];
	var random2 = random[Math.floor(Math.random()*random.length)];
	var gametotal;
	
	var i;
	document.getElementById("handrandom1").innerHTML = random1;
	document.getElementById("handrandom2").innerHTML = random2;
	playertotal = hand1 + hand2;
	document.getElementById("playertotal").innerHTML = "Player Total:  " + playertotal;
	gametotal = playertotal + random1 + random2;
	if (gametotal == playerguess & gamecount < 10){
		wincount = Number(wincount)+1
		gamecount = Number(gamecount) +1;
		document.getElementById("wincount").innerHTML =  wincount;
		document.getElementById("loosecount").innerHTML =  loosecount;
	}else if(gametotal !== playerguess & gamecount <10){
		loosecount = Number(loosecount)+1;
		gamecount = Number(gamecount) +1;
		document.getElementById("wincount").innerHTML =  wincount;
		document.getElementById("loosecount").innerHTML =  loosecount;
	} else if (gamecount >=10){
		var txt; 
		var gameend = alert("Game finished\n" + "Your score: \n Win count:" + wincount)
		
	}

 // if(typeof(Storage) !== "undefined") {
//    if (sessionStorage.wincount) {
 //     if(gametotal == playerguess){
//	  sessionStorage.wincount = Number(sessionStorage.wincount) +1;
//	  } 
//	document.getElementById("wincount").innerHTML = "Win count: " + sessionStorage.wincount;
//	document.getElementById("loosecount").innerHTML = "Loose count: " + sessionStorage.loosecount;
//	} 
//  }
//	if(typeof(Storage) !== "undefined") {
 //   if (sessionStorage.loosecount){
//		if(gametotal !== playerguess)
//      sessionStorage.loosecount = Number(sessionStorage.loosecount)+1;
//    }
 //   document.getElementById("wincount").innerHTML = "Win count: " + sessionStorage.wincount;
//	document.getElementById("loosecount").innerHTML = "Loose count: " + sessionStorage.loosecount;
//  } 
  




	
	
	console.log(random1,random2,gametotal,wincount,loosecount, gamecount);
	}