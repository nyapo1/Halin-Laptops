import { products } from '../data/products.js'; // Adjust the import path as necessary

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get('query');

  if (query) {
    // Call the function to display filtered products
    displayFilteredProducts(query);
  }
});

function displayFilteredProducts(query) {
  const filteredProducts = products.filter(product => {
    const productName = product.name.toLowerCase();
    const productKeywords = product.keywords.map(keyword => keyword.toLowerCase());
    const searchQuery = query.toLowerCase();

    // Check if the product name or any of the keywords include the search query
    return productName.includes(searchQuery) || productKeywords.some(keyword => keyword.includes(searchQuery));
  });

  renderProducts(filteredProducts);
}

function renderProducts(products) {
  const productsGrid = document.querySelector('.products-grid');
  productsGrid.innerHTML = ''; // Clear previous results

  if (products.length === 0) {
    productsGrid.innerHTML = '<p>No products found.</p>';
    return;
  }

  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product-container');
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: $${(product.priceCents / 100).toFixed(2)}</p>
      <p>Rating: ${product.rating.stars} (${product.rating.count} reviews)</p>
    `;
    productsGrid.appendChild(productElement);
  });
} 