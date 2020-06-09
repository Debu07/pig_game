
var scores , roundscore, activePlayer,gameon,player1,player2;

function init(){

    scores=[0,0];
    roundscore=0;
    activePlayer=0;
    gameon=true;
    //document.querySelector('.final-score').textContent='Final Score';

    document.querySelector('.dice').style.display='none';
    
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    document.getElementById('name-0').textContent='player 1'
    document.getElementById('name-1').textContent='player 2'
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
}

init();

//roll button coding

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gameon){
        //random variable from 1 to 6 dice
    var dice=Math.floor(Math.random() *6 )+1;
    //dice dom for manipulating image of the dice
    //displaying the result

    document.querySelector('.dice').style.display='block';
    document.querySelector('.dice').src='dice-'+dice+'.png';

    //updating roundscore until 1 encounteres

    if(dice!==1){
        roundscore+=dice;
        document.querySelector('#current-'+ activePlayer).textContent=roundscore;
    }
    else{
        //next player turn
        nextplayer();

    }

    }
    
});

//hold button coding

document.querySelector('.btn-hold').addEventListener('click',function(){
    if (gameon){
        //current score to global score
    scores[activePlayer]+=roundscore;
    //update the ui
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
    //check if player won the game or not

    var input = document.querySelector('.final-score').value;
    var winningscore;
    if(input){
        winningscore=input;
    }
    else{
        winningscore=100;
    }
    if(scores[activePlayer]>=winningscore){

        document.querySelector('#name-'+activePlayer).textContent='Winner!!'
        document.querySelector('.dice').style.display='none';

        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gameon=false;

        // active player won
    }
    else{
        nextplayer(); 
    }
 }
    
});

function nextplayer(){
    activePlayer===0?activePlayer=1:activePlayer=0;
    roundscore=0;

    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';

}

//new game button

document.querySelector('.btn-new').addEventListener('click',init);