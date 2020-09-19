// Assignment code here

var lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var characters = "`!@#$%^&*+<>?/;:(=)|{~.,}";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//establish password length
var getPasswordLength = function() {
  var passwordLength = "";

  while (passwordLength === "" || passwordLength === null) {
    passwordLength = prompt("How long would you like your password to be? Please enter a value from 8 to 128.");

    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Please enter a value from 8 to 128.");
      return getPasswordLength();
    }
    else {
      console.log("Chosen password length is " + passwordLength + " characters.");
      return passwordLength;
    }
  }
};

//use lowercase letters?
var getLowerAlpha = function() {
  var useLowerAlpha= "";

  while (useLowerAlpha === "" || useLowerAlpha === null) {
    useLowerAlpha = prompt("Would you like your password to include lowercase letters? Enter y or n.");

    if (useLowerAlpha === "y" || useLowerAlpha === "Y") {
      useLowerAlpha = true;
      console.log("Use lowercase letters.");
    }
    else if (useLowerAlpha === "n" || useLowerAlpha === "N") {
      useLowerAlpha = false;
      console.log("Do not use lowercase letters.");
    }
    else{
      window.alert("Value not valid. Please enter y or n.");
      return getLowerAlpha();
    }
  }
};

//use uppercase letters?
var getUpperAlpha = function() {
  var useUpperAlpha= "";

  while (useUpperAlpha === "" || useUpperAlpha === null) {
    useUpperAlpha = prompt("Would you like your password to include uppercase letters? Enter y or n.");

    if (useUpperAlpha === "y" || useUpperAlpha === "Y") {
      console.log("Use uppercase letters.");
    }
    else if (useUpperAlpha === "n" || useUpperAlpha === "N") {
      console.log("Do not use uppercase letters.");
    }
    else{
      window.alert("Value not valid. Please enter y or n.");
      return getUpperAlpha();
    }
  }
};

//use numbers?
var getNumbers = function() {
  var useNumbers= "";

  while (useNumbers === "" || useNumbers === null) {
    useNumbers = prompt("Would you like your password to include numbers? Enter y or n.");

    if (useNumbers === "y" || useNumbers === "Y") {
      console.log("Use numbers.");
    }
    else if (useNumbers === "n" || useNumbers === "N") {
      console.log("Do not use numbers.");
    }
    else{
      window.alert("Value not valid. Please enter y or n.");
      return getNumbers();
    }
  }
};

//use special characters?
var getCharacters = function() {
  var useCharacters= "";

  while (useCharacters === "" || useCharacters === null) {
    useCharacters = prompt("Would you like your password to include special characters? Enter y or n.");

    if (useCharacters === "y" || useCharacters === "Y") {
      console.log("Use special characters.");
    }
    else if (useCharacters === "n" || useCharacters === "N") {
      console.log("Do not use special characters.");
    }
    else{
      window.alert("Value not valid. Please enter y or n.");
      return getNumbers();
    }
  }
};

// Write password to the #password input
function writePassword() {
 // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
getPasswordLength();
getLowerAlpha();
getUpperAlpha();
getNumbers();
getCharacters();
generateBtn.addEventListener("click", writePassword);
