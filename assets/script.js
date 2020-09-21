// Assignment code here

var lowerAlpha = "abcdefghijklmnopqrstuvwxyz".split("");
var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "0123456789".split("");
var characters = "`!@#$%^&*+<>?/;:(=)|{~.,".split("");

console.log(lowerAlpha, upperAlpha, numbers, characters);

//"It does this:"
//"1. Asks users so it can get all the options"
//"2. Automatically sets the object and then spits it out"

function getPasswordSelections() {

  //establish password length
  var passwordLength = parseInt(prompt("How long would you like your password to be? Please enter a value from 8 to 128."));

  //weed out unacceptable responses
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) === true) {
    window.alert("Please enter a value from 8 to 128.");
    return getPasswordSelections();
  }
  else {
    console.log("Chosen password length is " + passwordLength + " characters.");
  }

//use lowercase letters?
  var useLowerAlpha = confirm("Would you like your password to include lowercase letters? Click OK for Yes, or Cancel for No.");
    console.log(useLowerAlpha);

//use uppercase letters?
  var useUpperAlpha = confirm("Would you like your password to include uppercase letters? Click OK for Yes, or Cancel for No.");
    console.log(useUpperAlpha);

//use numbers?
  var useNumbers = confirm("Would you like your password to include numbers? Click OK for Yes, or Cancel for No.");
    console.log(useNumbers);

//use special characters?
  var useCharacters = confirm("Would you like your password to include special characters? Click OK for Yes, or Cancel for No.");
    console.log(useCharacters);

//if all character types are false
  if (useLowerAlpha === false && useUpperAlpha === false && useNumbers === false && useCharacters === false){
    window.alert("You must select at least one character type.  Please try again.")
    return getPasswordSelections();
  }

//create object for passwordOptions
  var passwordOptions = {
    length: passwordLength,
    lowercase: useLowerAlpha,
    uppercase: useUpperAlpha,
    numbers: useNumbers,
    specialCharacters: useCharacters
  }

  console.log(passwordOptions);
  //return used to access passwordOptions when called on in later function "function generatePassword() { carriage return, tab, var userChoices = getPasswordSelections(); }"
  return passwordOptions;

};

//generate random value math.floor returns to use in for loop <!--see notes before for loop -- array for random index-->
//"The length property sets or returns the number of elements in an array."
function randomCharacters(array) {

  var randomIndex = Math.floor(Math.random() * array.length);
  var randomCharacter = array[randomIndex];

  return randomCharacter;
}

//"So now to access that object- since the first function named getPasswordSelections is the one spitting out the object inside the second function you can call it"

function generatePassword() {
  var userChoices = getPasswordSelections();

  //placeholder for final password that's being built
  var finalPassword = [];

  //array for the character types chosen by the user
  var chosenCharacterTypes = [];

  //var anotherArrayToPlugInRandomGeneration? = []-------------------------------------------------------------------------------address in office hours, ask about random generator

  //check boolean of user choices to include in chosenCharacterTypes
  if (userChoices.lowercase === true) {
    chosenCharacterTypes = chosenCharacterTypes.concat(lowerAlpha);
    //userChoices.passwordLength -= 1;
  }

  if (userChoices.uppercase === true) {
    chosenCharacterTypes = chosenCharacterTypes.concat(upperAlpha);
    //userChoices.passwordLength -= 1;
  }

  if (userChoices.numbers === true) {
    chosenCharacterTypes = chosenCharacterTypes.concat(numbers);
    //userChoices.passwordLength -= 1;
  }

  if (userChoices.specialCharacters === true) {
    chosenCharacterTypes = chosenCharacterTypes.concat(characters);
    //userChoices.passwordLength -= 1;
  }

  //eg password is 8 = all userChoices true, 4 characters from all selections, add 1 char from lowercase, add 1 char from uppercase, add 1 char from numbers, add 1 char from specialChar

  //console log here notes a created array based on client choices to use as a random index for Math.random
  console.log(chosenCharacterTypes, userChoices.length);

  //"You will need a for loop that iterates the number of times the user specified and grabs a character from your array by a random index" - use a separate function, it broke this one
  //"Inside your for loop, create a variable that store the random value math.floor returns and then you can access that in your array with bracket notation arrayName[variable]"
  //"This will grab the value at the index of whatever number you randomly generated and stored in the variable"
  //"Then you can push those values into a final password array"

  for (var i = 0; i < userChoices.length; i++) {
    var randomChar = randomCharacters(chosenCharacterTypes);

    finalPassword.push(randomChar)
  }

  console.log(finalPassword);

  return finalPassword.join("");

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);