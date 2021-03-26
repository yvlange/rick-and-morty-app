export function fetchCharacters() {
  const url = "https://rickandmortyapi.com/api/character";
  const main = document.querySelector("main");

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      data.results.forEach((characters) => {
        const section = document.createElement("section");
        section.classList.add("characters");
        main.append(section);
        const h2 = document.createElement("h2");
        h2.textContent = `${characters.name}`;
        const img = document.createElement("img");
        img.src = characters.image;
        img.alt = `${characters.name}`;

        section.append(h2);
        section.append(img);
      });
    });
}
