var message = document.getElementById("message");
const rock=document.getElementById("0");
const paper=document.getElementById("1");
const scissors=document.getElementById("2");
const playAgain = document.getElementById("play");
var playerS = document.getElementById("playerscore");
var compS = document.getElementById("compscore");
const moves = ["rock","paper","scissors"];
var playerScore=0;;
var computerScore=0;
var isValid=true;
const arr = document.querySelectorAll("button");
var listener = function(){
    computerplay(this.id,getComputerMove())
    if(playerScore>=5||computerScore>=5){
        gameEnd();
        }
};

function restartGame(){
    playerScore=0;
    computerScore=0;
    compS.innerHTML=computerScore;
    playerS.innerHTML=playerScore;
    playAgain.style.display="none";
    arr.forEach(element => {
        element.addEventListener("click",listener);
    });
}



function getComputerMove(){
    return Math.floor(Math.random()*2);
}

/**
 * function getPlayerMove(){
    let input=prompt("What's your move?");
    input=input.toLowerCase();
    var index =-1;
    for(var i=0;i<3;i++){
        if(input==moves[i]){
            index=i;
        }
    }
    if(index==-1)
    {
        console.log("enter a valid move");
        isValid=false;
    }
    else{
        return index;
    }
}
 */
/**
 * returns outcome message dependent on computer move and playermove
 */
function computerplay(playerSelection, computerSelection){
    var player = moves[playerSelection];
    var computer = moves[computerSelection];
    let tie = "It's a Tie!";
    if(playerSelection==computerSelection){
        message.innerHTML=tie;
    }
    else if(playerSelection===2&&computerSelection===0){
        computerScore++;
        message.innerHTML=  `You Lose! ${computer} beats ${player}`;
        compS.innerHTML=computerScore;
    }
    else if(playerSelection===0&&computerSelection===2){
        playerScore++;
        message.innerHTML= `You Win! ${player} beats ${computer}` ;
        playerS.innerHTML=playerScore;
    }
    else if(playerSelection-computerSelection===1){
        playerScore++;
        message.innerHTML=`You Win! ${player} beats ${computer}` ;
        playerS.innerHTML=playerScore;
    }
    else if(computerSelection-playerSelection===1){
        computerScore++;
        message.innerHTML= `You Lose! ${computer} beats ${player}`;
        compS.innerHTML=computerScore;
    }
    console.log(player);
    console.log(playerScore);
    console.log(computerScore);
}
/** function gameResult(){
    if(playerScore>computerScore){
        return "Congratulations you win!"
    }
    else if(playerScore<computerScore){
        return "You lost!"
    }
    else{
        return "It's a Tie!"
    }
}*/

/* 
function game(){
    for(let i=0;i<5;i++){
        computerMove = getComputerMove();
        playerMove=getPlayerMove();
        if(isValid==false){
            i--;
            isValid=true;
            continue;
        }
        console.log(computerplay(playerMove,computerMove));
        
    }
    console.log(gameResult());
}
*/
function gameEnd(){
        if(playerScore>=5){
            message.innerHTML="Congratulations! You win!"
        }
        else if(computerScore>=5){
            message.innerHTML = "You Lost!"
        } 
        play.style.display="block"; 
        arr.forEach(element => {
            element.removeEventListener("click",listener);
        });
     
    }


arr.forEach(element => {
    element.addEventListener("click",listener)
       });
       



