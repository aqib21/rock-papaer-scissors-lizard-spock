const choices = [];
const MAX_SCORE = 5;
let playerScore = 0;
let computerScore = 0;
const centerText = document.querySelector("#center-text");
const icons = document.querySelectorAll(".icon");

icons.forEach(val =>{
    choices.push(val.id);

    val.addEventListener('mouseenter', changeText);
    val.addEventListener('mouseleave', changeText);
    val.addEventListener('click', iconClicked);
});

function changeText(event){
    if(event.type == 'mouseenter'){
        centerText.innerHTML = event.target.id;
    } else{
        centerText.innerHTML = "CHOOSE YOUR<br>WEAPON";
    }      
}

function iconClicked(event){
    document.querySelector("footer").style.display = "block";

    let computerChoice = choose(choices);
    let playerChoice = event.target.id

    document.querySelector("#player-weapon").innerHTML = playerChoice;
    document.querySelector("#computer-weapon").innerHTML = computerChoice;

    let playerWon = getWinner(playerChoice, computerChoice);
    setWinner(playerWon);
}

function setWinner(winner){
    if(computerScore < MAX_SCORE && playerScore < MAX_SCORE){
        if(winner == 0){
            computerScore++;
            document.querySelector("#computer-score").value = computerScore;
            centerText.innerHTML = 'COMPUTER WON!'
        } else if(winner == 1){
            playerScore++;
            document.querySelector("#player-score").value = playerScore;
            centerText.innerHTML = 'YOU WON!'                
        } else{
            centerText.innerHTML = "IT'S A TIE!"
        }

        if(computerScore == MAX_SCORE || playerScore == MAX_SCORE) {
            icons.forEach(val =>{
                val.removeEventListener('mouseenter', changeText);
                val.removeEventListener('mouseleave', changeText);
                val.removeEventListener('click', iconClicked);
            });

            document.querySelectorAll('.game-over').forEach(val =>{
                val.style.display = "block";
            })
        }
    }
}

function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function getWinner(player, computer){
    let description = document.querySelector("#description");

    if(player == 'ROCK' && (computer == 'SCISSORS' || computer == 'LIZARD')){
        if(computer == 'SCISSORS')
            description.innerHTML = 'ROCK CRUSHES SCISSORS'
        else if(computer == 'LIZARD')
            description.innerHTML = 'ROCK CRUSHES LIZARD'
        return 1;
    } 
    else if(computer == 'ROCK' && (player == 'SCISSORS' || player == 'LIZARD')){
        if(player == 'SCISSORS')
            description.innerHTML = 'ROCK CRUSHES SCISSORS'
        else if(player == 'LIZARD')
            description.innerHTML = 'ROCK CRUSHES LIZARD'
        return 0;
    }
    else if (player == 'PAPER' && (computer == 'ROCK' || computer == 'SPOCK')){
        if(computer == 'ROCK')
            description.innerHTML = 'PAPER COVERS ROCK'
        else if(computer == 'SPOCK')
            description.innerHTML = 'PAPER DISPROVES SPOCK'
        return 1;
    }
    else if (computer == 'PAPER' && (player == 'ROCK' || player == 'SPOCK')){
        if(player == 'ROCK')
            description.innerHTML = 'PAPER COVERS ROCK'
        else if(player == 'SPOCK')
            description.innerHTML = 'PAPER DISPROVES SPOCK'
        return 0;
    }
    else if (player == 'SCISSORS' && (computer == 'PAPER' || computer == 'LIZARD')){
        if(computer == 'PAPER')
            description.innerHTML = 'SCISSORS CUTS PAPER'
        else if(computer == 'LIZARD')
            description.innerHTML = 'SCISSORS DECAPITATES LIZARD'
        return 1;
    }
    else if (computer == 'SCISSORS' && (player == 'PAPER' || player == 'LIZARD')){
        if(player == 'PAPER')
            description.innerHTML = 'SCISSORS CUTS PAPER'
        else if(player == 'LIZARD')
            description.innerHTML = 'SCISSORS DECAPITATES LIZARD'
        return 0;
    }
    else if (player == 'LIZARD' && (computer == 'PAPER' || computer == 'SPOCK')){
        if(computer == 'PAPER')
            description.innerHTML = 'LIZARD EATS PAPER'
        else if(computer == 'SPOCK')
            description.innerHTML = 'LIZARD POISONS SPOCK'
        return 1;
    }
    else if (computer == 'LIZARD' && (player == 'PAPER' || player == 'SPOCK')){
        if(player == 'PAPER')
            description.innerHTML = 'LIZARD EATS PAPER'
        else if(player == 'SPOCK')
            description.innerHTML = 'LIZARD POISONS SPOCK'
        return 0;
    }
    else if (player == 'SPOCK' && (computer == 'ROCK' || computer == 'SCISSORS')){
        if(computer == 'ROCK')
            description.innerHTML = 'SPOCK VAPORIZES ROCK'
        else if(computer == 'SCISSORS')
            description.innerHTML = 'SPOCK SMASHES SCISSORS'
        return 1;
    }
    else if (computer == 'SPOCK' && (player == 'ROCK' || player == 'SCISSORS')){
        if(player == 'ROCK')
            description.innerHTML = 'SPOCK VAPORIZES ROCK'
        else if(player == 'SCISSORS')
            description.innerHTML = 'SPOCK SMASHES SCISSORS'
        return 0;
    }
    else{
        description.innerHTML = ""
        return 2;
    }
}