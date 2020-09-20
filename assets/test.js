//take in 5 strings from the user and repeat all 5 combined
//declare and initialize combined string to empty string value
var currentCombinedString = "";
//repeat the other functions 5 times
for(var i = 0; i < 5; i++) {
    combineStrings( getUserInput() );
}
//alert user of combined string
window.alert(currentCombinedString);
//grabs user input through a prompt and returns it
function getUserInput() {
    var userString = prompt("Give me a string!");
    return userString;
}
//combines inputString with the currentCombinedString
function combineStrings(inputString) {
    currentCombinedString = currentCombinedString + " " + inputString;
}