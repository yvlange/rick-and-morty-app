export function fetchCharacters() {
  const filterDropdown = document.querySelector(".header__filter");
  const type = filterDropdown.value;
  let url;

  if (type === "alive") {
    url = "https://rickandmortyapi.com/api/character?status=alive";
  } else if (type === "dead") {
    url = "https://rickandmortyapi.com/api/character?status=dead";
  } else if (type === "unknown") {
    url = "https://rickandmortyapi.com/api/character?status=unknown";
  } else if (type === "all") {
    url = "https://rickandmortyapi.com/api/character";
  }
  console.log(type);

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
        const main = document.querySelector("main");
        main.append(section);
        const h2 = document.createElement("h2");
        h2.classList.add("name");
        h2.textContent = `${characters.name}`;
        const img = document.createElement("img");
        img.classList.add("avatar");
        img.src = characters.image;
        img.alt = `${characters.name}`;

        if (characters.status === "Alive") {
          section.style.backgroundColor = "#cdfbbb";
        } else if (characters.status === "Dead") {
          section.style.backgroundColor = "#ff2020";
        } else if (characters.status === "unknown") {
          section.style.backgroundColor = "#d4d0d0";
        }
        section.append(h2);
        section.append(img);
      });
    });
}

export function clearCharacters() {
  const section = document.querySelectorAll("section");
  section.forEach((section) => section.remove());
}
