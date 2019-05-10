var location1 = Math.floor(Math.random() * 5);
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid number");
    } else {
        guesses = guesses + 1;
        if (guess == location1) {
         hits = incrementHits(hits);
         location1 = null;
        } else if (guess == location2) {
            hits = incrementHits(hits);
            location2 = null;
        } else if (guess == location3) {
            hits = incrementHits(hits);
            location3 = null;
            
        } else {
            alert("Miss!");
        }
        if (hits == 3) {
            isSunk = true;
            alert("You sank my Battleship!!");
        }

    }

}
var stats = "It took " + guesses + " guesses to sink my battleship.  Accuracy = " + (3/guesses);
alert(stats);

function incrementHits(num){
    var numHits = num + 1;
    alert("Hit! " + numHits);
    return numHits;
}

