const moves = ["rock","paper","scissors"];
var playerScore=0;;
var computerScore=0;
var isValid=true;
function getComputerMove(){
    return Math.floor(Math.random()*2);
}
function getPlayerMove(){
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
/**
 * returns outcome message dependent on computer move and playermove
 */
function computerplay(playerSelection, computerSelection){
    var player = moves[playerSelection];
    var computer = moves[computerSelection];
    let tie = "It's a Tie!\n"+"Player:"+playerScore + "Computer"+computerScore;
    if(playerSelection===computerSelection){
        return tie;
    }
    else if(playerSelection===2&&computerSelection===0){
        computerScore++;
        return  `You Lose! ${computer} beats ${player}\n`+ "Player:"+playerScore + "Computer"+computerScore;
        
    }
    else if(playerSelection===0&&computerSelection===2){
        playerScore++;
        return `You Win! ${player} beats ${computer} \n`+ "Player:"+playerScore + "Computer"+computerScore;
    }
    else if(playerSelection-computerSelection==1){
        playerScore++;
        return `You Win! ${player} beats ${computer} \n`+ "Player:"+playerScore + "Computer"+computerScore;
    }
    else{
        computerScore++;
        return `You Lose! ${computer} beats ${player}\n`+ "Player:"+playerScore + "Computer"+computerScore;
    }
}
function gameResult(){
    if(playerScore>computerScore){
        return "Congratulations you win!"
    }
    else if(playerScore<computerScore){
        return "You lost!"
    }
    else{
        return "It's a Tie!"
    }
}

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