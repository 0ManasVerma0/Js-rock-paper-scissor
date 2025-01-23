//Function for getting computer's choice using math.random function
function getComputerChoice(){
    let comp = Math.floor(Math.random() * 3)
    if (comp == 0){
        return "ROCK";
    }
    else if (comp == 1){
        return "PAPER";
    }
    else if (comp == 2){
        return "SCISSOR";
    }
    }

console.log(getComputerChoice())