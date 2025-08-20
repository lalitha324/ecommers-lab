const products = [
  { id: 1, name: "Laptop", price: 799, image: "https://via.placeholder.com/200x150?text=Laptop" },
  { id: 2, name: "Phone", price: 499, image: "https://via.placeholder.com/200x150?text=Phone" },
  { id: 3, name: "Headphones", price: 199, image: "https://via.placeholder.com/200x150?text=Headphones" }
];

const cart = [];

function renderProducts() {
  const productList = document.getElementById("product-list");
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartCount = document.getElementById("cart-count");
  const cartList = document.getElementById("cart-list");
  cartCount.textContent = cart.length;
  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });
}

renderProducts();
