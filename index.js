// Get the Choice of the Computer by providing it with items to randomly pick from

function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    const computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper or Scissors:").toLowerCase();
    return humanChoice;
}
 let humanScore = 0;
 let computerScore = 0;

 function playRound(humanChoice, computerChoice){
if (humanChoice === computerChoice){
    console.log(`It is a tie, you both chose ${humanChoice}`);
}
else if(humanChoice === "rock" && computerChoice === "scissors" 
    || humanChoice === "paper" && computerChoice === "rock" 
|| humanChoice === "scissors" && computerChoice === "paper"){
    console.log(`You win ${humanChoice} beats ${computerChoice}`);
    humanScore++;
}
else{
    console.log(`You lose this round ${computerChoice} beats ${humanChoice}`);
    computerScore++;
}
 }



 function playGame(){
    for( let i = 0; i < 5; i++){
        console.log(`Round ${i+1}`);
         const humanSelection = getHumanChoice();
         const computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
   
    }
     console.log("Game Over");
 }

 playGame();
