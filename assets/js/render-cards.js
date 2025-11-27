import { addToCart } from "./cart.js";

export function renderCards(products, targetSelector) {
    const container = document.querySelector(targetSelector);
    if (!container) return;

    container.innerHTML = products
        .map(
            (p) => `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div id="card" class="card h-100 shadow text-light bg-transparent">
                <a href="/details.html?id=${p.id}">
                    <img 
                        src="${p.img}" 
                        class="card-img-top" 
                        alt="${p.name}"
                    />
                </a>
                

                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${p.name}</h5>

                    <p class="card-text small flex-grow-1 truncate-2">
                        ${p.description}
                    </p>

                    <p class="fw-bold mb-1">
                        $${p.price.toLocaleString("es-CL")}
                    </p>

                    <span class="badge text-start text-light mb-3">
                        ⭐ ${p.rating}
                    </span>

                    <button 
                        class="btn btn-primary w-100 mb-2 add-to-cart" 
                        data-id="${p.id}"
                        data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-title="Esta guitarra te llama ;D"
                    >
                    <i class="fa-solid fa-cart-plus"></i>
                        Agregar al carrito
                    </button>

                    <a href="/details.html?id=${
                        p.id
                    }" class="btn btn-outline-info">
                        Ver detalle
                    </a>
                </div>
            </div>
        </div>
    `
        )
        .join("");

    const tooltipTriggerList = document.querySelectorAll(
        '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
        (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );

    const buttons = container.querySelectorAll(".add-to-cart");

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.id;
            const product = products.find((p) => p.id == id);
            if (product) addToCart(product);
        });
    });
}
