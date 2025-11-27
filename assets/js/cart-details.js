import {
    getCart,
    removeFromCart as removeFromCartOriginal,
    updateCartCount,
    removeItemFromCart,
    addItemToCart,
} from "./cart.js";

const container = document.getElementById("cart-details");

function renderCart() {
    const cartItems = getCart();
    if (!container) return;

    if (cartItems.length === 0) {
        container.innerHTML = `
            <div id="cart-empty" class="container d-flex align-items-center justify-content-center">
g                    Tu carrito está vacío.
                    <br />
                    <br />
                    <a href="/products.html" class="btn btn-primary">
                        Ir a productos
                    </a>
                </div>
            </div>
        `;
        return;
    }

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    container.innerHTML = `
        <div class="container my-5">
            <h1 class="mb-4">Tu carrito <i class="fa-solid fa-cart-shopping"></i></h1>
            <div class="list-group">
                ${cartItems
                    .map(
                        (item) => `
                    <div class="list-group-item d-flex justify-content-between align-items-center bg-dark text-light">
                        <div class="d-flex align-items-center gap-3">
                            <a href="/details.html?id=${item.id}">
                                <img 
                                    src="${item.img}" 
                                    alt="${item.name}" 
                                    class="img-thumbnail"
                                >
                            </a>
                            
                            <div>
                                <a href="/details.html?id=${item.id}">
                                    <h5 class="mb-1">
                                        ${item.name}
                                    </h5>
                                </a>
                                
                                <p class="mb-0">
                                Precio unitario: $${item.price.toLocaleString(
                                    "es-CL"
                                )}
                                </p>
                                <div class="d-flex align-items-center gap-2 mt-2">
                                    <button class="btn btn-sm btn-outline-secondary" onclick="decreaseQuantity(${
                                        item.id
                                    })">
                                        <i class="fa-solid fa-minus"></i>
                                    </button>
                                    <span class="fw-bold">
                                        ${item.qty}
                                    </span>
                                    <button 
                                        class="btn btn-sm btn-outline-secondary" 
                                        onclick="increaseQuantity(${item.id})"
                                    >
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="text-end">
                            <p class="mb-2 fw-bold">
                                $${(item.price * item.qty).toLocaleString(
                                    "es-CL"
                                )}
                            </p>
                            <button 
                                class="btn btn-sm btn-danger" 
                                onclick="removeFromCart(${item.id})"
                            >
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </div>
                `
                    )
                    .join("")}
            </div>
            <div class="mt-4 text-end">
                <h4>
                    Total: $${total.toLocaleString("es-CL")}
                </h4>
                <a href="checkout.html" class="btn btn-success mt-2">
                    Proceder al pago
                </a>
            </div>
        </div>
    `;
}

function decreaseQuantity(id) {
    removeItemFromCart(id);
    renderCart();
}

function increaseQuantity(id) {
    addItemToCart(id);
    renderCart();
}

function removeFromCart(id) {
    removeFromCartOriginal(id);
    updateCartCount();
    renderCart();
}

window.decreaseQuantity = decreaseQuantity;
window.increaseQuantity = increaseQuantity;
window.removeFromCart = removeFromCart;

renderCart();
