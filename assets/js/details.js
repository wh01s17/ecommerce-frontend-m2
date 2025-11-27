import { products } from "./data.js";
import { updateCartCount } from "./cart.js";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const product = products.find((p) => p.id == id);

function addToCart(productId) {
    const cart = JSON.parse(localStorage.getItem("cart")) ?? [];

    const existing = cart.find((item) => item.id === productId);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ id: productId, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Producto agregado al carrito");
    updateCartCount();
}

if (!product) {
    document.getElementById(
        "product-details"
    ).innerHTML = `<div class="alert alert-danger">Producto no encontrado.</div>`;
} else {
    document.getElementById("product-details").innerHTML = `
        <div class="row">
            <div class="col-md-6 d-flex justify-content-center">
                <img 
                    src="${product.img}" 
                    alt="${product.name}" 
                    class="img-fluid rounded shadow"
                >
            </div>

            <div class="col-md-6">
                <h1 class="fw-bold mb-3">${product.name}</h1>

                <p class="text-muted">${product.description}</p>

                <h3 class="text-success fw-bold mb-4">
                    $${product.price.toLocaleString("es-CL")}
                </h3>

                <button 
                    class="btn btn-primary btn-lg w-100 mb-3"
                    onclick="addToCart(${product.id})"
                >
                    <i class="fa-solid fa-cart-plus"></i>
                    Agregar al carrito
                </button>

                <a href="products.html" class="btn btn-outline-secondary w-100">
                    Volver a productos
                </a>
            </div>
        </div>
    `;
}

window.addToCart = addToCart;
