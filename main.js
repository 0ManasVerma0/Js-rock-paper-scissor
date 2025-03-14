// Function for getting computer's choice
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to play one round
function playRound(human, computer) {
    if (human === computer) return "It's a Tie!";

    if (
        (human === "Rock" && computer === "Scissor") ||
        (human === "Paper" && computer === "Rock") ||
        (human === "Scissor" && computer === "Paper")
    ) {
        return `You Win! ${human} beats ${computer}`;
    } else {
        return `You Lose! ${computer} beats ${human}`;
    }
}

// Function that runs when button is clicked
function handleClick(humanChoice) {
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    document.getElementById("result").innerHTML = `
        <p>You chose: <strong>${humanChoice}</strong></p>
        <p>Computer chose: <strong>${computerChoice}</strong></p>
        <p><strong>${result}</strong></p>
    `;
}
