import { fetchCharacters, clearCharacters } from "./lib/api.js";

const button = document.querySelector(".header__search-button");

button.addEventListener("click", () => {
  clearCharacters();
  fetchCharacters();
});
