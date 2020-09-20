// Assignment code here

var lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var characters = "`!@#$%^&*+<>?/;:(=)|{~.,";
var result = "";

//console.log(lowerAlpha);-----------------------------------------------------------------------------------------------------testing var format, currently spitting out as strings

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

function generatePassword() {
  var userChoices = getPasswordOptions();

  //placeholder for final array that's being built
  var finalResult = [];

  var chosenCharacterTypes = [];

  //var anotherArrayToPlugInRandomGeneration = []-------------------------------------------------------------------------------address in office hours, ask about random generator

  if (userChoices.lowercase === true) {
    chosenCharacterTypes =
  }

  if (userChoices.uppercase === true) {
    chosenCharacterTypes =
  }

  if (userChoices.numbers === true) {
    chosenCharacterTypes =
  }

  if (userChoices.specialCharacters === true) {
    chosenCharacterTypes =
  }
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

//function activation
getPasswordSelections();
//generatePassword();