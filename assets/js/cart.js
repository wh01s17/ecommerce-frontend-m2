export function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

    const badge = document.getElementById("cart-count");
    if (badge) badge.textContent = totalItems;
}

// Llamar al cargar la página
updateCartCount();
