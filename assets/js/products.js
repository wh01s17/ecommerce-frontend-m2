import { products } from "./data.js";
import { renderCards } from "./render-cards.js";

renderCards(products, "#cards-row");

document
    .getElementById("product-filter")
    .addEventListener("change", applyFilters);

document.getElementById("search-input").addEventListener("input", applyFilters);

function applyFilters() {
    const filterValue = getFilterValue();
    const searchValue = getSearchValue().toLowerCase();

    let result = products.filter((p) =>
        p.name.toLowerCase().includes(searchValue)
    );

    result = sortProducts(result, filterValue);

    renderCards(result, "#cards-row");
}

function getFilterValue() {
    return document.getElementById("product-filter").value;
}

function getSearchValue() {
    return document.getElementById("search-input").value;
}

function sortProducts(array, filter) {
    const list = [...array];

    switch (filter) {
        case "az":
            return list.toSorted((a, b) => a.name.localeCompare(b.name));
        case "za":
            return list.toSorted((a, b) => b.name.localeCompare(a.name));
        case "price-low":
            return list.toSorted((a, b) => a.price - b.price);
        case "price-high":
            return list.toSorted((a, b) => b.price - a.price);
        case "top-rated":
            return list.toSorted((a, b) => b.rating - a.rating);
        default:
            return list;
    }
}
