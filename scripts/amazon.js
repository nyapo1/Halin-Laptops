import {cart, addToCart} from '../E-commerce-Pro/api/data/cart.js';
import {products} from '../E-commerce-Pro/api/data/products.js';
import {formatCurrency} from './utils/money.js';

document.addEventListener('DOMContentLoaded', () => {
  const savedQuantity = localStorage.getItem('cartQuantity');
  if (savedQuantity) {
      document.querySelector('.js-cart-quantity').textContent = savedQuantity; // Set initial display
  }

  // Add event listener for the search input
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent the default form submission
      const query = searchInput.value.trim();
      if (query) {
        // Redirect to the search results page with the query
        window.location.href = `search.html?query=${encodeURIComponent(query)}`;
      }
    }
  });
});

let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="${product.getStarsUrl()}">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        ${product.getPrice()}
      </div>

   <div class="product-quantity-container">
    <select class="js-quantity-select">
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
    </select>
</div>

      ${product.extraInfoHTML()}

      <div class="product-spacer"></div>

      <div class="added-to-cart text-center">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart"
      data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
  `;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector('.js-cart-quantity')
    .innerHTML = cartQuantity;
}

document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      const quantitySelect = button.closest('.product-container').querySelector('.js-quantity-select');
      const quantity = parseInt(quantitySelect.value, 10);
      
      addToCart(productId, quantity);
      updateCartQuantity();

      // Show the "Added to cart" message
      const addedToCartMessage = button.closest('.product-container').querySelector('.added-to-cart');
      addedToCartMessage.style.opacity = 1; // Make it visible
      setTimeout(() => {
          addedToCartMessage.style.opacity = 0; // Hide it after a short delay
      }, 2000);
    });
  });