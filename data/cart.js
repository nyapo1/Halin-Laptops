export let cart;

loadFromStorage();

export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem('cart'));

  if (!cart) {
    cart = [{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '1'
    }, {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1,
      deliveryOptionId: '2'
    }];
  }
}

export function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId, quantity) {
  let matchingItem = cart.find(cartItem => cartItem.productId === productId);

  if (matchingItem) {
    matchingItem.quantity += quantity; // Update quantity
  } else {
    cart.push({
      productId: productId,
      quantity: quantity, // Set initial quantity
      deliveryOptionId: '1'
    });
  }

  saveToStorage();
  updateCartQuantity(); // Update the displayed cart quantity
}

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
}

export function updateCartQuantity() {
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  localStorage.setItem('cartQuantity', totalQuantity); // Save to local storage
  document.querySelector('.js-cart-quantity').textContent = totalQuantity; // Update display
}

export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
}

export function clearCart() {
    cart = [];
    saveToStorage();
    updateCartQuantity(); // Update the displayed cart quantity
}