alert("You are now playing a game")
var slaying = true;
var youHit = Math.floor(Math.random()*2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;
while(slaying){

    var slaying = false;

    if(youHit) {
        alert("You hit!");
        totalDamage += damageThisRound;
        if(totalDamage >= 4) {
            alert("You win!");
            slaying = false; }
        else{
            youHit = Math.floor(Math.random()*2);}
    }
    else{
        alert("You missed!");
        slaying = false; }
}