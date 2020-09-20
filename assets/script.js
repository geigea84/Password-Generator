// Assignment code here

var lowerAlpha = "abcdefghijklmnopqrstuvwxyz".split("");
var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "0123456789".split("");
var characters = "`!@#$%^&*+<>?/;:(=)|{~.,".split("");

console.log(lowerAlpha, upperAlpha, numbers, characters);

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
  return passwordOptions;

};

//grabbing random characters from the created object passwordOptions
function randomCharacters() {

  //finalPassword = chosenCharacterTypes[Math.floor(Math.random() * userChoices.passwordLength)];-----------------------------------------------check askBCS

}

function generatePassword() {
  var userChoices = getPasswordSelections();

  //placeholder for final password that's being built
  var finalPassword = ("");

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

  console.log(chosenCharacterTypes, userChoices.passwordLength);

  for (var i = 0; i < userChoices.passwordLength; i++) {

  };

  console.log(finalPassword);

  return finalPassword;

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