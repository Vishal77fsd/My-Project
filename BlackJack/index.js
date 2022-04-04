let cards = [4, 5];
let sum = cards[0] + cards[1];
let isBlackJack = false;
let isAlive = false;
var messagelEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerChips = document.getElementById("player-el");

function startGame() {
    renderGame();
}

let player = {
    name: "Vishal",
    chips: 100
}

playerChips.innerHTML = player.name + ": $ " + player.chips;


function renderGame() {

    sumEl.textContent = "Sum : " + sum;

    cardsEl.textContent = "Cards : ";

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    let message = "";
    if (sum < 21) {
        message = "Do you want to draw a new card?";
        messagelEl.textContent = "Do you want to draw a new card?";
        isAlive = true;
    } else if (sum === 21) {
        message = "whoo! you've got blackjack";
        messagelEl.textContent = "whoo! you've got blackjack";
        isBlackJack = true;
    } else if (sum > 21) {
        message = "You're out of the game";
        messagelEl.textContent = "You're out of the game";
        isAlive = false;
    }

}

function newCard() {

    if (isAlive === true && isBlackJack === false) {
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();

    }
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;

    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}