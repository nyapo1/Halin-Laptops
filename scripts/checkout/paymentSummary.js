import {cart} from '../../data/cart.js';
import {getProduct} from '../../data/products.js';
import {getDeliveryOption} from '../../data/deliveryOptions.js';
import {formatCurrency} from '../utils/money.js';
import { saveToStorage } from '../../data/cart.js';

function calculateTotal(orderItems) {
  let total = 0;
  
  orderItems.forEach((item) => {
    const product = getProduct(item.productId);
    // Add product price * quantity
    total += product.priceCents * item.quantity;
    
    // Add delivery price
    const deliveryOption = getDeliveryOption(item.deliveryOptionId);
    total += deliveryOption.priceCents;
  });

  // Add 10% tax
  const tax = total * 0.1;
  total += tax;

  return total ; // Convert cents to dollars
}

export function renderPaymentSummary() {
  let productPriceCents = 0;
  let shippingPriceCents = 500;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
   
  });

  const totalCents = productPriceCents + shippingPriceCents;
 


  const paymentSummaryHTML = `
    <div class="payment-summary-title">
      Order Summary
    </div>
    <div class="js-order-message"><div/>
    <div class="payment-summary-row">
      <div>Items (3):</div>
      <div class="payment-summary-money">
        Ksh ${formatCurrency(productPriceCents)}
      </div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">
        Ksh ${formatCurrency(shippingPriceCents)}
      </div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">
        Ksh ${formatCurrency(totalCents)}
      </div>
    </div>

    <button class="place-order-button button-primary js-place-order-button">
      Place your order
    </button>
     <button class="place-order-button js-view-order-button button-primary" onclick="window.location.href='orders.html'">
      View your Order
    </button>
  `;

  document.querySelector('.js-payment-summary')
    .innerHTML = paymentSummaryHTML;

    function saveOrder(orderItems) {
 

  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  
  const order = {
    id: generateOrderId(),
    items: orderItems.map(item => {
    
      
      return {
        productId: item.productId,
        quantity: item.quantity,
        deliveryOptionId: item.deliveryOptionId,
        deliveryDate: item.deliveryDate,
        product: getProduct(item.productId)
      };
    }),
    orderDate: new Date().toLocaleDateString(),
    total: Number(calculateTotal(orderItems).toFixed(2))
  };
  
  
  
  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));
}

function generateOrderId() {
  return Math.random().toString(36).substr(2, 9);
}

    document.querySelector('.js-place-order-button')
    .addEventListener('click', () => {
      if (cart.length === 0) {
        const messageElement = document.querySelector('.js-order-message');
        messageElement.innerHTML = 'Cart Empty!!';
        messageElement.style.color = 'red';
        return;
      }

      // Save the order before clearing cart
      saveOrder([...cart]);
      


      // Clear the cart
      cart.length = 0;
      saveToStorage();

      let totalQuantity=0;

      localStorage.setItem('cartQuantity', totalQuantity);
      
      // Show success message
      const messageElement = document.querySelector('.js-order-message');
      messageElement.innerHTML = 'Order placed successfully!';
      messageElement.style.color = 'green';
      messageElement.classList.add('success');
      
      // Hide message after 3 seconds and redirect
      setTimeout(() => {
        messageElement.classList.remove('success');
        window.location.href = 'orders.html';
      }, 1000);
    });
}