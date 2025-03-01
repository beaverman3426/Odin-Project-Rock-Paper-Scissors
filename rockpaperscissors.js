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
    if(humanChoice==="rock" && randomnum==="scissors"){
        console.log("the indomitable human spirit has triumphed")
        humanScore=humanScore+1
    }
      else if(humanChoice==="scissors" && randomnum==="rock"){
        console.log("The machine has won")
        computercore=computercore+1
      }
      else if(humanChoice==="scissors" && randomnum==="paper"){
        console.log("the indomitable human spirit has triumphed")
        humanScore=humanScore+1
      }
      else if(humanChoice==="scissors" && randomnum==="scissors"){
        console.log("draw")
      }
      else if(humanChoice=== "rock" && randomnum==="paper"){
        console.log("The machine has won")
        computercore=computercore+1
      }
      else if(humanChoice==="rock" && randomnum==="rock"){
        console.log("draw")
      }
      else if(humanChoice==="paper" && randomnum==="paper"){
        console.log("draw")
      }
      else if(humanChoice==="paper" && randomnum==="rock"){
        console.log("the indomitable human spirit has triumphed")
        humanScore=humanScore+1
      }
      else if(humanChoice==="paper" && randomnum==="scissors"){
        console.log("The machine has won")
        computercore=computercore+1
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