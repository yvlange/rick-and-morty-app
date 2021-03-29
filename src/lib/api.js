export function fetchCharacters() {
  let url;
  const filterDropdown = document.querySelector(".header__filter");
  const type = filterDropdown.value;
  const searchBar = document.querySelector(".header__search-bar");
  const name = searchBar.value;
  console.log(name);
  if (type === "alive") {
    url = `https://rickandmortyapi.com/api/character?name=${name}&status=alive`;
  } else if (type === "dead") {
    url = `https://rickandmortyapi.com/api/character?name=${name}&status=dead`;
  } else if (type === "unknown") {
    url = `https://rickandmortyapi.com/api/character?name=${name}&status=unknown`;
  } else if (type === "all") {
    url = `https://rickandmortyapi.com/api/character?name=${name}`;
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

        const info = document.createElement("div");
        info.classList.add("characters-info");

        const status = document.createElement("p");
        status.classList.add("characters-status");
        status.textContent = `Status: ${characters.status}`;

        const species = document.createElement("p");
        species.classList.add("characters-species");
        species.textContent = `Species: ${characters.species}`;

        const gender = document.createElement("p");
        gender.classList.add("characters-gender");
        gender.textContent = `Gender: ${characters.gender}`;

        info.append(h2);
        section.append(img);
        section.append(info);
        info.append(status);
        info.append(species);
        info.append(gender);

        if (characters.status === "Alive") {
          section.style.backgroundColor = "#cdfbbb";
        } else if (characters.status === "Dead") {
          section.style.backgroundColor = "#ff2020";
        } else if (characters.status === "unknown") {
          section.style.backgroundColor = "#d4d0d0";
        }
      });
    });
}

export function clearCharacters() {
  const section = document.querySelectorAll("section");
  section.forEach((section) => section.remove());
}
