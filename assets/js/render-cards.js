import { addToCart } from "./cart.js";

export function renderCards(products, targetSelector) {
    const container = document.querySelector(targetSelector);
    if (!container) return;

    container.innerHTML = products
        .map(
            (p) => `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div id="card" class="card h-100 shadow-sm border-0">
                <a href="/details.html?id=${p.id}">
                    <img 
                        src="${p.img}" 
                        class="card-img-top" 
                        alt="${p.name}"
                    />
                </a>
                

                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${p.name}</h5>

                    <p class="card-text small text-muted flex-grow-1">
                        ${p.description}
                    </p>

                    <p class="fw-bold mb-1">
                        $${p.price.toLocaleString("es-CL")}
                    </p>

                    <span class="badge text-start text-dark mb-3">
                        ⭐ ${p.rating}
                    </span>

                    <button 
                        class="btn btn-success w-100 mb-2 add-to-cart" 
                        data-id="${p.id}"
                    >
                    <i class="fa-solid fa-cart-plus"></i>
                        Agregar al carrito
                    </button>

                    <a href="/details.html?id=${p.id}" class="btn btn-primary">
                        Ver detalle
                    </a>
                </div>
            </div>
        </div>
    `
        )
        .join("");

    const buttons = container.querySelectorAll(".add-to-cart");

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.id;
            const product = products.find((p) => p.id == id);
            if (product) addToCart(product);
        });
    });
}
