let yourNum = 0;
let compNum = 0;

function computerPlay() {
    let choice = ['Rock', 'Paper', 'Scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {

    const result = document.querySelector('p#result');
    const yourScore = document.querySelector('span#your-score > b');
    const compScore = document.querySelector('span#comp-score > b');

    if (playerSelection == computerSelection) {
        result.textContent = "It's a tie!";
    }
     else if (playerSelection == "Rock" && computerSelection == "Scissors" ||
        playerSelection == "Paper" && computerSelection == "Rock" ||
        playerSelection == "Scissors" && computerSelection == "Paper") {
        result.textContent = "You win! " + playerSelection + " beats " + computerSelection;
        yourScore.textContent = ++yourNum;
    }
    else {
        result.textContent = "You lose! " + computerSelection + " beats " + playerSelection;
        compScore.textContent = ++compNum;
    }

    const dis = document.getElementById('scoreboard');
    const winner = document.createElement('p');
    if (yourNum == 5) {
        winner.textContent = "Congratulations! You win the game.";
        dis.appendChild(winner);
    }
    else if (compNum == 5) {
        winner.textContent = "Sorry! Computer wins the game.";
        dis.appendChild(winner);
    }
}

function display(playerSelection, computerSelection) {

    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');

    switch(playerSelection) {
        case "Rock": img1.src = "rock.png"; break;
        case "Paper": img1.src = "paper.png"; break;
        case "Scissors": img1.src = "scissors.png"; break;
    }

    switch(computerSelection) {
        case "Rock": img2.src = "rock.png"; break;
        case "Paper": img2.src = "paper.png"; break;
        case "Scissors": img2.src = "scissors.png"; break;
        }
    }

function game() {

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let player = button.id;
            let computer = computerPlay();
            playRound(player, computer);
            display(player, computer);
            });
        });
}

game();