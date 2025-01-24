//Function for getting computer's choice using math.random function
function getComputerChoice(){
    let comp = Math.floor(Math.random() * 3)
    if (comp == 0){
        return "Computer have selected ROCK";
    }
    else if (comp == 1){
        return "Computer have selected PAPER";
    }
    else if (comp == 2){
        return "Computer have selected SCISSOR";
    }
    }

//Function for getting Human's choice 
function getHumanChoice(){
    let hum = prompt("Enter your choice:")
    if (hum.toLowerCase() == "rock") {
        return "You have selected Rock";
    }
    else if (hum.toLowerCase() == "paper") {
        return "You have selected Paper";
    }
    else if (hum.toLowerCase() == "scissor") {
        return "You have selected Scissor";
    }
    else {
        return "Invalid Input";
    }
}

//Function for evaluating who won
function playRound(humanChoice, compChoice){
        if (humanChoice == "You have selected Rock" && compChoice == "Computer have selected PAPER") {
            return "You won this round :) ";
        }
        else if (humanChoice == "You have selected Paper" && compChoice == "Computer have selected SCISSOR"){
            return "You won this round :) ";
        }
        else if (humanChoice == "You have selected Scissor" && compChoice == "Computer have selected ROCK"){
            return "You won this round :) ";
        }
        else if(compChoice == "Computer have selected ROCK" && humanChoice == "You have selected Paper"){
            return "Computer won this round :( ";
        }
        else if(compChoice == "Computer have selected PAPER" && humanChoice == "You have selected Scissor"){
            return "computer won this round :( ";
        }
        else if(compChoice == "Computer have selected SCISSOR" && humanChoice == "You have selected Rock"){
            return "computer won this round :( ";
        } 
        else {
            return "Its a Tie"
        }
}

const humanSelection = getHumanChoice();
const compSelection = getComputerChoice();

console.log(playRound(humanSelection, compSelection))
console.log(compSelection)
console.log(humanSelection)
