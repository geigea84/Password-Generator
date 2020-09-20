// Assignment code here

var lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var characters = "`!@#$%^&*+<>?/;:(=)|{~.,}";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function getPasswordOptions() {

  //establish password length
    var passwordLength = parseInt(prompt("How long would you like your password to be? Please enter a value from 8 to 128."));

    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Please enter a value from 8 to 128.");
      return getPasswordOptions();
    }
    else {
      console.log("Chosen password length is " + passwordLength + " characters.");
    };

  //use lowercase letters?
    var useLowerAlpha = confirm("Would you like your password to include lowercase letters?");
      console.log(useLowerAlpha);

  //use uppercase letters?
    var useUpperAlpha = confirm("Would you like your password to include uppercase letters?");
      console.log(useUpperAlpha);

  //use numbers?
    var useNumbers = confirm("Would you like your password to include numbers?");
      console.log(useNumbers);

  //use special characters?
    var useCharacters = confirm("Would you like your password to include special characters?");
      console.log(useCharacters);
}


// Write password to the #password input
function writePassword() {
 // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
getPasswordOptions();
generateBtn.addEventListener("click", writePassword);
