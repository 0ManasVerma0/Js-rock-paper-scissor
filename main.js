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

console.log(getHumanChoice())
console.log(getComputerChoice())