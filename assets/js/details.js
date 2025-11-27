import { products } from "./data.js";
import { addToCart } from "./cart.js";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const product = products.find((p) => p.id == id);

if (!product) {
    document.getElementById(
        "product-details"
    ).innerHTML = `<div class="alert alert-danger">Producto no encontrado.</div>`;
} else {
    document.getElementById("product-details").innerHTML = `
    <div class="row g-4">
        <div class="col-md-6">
            <div class="position-relative">
                <img 
                    src="${product.img}" 
                    alt="${product.name}" 
                    class="img-fluid rounded-3 shadow-lg w-100"
                >
                <div class="position-absolute top-0 end-0 m-3">
                    <span class="badge bg-warning text-dark px-3 py-2 rounded-pill fs-6">
                        ⭐ ${product.rating}
                    </span>
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="d-flex flex-column h-100">
                <span class="badge bg-secondary text-light mb-3 align-self-start px-3 py-2">
                    ${product.category || "Producto"}
                </span>

                <h1 class="display-5 fw-bold text-light mb-3">
                    ${product.name}
                </h1>

                <div class="d-flex align-items-center gap-2 mb-3">
                    <div class="text-warning">
                        ${"⭐".repeat(Math.floor(product.rating))}${"☆".repeat(
        5 - Math.floor(product.rating)
    )}
                    </div>
                    <span class="text-light small">
                    (${product.rating}/5)
                    </span>
                </div>

                <p class="text-light fs-6 lh-lg mb-4">
                    ${product.description}
                </p>

                <h2 class="text-info fw-bold mb-4">
                    $${product.price.toLocaleString("es-CL")}
                </h2>

                <div class="mb-4">
                    <h6 class="fw-semibold text-light mb-3">Características:</h6>
                    <ul class="list-unstyled">
                        <li class="mb-2">
                            <i class="fa-solid fa-check-circle text-success me-2"></i>
                            <span class="text-light">Envío gratis</span>
                        </li>
                        <li class="mb-2">
                            <i class="fa-solid fa-check-circle text-success me-2"></i>
                            <span class="text-light">Garantía de 1 año</span>
                        </li>
                        <li class="mb-2">
                            <i class="fa-solid fa-check-circle text-success me-2"></i>
                            <span class="text-light">Devolución en 30 días</span>
                        </li>
                    </ul>
                </div>

                <div class="mt-auto">
                    <button 
                        id="add-to-cart-btn"
                        class="btn btn-primary btn-lg w-100 mb-2 py-3 fw-semibold shadow"
                    >
                        <i class="fa-solid fa-cart-plus me-2"></i>
                        Agregar al carrito
                    </button>

                    <a href="products.html" class="btn btn-outline-light w-100 py-2">
                        <i class="fa-solid fa-arrow-left me-2"></i>
                        Volver a productos
                    </a>
                </div>
            </div>
        </div>
    </div>
`;
}

document.getElementById("add-to-cart-btn").addEventListener("click", () => {
    addToCart(product);
});
