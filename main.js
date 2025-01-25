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
            return "computer won this round :( ";
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

//Function for playing this game
function playGame(){
    let compscore = 0;
    let humscore = 0;
    for (let i = 0; i<5; i++){
        const humanChoice = getHumanChoice();
        const compChoice = getComputerChoice();
        const play = playRound(humanChoice, compChoice);

        console.log(`Round ${i + 1}:`);
        console.log(humanChoice);
        console.log(compChoice);
        console.log(play);

        if (play === "You won this round :) ") {
            humscore+= 1;
        } else if (play === "computer won this round :( ") {
            compscore+= 1;
        }
        }
        console.log("\nFinal Scores:");
        console.log(`Your Score: ${humscore}`);
        console.log(`Computer's Score: ${compscore}`);
    
        if (humscore > compscore) {
            console.log("Congratulations! You won the game!");
        } else if (compscore > humscore) {
            console.log("Computer won the game. Better luck next time!");
        } else {
            console.log("It's a tie!");
        }
}

console.log(playGame())
