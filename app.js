let userScore = 0;
let compScore = 0;

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let result = document.querySelector("#result");
let u = document.querySelector("#user-score");
let c = document.querySelector("#comp-score");
let reset = document.querySelector("#reset-btn");

const choices = document.querySelectorAll(".choice");
const array = ['rock', 'paper', 'scissors'];

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const comp = array[Math.floor(Math.random() * array.length)];
        const user = choice.id;
        if (user == comp){
            result.innerText = "It is a tie."
        }
        else if ((user == "rock" && comp == "scissors") || (user == "paper" && comp == "rock") || (user == "scissors" && comp == "paper")){
            result.innerText = `User wins!  ${user} beats ${comp}`;
            userScore += 1;
            u.innerText = userScore;

        }
        else {
            result.innerText = `Computer wins!  ${comp} beats ${user}`;
            compScore += 1;
            c.innerText = compScore;
        }
    })
})

reset.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    u.innerText = "0";
    c.innerText = "0";
    result.innerText = "Make your move!";
});