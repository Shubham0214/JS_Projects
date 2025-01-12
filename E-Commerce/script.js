document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product 1", price: 29.99 },
    { id: 2, name: "Product 2", price: 49.99 },
    { id: 3, name: "Product 3", price: 39.99 },
  ];

  const cart = [];

  const productList = document.getElementById("product-list");

  const cartItems = document.getElementById("cart-items");

  const emptyCartMessage = document.getElementById("empty-cart");

  const cartTotalMessage = document.getElementById("cart-total");
  const totalPrice = document.getElementById("total-price");
  const checkOutButton = document.getElementById("checkout-btn");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span>${product.name} - $${product.price.toFixed(2)}</span>
   <button data-id=${product.id}>Add to cart</button>`;

    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      addToCart(product);
    }
  });

  function addToCart(product) {
    cart.push(product);
  }

  function renderCart() {}
});
