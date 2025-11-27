export function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

    const badge = document.getElementById("cart-count");
    if (badge) badge.textContent = totalItems;
}

export function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

export function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(product) {
    const cart = getCart();

    const index = cart.findIndex((item) => item.id === product.id);

    if (index !== -1) {
        if (cart[index].qty < product.stock) {
            cart[index].qty += 1;
            alert("Producto agregado al carrito");
        } else {
            alert("No hay más stock disponible de este producto");
        }
    } else {
        if (product.stock > 0) {
            cart.push({ ...product, qty: 1 });
            alert("Producto agregado al carrito");
        } else {
            alert("Producto sin stock disponible");
        }
    }

    saveCart(cart);
    updateCartCount();
}

updateCartCount();
