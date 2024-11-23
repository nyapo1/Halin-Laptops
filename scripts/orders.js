// Function to clean up invalid orders from localStorage
function cleanupStorage() {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  const validOrders = orders.filter(order => 
      order && 
      order.items && 
      order.items.length > 0 && 
      order.total > 0
  );
  localStorage.setItem('orders', JSON.stringify(validOrders));
}

// Call cleanupStorage on load
cleanupStorage();

// Function to add a new order to localStorage
function addToOrders(cart) {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];

  const order = {
      id: generateOrderId(), // Function to generate a unique order ID
      items: cart.map(item => ({
          ...item,
          product: getProduct(item.productId) // Get product details
      })),
      orderDate: new Date().toISOString(),
      total: calculateTotal(cart) // Function to calculate total price
  };

  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));
  return order;
}

// Function to render orders on the page
function renderOrders() {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  const ordersGrid = document.querySelector('.orders-grid');
  
  const validOrders = orders.filter(order => order.items && order.items.length > 0);
  
  if (validOrders.length === 0) {
      ordersGrid.innerHTML = '<h2 style="color: green;">No orders found</h2>';
      return;
  }

  ordersGrid.innerHTML = validOrders.reverse().map(order => `
      <div class="order-container">
          <div class="order-header">
              <div class="order-header-left-section">
                  <div class="order-date">
                      <div class="order-header-label">Order Placed:</div>
                      <div>${order.orderDate || 'N/A'}</div>
                  </div>
                  <div class="order-total">
                      <div class="order-header-label">Total:</div>
                      <div>$${(order.total || 0).toFixed(2)}</div>
                  </div>
              </div>
              <div class="order-header-right-section">
                  <div class="order-header-label">Order ID:</div>
                  <div>${order.id || 'N/A'}</div>
              </div>
          </div>
          <div class="order-details-grid">
              ${order.items.map(item => `
                  <div class="product-image-container">
                      <img src="${item.product.image}">
                  </div>
                  <div class="product-details">
                      <div class="product-name">${item.product.name}</div>
                      <div class="product-delivery-date">Arriving on: ${item.deliveryDate || 'Date not available'}</div>
                      <div class="product-quantity">Quantity: ${item.quantity || 1}</div>
                      <button class="buy-again-button button-primary" data-product-id="${item.product.id}">
                          <img class="buy-again-icon" src="images/icons/buy-again.png">
                          <span class="buy-again-message">Buy it again</span>
                      </button>
                  </div>
                  <div class="product-actions">
                      <a href="tracking.html?orderId=${order.id}" class="track-package-button button-secondary" data-order-id="${order.id}" data-item-id="${item.product.id}">
                          Track package
                      </a>
                  </div>
              `).join('')}
          </div>
      </div>
  `).join('');
}

// Call renderOrders on page load
renderOrders();

// Function to show a message when an item is added to the cart
function showAddedToCartMessage() {
  let messageElement = document.querySelector('.added-to-cart-message');
  if (!messageElement) {
      messageElement = document.createElement('div');
      messageElement.className = 'added-to-cart-message';
      messageElement.textContent = 'Item added to cart';
      document.body.appendChild(messageElement);
  }

  setTimeout(() => {
      messageElement.classList.add('show');
  }, 100);

  setTimeout(() => {
      messageElement.classList.remove('show');
  }, 2000);
}

// Event listener for tracking packages and reordering items
document.querySelector('.orders-grid').addEventListener('click', (event) => {
  const trackButton = event.target.closest('.track-package-button');
  if (trackButton) {
      const orderId = trackButton.dataset.orderId;
      const itemId = trackButton.dataset.itemId;
      
      const orders = JSON.parse(localStorage.getItem('orders')) || [];
      const order = orders.find(order => order.id === orderId);
      
      if (order) {
          const item = order.items.find(item => item.product.id === itemId);
          if (item) {
              const trackingData = {
                  orderId: orderId,
                  orderDate: order.orderDate,
                  items: [item] // Only store the clicked item
              };
              localStorage.setItem('trackingOrder', JSON.stringify(trackingData));
          }
      }
  }

  const buyAgainButton = event.target.closest('.buy-again-button');
  if (buyAgainButton) {
      const productId = buyAgainButton.dataset.productId;
      
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const existingItem = cart.find(item => item.productId === productId);
      if (existingItem) {
          existingItem.quantity += 1;
      } else {
          cart.push({
              productId,
              quantity: 1,
              deliveryOptionId: '1' // Default delivery option
          });
      }
      
      localStorage.setItem('cart', JSON.stringify(cart));
      showAddedToCartMessage();
  }
});