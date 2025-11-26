import { products } from "./data.js";

const tarras = products.toSorted((a, b) => b.rating - a.rating);

document.getElementById("cards-row").innerHTML = tarras
    .map(
        (p) => `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div class="card h-100 shadow-sm border-0">
                <img 
                    src="${p.img}" 
                    class="card-img-top" 
                    alt="${p.name}" 
                    style="height: 200px; object-fit: cover;" 
                />
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${p.name}</h5>
                    <p class="card-text small text-muted flex-grow-1">${
                        p.description
                    }</p>

                    <p class="fw-bold mb-1">$${p.price.toLocaleString(
                        "es-CL"
                    )}</p>
                    <span class="badge bg-warning text-dark mb-3">⭐ ${
                        p.rating
                    }</span>

                    <a href="#" class="btn btn-primary mt-auto">Ver más</a>
                </div>
            </div>
        </div>
    `
    )
    .join("");
