p// function setFormMeassage(formElement, type, message){
//     const messagElement = formElement.querySelector(".error");
//     messagElement.textContent = message;
//     messagElement.classList.remove("error", "success")
//     messagElement.classList.add("erro${type}");
// }
// setFormMeassage(sign, "success", "you have successfully log in");



function validateInput() {
    // Get the user input value
    var userInput = document.getElementById('user').value;

    // Get the error message element
    var errorMessageElement = document.getElementById('error-message');

    // Check if the input is at least 7 characters long
    if (userInput.length < 7) {
      // Display an error message
      errorMessageElement.innerText = 'Error: User name must be at least 7 characters long';
      
      // Optionally, you can focus back on the input field
      document.getElementById('user').focus();
    } else {
      // Clear any existing error messages
      errorMessageElement.innerText = '';
    }
}
function validateEmail() {
    // Get the email input value
    var emailInput = document.getElementById('emailing').value;

    // Get the error message element
    var errorMessageElement = document.getElementById('error-messages');

    // Regular expression for email format validation
    var emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the input is in email format
    if (!emailFormat.test(emailInput)) {
      // Display an error message
      errorMessageElement.innerText = 'Error: Please enter a valid email address';
      
      // Optionally, you can focus back on the email input field
      document.getElementById('emailing').focus();
    } else {
      // Clear any existing error messages
      errorMessageElement.innerText = '';
    }
  }
  function validatePasswords() {
    // Get the password and confirm password input values
    var passwordInput = document.getElementById('password').value;
    var confirmInput = document.getElementById('confirm').value;

    // Get the error message element
    var errorMessageElement = document.getElementById('error-messagess');

    // Check if the passwords match
    if (passwordInput !== confirmInput) {
      // Display an error message
      errorMessageElement.innerText = 'Error: Passwords do not match';
      
      // Optionally, you can focus back on the password or confirm password input field
      // For example, focusing on the password input field:
      document.getElementById('password').focus();
    } else {
      // Clear any existing error messages
      errorMessageElement.innerText = '';
    }
  }

// document.getElementById("Emails").addEventListener("input", function() {
//     var emailValue = this.value;
//     var emailErrorElement = document.getElementById("emailError");

//     // Regular expression for email validation
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailRegex.test(emailValue)) {
//         emailErrorElement.style.display = "block";
//     } else {
//         emailErrorElement.style.display = "none";
//     }
// });

// document.addEventListener('DOMContentLoaded', function () {
//     var emailInput = document.getElementById('Emails');
//     var form = document.querySelector('form');

//     form.addEventListener('submit', function (event) {
//       if (!emailInput.checkValidity()) {
//         alert('Please enter a valid email address.');
//         event.preventDefault();
//       }
//     });
//   });

//   document.getElementById("passwording").addEventListener("input", function() {
//     var inputValue = this.value;
//     var errorElement = document.querySelector(".input-field .errors");

//     if (inputValue.length < 6) {
//         errorElement.style.display = "block";
//     } else {
//         errorElement.style.display = "none";
//     }
// })


// function toggleForm(){
//     if(createAccountForm.style.display == "none"){
//         createAccountForm.style.display = "block";
//         singUpForm.style.display = "none";
//     }else{
//         createAccountForm.style.display = "none";
//         singUpForm.style.display = "block";
//     }
    
//
