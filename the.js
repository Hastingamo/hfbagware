// fetch('https://fakestoreapi.com/products')
// .then(res => res.json())
// .then(json => console.log(json));

// //get value from the api create dynamic element
// function addElement(appendin, value){
//     let div =document.createElement("div");
//     div
// 

const btns = document.querySelectorAll(".buttoon");
const mans = document.querySelectorAll(".man");
const bolu = document.querySelectorAll(".them");


for (i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", (e) => {
        e.preventDefault();
        const filter = e.target.dataset.filter;
    bolu.forEach((product)=> {
        if(filter == "all"){
            product.style.display = "block"
        }
        else{
            if(product.classList.contains(filter)){
                product.style.display = "block"
            }else {
                product.style.display = "none"

            }
        }
    })
    })
}
//search fliter
const search = document.getElementById("searchBars");
search.addEventListener("keyup", (e) =>{
    e.preventDefault();
    const searchValue = search.value.toLowerCase().trim();
    for (i =  0; i < mans.length; i++){
        if(mans[i].classList.contains(searchValue)){
            mans[i].style.display = "block";
        } else if(searchValue == ""){
            mans[i].style.display = "block";
        }else {
            mans[i].style.display = "none";

        }
    }
})

// variable declarations
// let del = document.getElementsByClassName('del');
// let itemContainer = document.getElementsByClassName("sub");




// this is the delete function code
document.addEventListener('DOMContentLoaded', function () {
    // Get the collection of elements with the class "sub"
    let itemContainers = document.getElementsByClassName("sub");
  
    // Loop through each element with the class "sub"
    for (let i = 0; i < itemContainers.length; i++) {
        itemContainers[i].addEventListener('click', function (event) {
            if (event.target.classList.contains('remove')) {
                // Delete the parent div element when the corresponding delete button is clicked
                let item = event.target.closest('.d');
                itemContainers[i].removeChild(item);
            }
        });
    }
  });
  
  // // this is the purchase function code
  
  document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with the class "purchase"
    let myButtons = document.getElementsByClassName('purchase');
  
    // Loop through each element with the class "purchase"
    for (let i = 0; i < myButtons.length; i++) {
        myButtons[i].addEventListener('click', function () {
            // Display an alert when any of the buttons is clicked
            alert('thank you for partronizing hfbagware');
        });
    }
  });
  
  
  
  document.getElementById('numericInput').addEventListener('input', function(event) {
    var value = event.target.value;
    // Remove non-numeric characters using a regular expression
    event.target.value = value.replace(/\D/g, '');
  });
  
  
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

  
// const when = document.getElementById("searchBars");
// search.addEventListener("keyup", (e) =>{
//     e.preventDefault();
//     const searchValue = search.value.toLowerCase().trim();
//     for (i =  0; i < bolu.length; i++){
//         if(them[i].classList.contains(searchValue)){
//             bolu[i].style.display = "block";
//         } else if(searchValue == ""){
//             bolu[i].style.display = "block";
//         }else {
//             bolu[i].style.display = "none";

//         }
//     }
// })