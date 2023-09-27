const firstCard = Math.floor(Math.random() * 10) + 2;
const secondCard = Math.floor(Math.random() * 10) + 2;
const sum = firstCard + secondCard;

console.log(`first card: ${firstCard}, second card: ${secondCard}, total: ${sum}`);

switch (true) {
    case (sum <= 11):
        console.log("Safe to draw another card");
        break;
    case (sum === 21):
        console.log("Blackjack! You win");
        break;
    case (sum > 21):
        console.log("Busted! You lose");
        break;
    default:
        console.log("Your move");
        break;
}