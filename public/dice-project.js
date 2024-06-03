function randomNumber() {
    return Math.floor((6 * Math.random()) + 1);
}

function checkWinner(p1, p2) {
    if(p1 < p2) {
        document.querySelector(".container > h1").innerHTML = "Player 2 Wins! 🏴";
    }
    else if(p1 > p2) {
        document.querySelector(".container > h1").innerHTML = "🏳️ Player 1 Wins!";
    }
    else {
        document.querySelector(".container > h1").innerHTML = "Draw!";
    }
}

function main() {
    var randomNumber1 = randomNumber();
    var randomNumber2 = randomNumber();
    
    document.querySelector(".img1").setAttribute("src", "../assets/images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "../assets/images/dice" + randomNumber2 + ".png");
    checkWinner(randomNumber1, randomNumber2);
}

main();