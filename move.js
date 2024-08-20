document.addEventListener('DOMContentLoaded', () => {
  const cartItems = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');
  
  const removeFromCart = (index) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); // Remove item at the specified index
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart(); // Update the cart display after removal
  };

  // Retrieve cart from localStorage
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Initialize total

  // Build HTML for cart items and calculate total
  const updateCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    // Build HTML for cart items
    const itemsHTML = cart.map((item, index) => {
        total += item.price; // Update total
        return `
            <li>
                <img src="${item.imgSrc}" alt="${item.product}" class="cart-img">
                <div class="cart-details">
                    <span>${item.product}</span>
                    <span>$${item.price}</span>
                    <div class="removeFromCart">
                      <button onclick="removeFromCart(${index})">Remove</button>
                    </div>
                </div>
            </li>
        `;
    }).join('');

    // Update DOM
    cartItems.innerHTML = itemsHTML;
    // totalElement.textContent = `Total: $${total}`;
};

// Initialize cart display
updateCart();

// Expose removeFromCart to global scope
window.removeFromCart = removeFromCart;
});
function showSideBar(){
  const sidebars = document.querySelector(".sidebar") 
  sidebars.style.display = "flex"
  // sidebars.style.flex-direction :"colum"
}
function showSideBars(){
  const sidebars = document.querySelector(".sidebars") 
  sidebars.style.display = "flex"
}
function hideSideBar(){
  const sidebars = document.querySelector(".sidebar") 
  sidebars.style.display = "none"
}
function hideSideBars(){
  const sidebars = document.querySelector(".sidebars") 
  sidebars.style.display = "none"
}
