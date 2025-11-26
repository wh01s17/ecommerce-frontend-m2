import { products } from "./data.js";

const bestRated = [...products].sort((a, b) => b.rating - a.rating);

const top4 = bestRated.slice(0, 4);

const container = document.getElementById("best-products");

top4.forEach((product) => {
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-4";

    col.innerHTML = `
        <div class="card h-100 shadow-sm border-0">
            <img 
                src="${product.img}" 
                class="card-img-top" 
                alt="${product.name}" 
                style="height: 200px; object-fit: cover;" 
            />
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text small text-muted flex-grow-1">${
                    product.description
                }</p>

                <p class="fw-bold mb-1">$${product.price.toLocaleString(
                    "es-CL"
                )}</p>
                <span class="badge bg-warning text-dark mb-3">⭐ ${
                    product.rating
                }</span>

                <a href="#" class="btn btn-primary mt-auto">Ver más</a>
            </div>
        </div>
    `;

    document.getElementById("cards-row").appendChild(col);
});
