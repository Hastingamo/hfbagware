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



// document.getElementsByClassName("quant").addEventListener("input", updateTotal);
// let addToCartButton = document.getElementsByClassName("addToCartBtn")
// for (let i = 0; i < addToCartButton.length; i++){
//   let button = addToCartButton[i]
//   button.addEventListener("click", addToCartButton)
// }

// function addToCartClicked(event) {
//   let button = event.target
//   let shopItem = button.parentElement.parentElement
//   let title = shopItem.getElementsByClassName("name")[0].innerText;
//   console.log(title)
//   // let price = shopItem.getElementsByClassName("prs");
// }

// window.addEventListener('load', (event) => {

// const cart = [];
// const cartItemsElement = document.getElementById("cart-items");
// const productListElement = document.getElementById("product-list");

// function addToCart(productId, name, price) {
//   const existingProduct = cart.find((item) => item.id === productId);

//   if (existingProduct) {
//     existingProduct.quantity += 1;
//   } else {
//     cart.push({
//       id: productId,
//       name,
//       price,
//       quantity: 1,
//     });
//   }

//   updateCartDisplay();
// }

// function updateCartDisplay() {
//   cartItemsElement.innerHTML = "";

//   let total = 0;

//   cart.forEach((item) => {
//     const listItem = document.createElement("li");
//     listItem.textContent = `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
//     cartItemsElement.appendChild(listItem);

//     total += item.price * item.quantity;
//   });

//   document.getElementById("cart-total").textContent = total.toFixed(2);
// }

// function clearCart() {
//   cart.length = 0;
//   updateCartDisplay();
// }

// function createProductElement(id, name, price, imagePath) {
//   const productContainer = document.createElement("div");
//   productContainer.classList.add("container");

//   const imgElement = document.createElement("img");
//   imgElement.src = imagePath;
//   imgElement.alt = "";

//   const nameElement = document.createElement("h1");
//   nameElement.classList.add("name");
//   nameElement.textContent = name;

//   const priceElement = document.createElement("h1");
//   priceElement.classList.add("prs");
//   priceElement.textContent = `$${price}`;

//   const addToCartButton = document.createElement("h6");
//   addToCartButton.classList.add("rent");
//   addToCartButton.textContent = "Add to Cart";
//   addToCartButton.addEventListener("click", () => addToCart(id, name, price));

//   productContainer.appendChild(imgElement);
//   productContainer.appendChild(nameElement);

//   const starsContainer = document.createElement("div");
//   starsContainer.classList.add("stars");
//   starsContainer.appendChild(priceElement);
//   starsContainer.appendChild(addToCartButton);

//   productContainer.appendChild(starsContainer);
//   productListElement.appendChild(productContainer);
// }

// // Create product elements dynamically
// createProductElement(1, "Product 1", 20.00, "./pics/IMG_20191126_175056_0.jpg");
// createProductElement(2, "Product 2", 30.00, "./pics/IMG_20191126_174535_3_1574856014552.jpg");
// });
