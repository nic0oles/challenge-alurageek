const apiUrl = "http://localhost:3000/products";
const productsList = document.getElementById("products-list");
const addProductForm = document.getElementById("add-product-form");

// Carregar produtos ao carregar a página
document.addEventListener("DOMContentLoaded", fetchProducts);

// Função para buscar produtos (GET)
async function fetchProducts() {
  productsList.innerHTML = "";
  const response = await fetch(apiUrl);
  const products = await response.json();

  products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$ ${product.price.toFixed(2)}</p>
    `;

    productsList.appendChild(productCard);
  });
}

// Função para adicionar produto (POST)
addProductForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("product-name").value;
  const price = parseFloat(document.getElementById("product-price").value);
  const image = document.getElementById("product-image").value;

  const newProduct = { name, price, image };

  await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  });

  addProductForm.reset();
  fetchProducts(); // Atualizar lista de produtos
});
