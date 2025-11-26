import { products } from "./data.js";
import { renderCards } from "./render-cards.js";

const sorted = products.toSorted((a, b) => b.rating - a.rating);

renderCards(sorted, "#cards-row");
