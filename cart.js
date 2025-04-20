// cart.js

// Initialize cart with localStorage data
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add items to the cart
function addToCart(productName, productPrice) {
  cart.push({ name: productName, price: productPrice });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${productName} added to cart!`);
}

// Function to view items in the cart
function viewCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartList = document.getElementById('cartItems');
  let total = 0;

  // Clear the cart list before displaying
  cartList.innerHTML = '';

  // Add each item to the cart list
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₹${item.price}`;
    cartList.appendChild(li);
    total += item.price;
  });

  // Update the total price
  document.getElementById('total').textContent = `Total: ₹${total}`;
}

// Function to clear the cart
function clearCart() {
  localStorage.removeItem('cart');
  alert('Cart has been cleared!');
  viewCart(); // Refresh the cart view
}
