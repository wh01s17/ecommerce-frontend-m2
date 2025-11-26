import { products } from "./data.js";
import { renderCards } from "./render-cards.js";

const top4 = products.toSorted((a, b) => b.rating - a.rating).slice(0, 4);

renderCards(top4, "#cards-row");
