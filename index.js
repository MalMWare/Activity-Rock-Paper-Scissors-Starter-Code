

let userSelection = prompt("rock, paper or scissors?"); //Gets the users selection
let computerSelection = Math.floor(Math.random() * 100); //Randomly generate a number
console.log(computerSelection)


//Conditional logic goes here to determine the computers selection
if (computerSelection <= 33) {
  computerSelection = 'rock'
} else if (computerSelection <= 66) {
  computerSelection = 'paper'
} else {
  computerSelection = 'scissors'
}

console.log(computerSelection)

//<--Code goes here-->

//Function to compare the userSelection and the computerSelection to determine the winner
function compare(selection1,selection2){
    if (selection1 === 'rock') {
      if (selection2 === 'paper') {
        console.log('Computer Wins!')
      } else if (selection2 === 'scissors') {
        console.log('You Win!')
      } else  {
        console.log('DRAW!')
      }
    } else if (selection1 === 'paper') {
      if (selection2 === 'paper') {
        console.log('DRAW!')
      } else if (selection2 === 'scissors') {
        console.log('Computer Wins!')
      } else  {
        console.log('You Win!')
      }
    } else {
      if (selection2 === 'paper') {
        console.log('You Win!')
      } else if (selection2 === 'scissors') {
        console.log('DRAW!')
      } else {
        console.log('Computer Wins!')
      }
    }
}

console.log(compare(userSelection,computerSelection)); //call the function to compare and display result