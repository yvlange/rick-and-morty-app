import { fetchCharacters } from "./lib/api.js";
// import { filterCharacters } from "./lib/api.js";

const button = document.querySelector(".header__search-button");

function clearCharacters() {
  const section = document.querySelectorAll("section");
  section.forEach((section) => section.remove());
}

button.addEventListener("click", () => {
  clearCharacters();
  fetchCharacters();
});
