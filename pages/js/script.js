let cart = [];

let products = [
  { name: 'Organic Grape', image: '/imgs/graps.png', price: 12.40, quantity: 1 },
  { name: 'Organic Corn', image: '/imgs/corn.png', price: 32.20, quantity: 1 },
  { name: 'Organic Cherry', image: '/imgs/cherry.png', price: 15.45, quantity: 1 },
  { name: 'Organic Lemon', image: '/imgs/lemon.png', price: 19.45, quantity: 1 },
  { name: 'Organic Tomato', image: '/imgs/tomoato.png', price: 12.40, quantity: 1 },
  { name: 'Organic Lettuce', image: '/imgs/lettuc.png', price: 12.40, quantity: 1 },
  { name: 'Organic Potato', image: '/imgs/potato.png', price: 14.40, quantity: 1 },
  { name: 'Organic Mashroom', image: '/imgs/mashroom.png', price: 12.40, quantity: 1 },
  { name: 'Organic Banana', image: '/imgs/banana.png', price: 12.40, quantity: 1 },
  { name: 'Organic Bean', image: '/imgs/bean.png', price: 14.40, quantity: 1 },
  { name: 'Organic Carrot', image: '/imgs/carrot.png', price: 12.40, quantity: 1 },
  { name: 'Organic Apple', image: '/imgs/apple.jpg', price: 14.40, quantity: 1 }
];

function addToCart(product) {
  let existProductIndex = cart.findIndex(item => item.name === product.name);

  if (existProductIndex !== -1) {

    alert('You have already added this item to the cart!');

  } else {
    cart.push({ ...product });
    updateCartCount();
    updateCartUI();
  }
}

function updateCartCount() {
  document.querySelector('.cartCount').innerHTML = `$${calculateTotalPrice()} / ${cart.length} items`;
}

function calculateTotalPrice() {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
}

function updateCartUI() {
  let cartHTML = '';

  cart.forEach((product, index) => {
    cartHTML += `
      <div class="d-flex align-items-center border p-2 mb-3">
        <div class="me-3">
          <img class="img-fluid price" style="max-width: 80px;" src="${product.image}" alt="${product.name}">
        </div>
        <div class="flex-grow-1">
          <h5 class="mb-1">${product.name}</h5>
          <p class="mb-0">Price: $${product.price} x ${product.quantity}</p>
          <p class="mb-0 fw-bold">Total: $${(product.price * product.quantity).toFixed(2)}</p>
        </div>
        <div class="ms-3 d-flex flex-column">
          <button class="btn btn-info mb-2" onclick="increaseQuantity(${index})">Increase Quantity</button>
          <button class="btn btn-warning mb-2" onclick="decreaseQuantity(${index})">Decrease Quantity</button>
          <button class="btn btn-danger py-2" onclick="removeFromCart(${index})">Remove</button>
        </div>
      </div>
    `;
  });

  document.querySelector('.offcanvas-body').innerHTML = cartHTML;
}

function increaseQuantity(index) {
  cart[index].quantity += 1;
  updateCartCount();
  updateCartUI();
}

function decreaseQuantity(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  }
  updateCartCount();
  updateCartUI();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartCount();
  updateCartUI();
}


document.getElementById('sticky-btn').addEventListener('click', function () {

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});