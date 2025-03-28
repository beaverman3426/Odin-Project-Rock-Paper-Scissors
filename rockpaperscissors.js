function playGame() {
let humanScore=0;
let computercore=0;
    function getComputer(){
 let randomnum=Math.floor((Math.random()*3)+1);
if(randomnum==1){
    return "rock";
}
  else if(randomnum==2){
    return "paper";
  }
   else {
    return "scissors";
   }
}
    function gethuman(){
    humanChoice=prompt("What do you pick?");
    humanChoice = humanChoice.toLowerCase();
   if(humanChoice==="rock"|| humanChoice==="paper"|| humanChoice==="scissors"){
    return humanChoice;
   }
   else{
    console.log("Invalid choice! Please pick rock, paper, or scissors.");
    return gethuman();
   }
}
    function playRound(humanChoice, randomnum){
      const outcomes = {
        rock: { scissors: "human", paper: "computer", rock: "draw" },
        scissors: { paper: "human", rock: "computer", scissors: "draw" },
        paper: { rock: "human", scissors: "computer", paper: "draw" }
      };
      
      const result = outcomes[humanChoice][randomnum];
      
      if (result === "human") {
        console.log("The indomitable human spirit has triumphed");
        humanScore++;
      } else if (result === "computer") {
        console.log("The machine has won");
        computercore++;
      } else {
        console.log("draw");
      }
      

}


playRound(gethuman(), getComputer());
playRound(gethuman(), getComputer());
playRound(gethuman(), getComputer());
playRound(gethuman(), getComputer());
playRound(gethuman(), getComputer());

if(humanScore>computercore){
    console.log("Humanity lives for another day")
}
  else if(computercore>humanScore){
    console.log("The machine has won....!")
  }
  else if(computercore===humanScore){
    console.log("The match is a draw")
  }
}
playGame();