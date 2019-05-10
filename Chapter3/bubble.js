var scores = [ 60, 50, 60, 58, 54, 54,
               58, 50, 52, 54, 48, 69,
               34, 55, 51, 52, 44, 51,
               69, 64, 66, 55, 52, 61,
               46, 31, 57, 52, 44, 18,
               41, 53, 55, 61, 51, 44];
var costs =  [.25, .27, .25, .25, .25, .25,
              .33, .31, .25, .29, .27, .22,
              .31, .25, .25, .33, .21, .25,
              .25, .25, .28, .25, .24, .22,
              .20, .25, .30, .25, .24, .25,
              .25, .25, .27, .25, .26, .29 ];
var bestCost = 0;

function printAndGetHighScore(scores){
    var highScore = 0;
    for (var scoreIndex = 0; scoreIndex < scores.length; scoreIndex++) {
        console.log("Bubble solution #" + scoreIndex + " score: " + scores[scoreIndex]);
        if(scores[scoreIndex] > highScore) {
            highScore = scores[scoreIndex];
        }
    }
    return highScore;
 }//end printAndGetHighScore

 function findHighest(scores, highScore){
    var highBubbles = [];
    for (var i = 0; i<scores.length; i++){
        if(scores[i] == highScore) {
            highBubbles.push(i);
        }
    }
    return highBubbles;
 } //end findHighest
function getMostCostEffectiveSolution(scores, costs, highBubbles){
    var best = 1000;
    var bestCostIndex = 0;
    for (var i = 0; i < scores.length; i++){
        //console.log("-->" + costs[i] + " " + best + "length: "+ highBubbles.length + "i: " + i);
        if(scores[i] == highScore){
            if (costs[i] < best){
                bestCostIndex = i;
                best = costs[i];
               // console.log("bestindex: " + bestCostIndex);
            }
    }   
    }
    return bestCostIndex;
}
 var highScore = printAndGetHighScore(scores);
 var highest = findHighest(scores, highScore);
 var bestCost = getMostCostEffectiveSolution(scores, costs, highBubbles);
console.log("Bubbles tests:" + scores.length);
console.log("Highest bubble score: " + highScore);
console.log("Solution with the highest score: " + highBubbles);
console.log("Solution with the best cost: " + bestCost);