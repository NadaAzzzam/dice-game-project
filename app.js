//var dice;
//dice = Math.floor(Math.random()*6)+1;
//console.log(dice);
//
//document.querySelector('#current-0').textContent=dice;
////document.querySelector('#current-0').innerHTML=dice;

var roundScore,activePlayer,scores,gamePlaying;
init();

document.querySelector('.btn-roll').addEventListener('click',function(){
	
	if(gamePlaying){
	// 1. random number
	var dice = Math.floor(Math.random()*6)+1;
// 2. display th dice
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display='block';
	
	diceDOM.src='dice-'+dice +'.png';
// 3. update round score if score number not a 1
	if(dice !== 1){
	roundScore+=dice;
	document.querySelector('#current-'+activePlayer).textContent= roundScore;
	}
	else
	{
	
		nextPlayer();

	}
	}

});



document.querySelector('.btn-hold').addEventListener('click',function(){
	
	if(gamePlaying){
		
// display current scores to global score
	scores[activePlayer]+=roundScore;
// update UI
	document.querySelector('#score-'+activePlayer).textContent= scores[activePlayer];

// check if player won
	if(scores[activePlayer]>=60){
		
	document.querySelector('#name-'+activePlayer).textContent='Winner';
	document.querySelector('.dice').style.display='none';
	document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
	document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
	gamePlaying=false; //after he won we should put that to not play and select new game
	}
	
	else{
	nextPlayer();
	}
	}
});


document.querySelector('.btn-new').addEventListener('click',init)



function nextPlayer(){
(activePlayer ===0) ? activePlayer=1 :activePlayer=0;
		roundScore=0;
		document.querySelector('#current-0').textContent='0';
		document.querySelector('#current-1').textContent='0';
		
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
	
//		document.querySelector('.player-0-panel').classList.remove('active');
//		document.querySelector('.player-1-panel').classList.add('active');'
	
		document.querySelector('.dice').style.display='none';
}

function init(){
	
roundScore =0;
activePlayer=0;
scores=[0,0];
gamePlaying=true;

document.querySelector('#current-0').textContent=0;
document.querySelector('#current-1').textContent=0;
document.querySelector('#score-0').textContent=0;
document.querySelector('#score-1').textContent=0;
document.querySelector('.dice').style.display='none';
document.querySelector('#name-0').textContent='Player 1';
document.querySelector('#name-1').textContent='Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');



}
