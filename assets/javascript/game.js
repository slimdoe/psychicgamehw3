// started my js:

var thumbUp=0;
var thumbDown=0;
var wins=0;
var losses=0;
// i added function here:
function guessWhat(result) {
var randomGuess = Math.floor(Math.random()*2);
if (guessWhat ===0) {
$("#guess-image").html(
    "<aziz-acharki-592558-unsplash.jpg>"
    );
}
   else { 
       $("#guess-image").html(
           "daniel-pascoa-253357-unsplash.jpg>"
);
   } 
   if ( result===randomGuess){
    wins++;
    $("#win-lose").html("<h2>Winner!</h2>");
    $("#wins").html("<h3>" + wins + "</h3>");
   }
   else {
    losses++;
    $("#win-lose").html("<h2>Loser!</h2>");
    $("#losses").html("<h3>" + losses + "</h3>");
  }
}
$("#heads").on("click", function() {
    headsCount++;
    $("#heads-chosen").text(headsCount);
    $("#guess").html("<b>Heads</b>");
    flipThatCoin(0);
  });
  $("#tails").on("click", function() {
    tailsCount++;
    $("#tails-chosen").text(tailsCount);
    $("#guess").html("<b>Tails</b>");
    flipThatCoin(1);
  });
  










