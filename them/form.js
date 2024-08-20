// function setFormMeassage(formElement, type, message){
//     const messagElement = formElement.querySelector(".error");
//     messagElement.textContent = message;
//     messagElement.classList.remove("error", "success")
//     messagElement.classList.add("erro${type}");
// }
// setFormMeassage(sign, "success", "you have successfully log in");

let createAccountForm = document.getElementById("createAccount");
let singUpForm = document.getElementById("sing");

document.getElementById("user").addEventListener("input", function() {
    var inputValue = this.value;
    var errorElement = document.querySelector("#field .error");

    if (usernameInput.value.trim().length < 7) {
        alert('Username must be at least 7 characters long.');
        return; // Prevent form submission
      }
})
// document.getElementById("emls").addEventListener("input", function() {
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

document.addEventListener('DOMContentLoaded', function () {
    var emailInput = document.getElementById('emls');
    var form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
      if (!emailInput.checkValidity()) {
        alert('Please enter a valid email address.');
        event.preventDefault();
      }
    });
  });
 

    // function validatePasswords() {
    //   var passwordInput = document.getElementById('pass');
    //   var confirmInput = document.getElementById('confirm');
    //   var passError = document.querySelector('.passError');
    //   var confirmError = document.querySelector('.confirmError');
  
    //   if (passwordInput.value !== confirmInput.value) {
    //     passError.textContent = 'Passwords do not match.';
    //     confirmError.textContent = 'Passwords do not match.';
    //   } else {
    //     passError.textContent = '';
    //     confirmError.textContent = '';
    //     // Add additional logic for successful submission if needed
    //     alert('Passwords match. Submitting form.');
    //   }
    // }





