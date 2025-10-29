// ========== CART FUNCTIONS ==========

// Add item to cart
function addToCart(name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let item = cart.find(i => i.name === name);

  if (item) {
    item.qty += 1;
  } else {
    cart.push({ name, price, image, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

// Display cart items
if (document.getElementById("cart-items")) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart-items");
  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = "<p style='text-align:center;'>Your cart is empty.</p>";
  } else {
    container.innerHTML = cart.map(item => `
      <div style="display:flex; align-items:center; justify-content:space-between; border-bottom:1px solid #ddd; padding:10px 0;">
        <div style="display:flex; align-items:center; gap:15px;">
          <img src="${item.image}" width="60">
          <span><b>${item.name}</b> (x${item.qty})</span>
        </div>
        <span>₹${item.price * item.qty}</span>
      </div>
    `).join('');

    total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    document.getElementById("total").innerText = `Total: ₹${total}`;
  }
}

// Checkout
function checkout() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert("Redirecting to payment page...");
  window.location.href = "payment.html";
}
